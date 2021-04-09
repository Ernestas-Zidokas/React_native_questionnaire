import { combineReducers } from 'redux';
import questionsReducer from '../screens/questions/reducer';

const rootReducer = combineReducers({ questions: questionsReducer });

export default rootReducer;
