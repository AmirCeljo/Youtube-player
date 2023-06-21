import {combineReducers } from 'redux';
import apiReducer from './itemReducer';

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;