import { fork } from 'redux-saga/effects';
import questionsSagas from '../screens/questions/sagas';

function* rootSaga() {
  yield fork(questionsSagas);
}

export default rootSaga;
