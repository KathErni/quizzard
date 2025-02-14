import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addQuestion,
  deleteQuestion,
  updateQuestion,
} from "../../redux/questionslice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authslice";
import { buttonMain } from "../Styles/Styles";

const ExaminerPage = () => {
const dispatch =useDispatch(); //For Redux
const questions = useSelector((state)=> state.questions.questions);
const [data, setData] = useState({ question: '', options: ['', '', '', ''], correctAnswer: '' });
const[editIndex, setEditIndex] = useState(null);
const navigate =useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);


const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === 'question' || name === 'correctAnswer') {
    setData((prevData) => ({ ...prevData, [name]: value }));
  } else {
    const index = parseInt(name.split('-')[1], 10);
    const newOptions = [...data.options];
    newOptions[index] = value;
    setData((prevData) => ({ ...prevData, options: newOptions }));
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newQuestion = {
    question: data.question,
    options: data.options,
    correctAnswer: data.correctAnswer,
  };


  if (editIndex !== null) {
    dispatch(updateQuestion({ index: editIndex, newQuestion }));
    setEditIndex(null);
  } else {
    dispatch(addQuestion(newQuestion));
  }

  setData({ question: '', options: ['', '', '', ''], correctAnswer: '' }); // Reset form
};

const handleEdit = (index) => {
  setEditIndex(index);
  setData(questions[index]); // Populate form with the question to edit
};

const handleDelete = (index) => {
  dispatch(deleteQuestion(index));
};


  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

return (
  
  <div className="flex items-center justify-center min-h-screen bg-theme-blue p-8">
    
      {isAuthenticated && (
        <div className="w-full flex justify-between items-center p-4 bg-theme-purple text-white fixed top-0 left-0">
          <span className="text-lg">Welcome, <strong> {user.username}</strong></span>
          <button
            onClick={handleLogout}
            className="bg-theme-blue text-theme-dark py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}
      
  <div className="min-h-screen p-10">
  <div>
          <h1 className="text-3xl py-5 font-serif text-theme-white font-bold">Create/Update Questions</h1>
        </div>
    <form onSubmit={handleSubmit}>
      <input 
        type="longtext"
        name="question"
        value={data.question}
        onChange={handleChange}
        placeholder="Question Here"
        className="border rounded p-2 w-full "
        required
      />
      {data.options.map((option, index) => (
        <input
          key={index}
          type="text"
          name={`option-${index}`}
          value={option}
          onChange={handleChange}
          placeholder={`Choice ${index + 1}`}
          className="border p-2 "
          required
         
        />
      ))}
      <select 
        name="correctAnswer"
        value={data.correctAnswer}
        onChange={handleChange}
        className="border p-2 w-50 items-end"
        required
      >
        <option value="" disabled>Select Correct Answer</option>
        {data.options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button type="submit" className=''>{editIndex !== null ? 'Update' : 'Add'} Question</button>
    </form>
        <div>
          <h1 className="text-3xl my-5 font-serif text-white font-bold">Stored Questions</h1>
        </div>
    <ul>
      {questions.map((q, index) => (
        <li key={index}
        className="bg-white p-5 rounded shadow-lg">
          <strong>{q.question}</strong>
          <ul>
            {q.options.map((option, idx) => (
              <li key={idx}>{option} {option === q.correctAnswer ? '(Correct)' : ''}</li>
            ))}
          </ul>
          <button className="bg-theme-ochre text-black  text-lg  p-3  py-2 rounded m-2" onClick={() => handleEdit(index)}>Edit</button>
          <button className="bg-theme-orange text-black  text-lg  p-3  py-2 rounded m-2"onClick={() => handleDelete(index)}>Delete</button>  
        </li>
      ))}
    </ul>

    <div>
          <button
          className={buttonMain}
          onClick={() => navigate("/")}>Go Back to Menu</button>
    </div>
  </div>
  </div>
);
};

export default ExaminerPage;
