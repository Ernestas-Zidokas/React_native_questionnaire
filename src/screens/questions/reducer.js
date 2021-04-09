import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';

export class Questions extends ImmerReducer {
  loadQuestionsStart() {
    this.draftState.questionsLoading = true;
  }

  loadQuestionsDone(failed) {
    this.draftState.questionsLoading = false;
    this.draftState.questionsLoadFailed = failed || false;
  }

  getQuestions(_questionsData) {
    return;
  }

  questionsChanged(questions) {
    this.draftState.questionsData = questions;
  }

  selectAnswer(_page, _questionIndex, _isMultiple) {
    return;
  }
}

export const actions = createActionCreators(Questions);

export default createReducerFunction(Questions, {
  questionsLoading: false,
  questionsLoadFailed: false,
  questionsData: [],
});
