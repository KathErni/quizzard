import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../redux/questionslice';
import authReducer from '../redux/authslice';

export const store = configureStore({
  reducer: {
    
    questions: questionsReducer,
    auth: authReducer,
  },
  //Reducer - reducer checks, action will be called, then modifies the store
  //Dispatch - execute the action
});