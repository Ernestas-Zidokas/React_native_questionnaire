import { put, takeLatest, call, select } from 'redux-saga/effects';
import { actions } from './reducer';
import { callGetQuestions } from '../../../api';
import * as selectors from './selectors';

export default function* sagas() {
  yield takeLatest(actions.getQuestions.type, getQuestions);
  yield takeLatest(actions.selectAnswer.type, selectAnswer);
}

export function* getQuestions() {
  try {
    yield put(actions.loadQuestionsStart());
    const result = yield call(callGetQuestions);
    const questions = result.data.data.questions;

    yield put(actions.questionsChanged(questions));
    yield put(actions.loadQuestionsDone());
  } catch (e) {
    yield put(actions.loadQuestionsDone(true));
  }
}

export function* selectAnswer(action) {
  const questions = yield select(selectors.getQuestionsData);

  const pageIndex = action.payload[0];
  const questionIndex = action.payload[1];
  const isMultiple = action.payload[2];

  const mappedSelectedOptionsAnswers = questions.map((question, index) => {
    if (index === pageIndex) {
      const options = question.options.map((option, index) => {
        if (isMultiple) {
          if (index === questionIndex) {
            return {
              ...option,
              isSelected: !option.isSelected,
            };
          }

          return option;
        } else {
          return {
            ...option,
            isSelected: index === questionIndex,
          };
        }
      });

      return {
        ...question,
        options,
      };
    }

    return question;
  });

  yield put(actions.questionsChanged(mappedSelectedOptionsAnswers));
}
