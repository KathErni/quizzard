import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState:{
    questions:[],
  },
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    deleteQuestion: (state, action) => {
      state.questions.splice(action.payload, 1);
    },
    updateQuestion: (state, action) => {
      const { index, newQuestion } = action.payload;
      state.questions[index] = newQuestion;
    },
  },
});

export const { addQuestion, deleteQuestion, updateQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;