import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../redux/questionslice';
import authReducer from '../redux/authslice';

export const store = configureStore({
  reducer: {
    
    questions: questionsReducer,
    auth: authReducer,
  },
});