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

const ExaminerPage = () => {
const dispatch =useDispatch();
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
  <div className="flex flex-col items-center justify-center min-h-screen bg-theme-lightest p-8">
      {isAuthenticated && (
        <div className="w-full flex justify-between items-center p-4 bg-theme-dark text-white fixed top-0 left-0">
          <span className="text-lg">Welcome, {user.username}</span>
          <button
            onClick={handleLogout}
            className="bg-theme-light text-theme-dark py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}
  <div className="flex flex-col items-center min-h-screen bg-theme-lightest mb-10 p-8">
    <form onSubmit={handleSubmit} className="bg-theme-base mb-5 py-2 px-4 ml-2">
      <input 
        type="text"
        name="question"
        value={data.question}
        onChange={handleChange}
        placeholder="Question Here"
        required
      />
      {data.options.map((option, index) => (
        <input
          key={index}
          type="text"
          name={`option-${index}`}
          value={option}
          onChange={handleChange}
          placeholder={`Option ${index + 1}`}
          required
        />
      ))}
      <select 
        name="correctAnswer"
        value={data.correctAnswer}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select Correct Answer</option>
        {data.options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button type="submit">{editIndex !== null ? 'Update' : 'Add'} Question</button>
    </form>

    <ul>
      {questions.map((q, index) => (
        <li key={index}>
          <strong>{q.question}</strong>
          <ul>
            {q.options.map((option, idx) => (
              <li key={idx}>{option} {option === q.correctAnswer ? '(Correct)' : ''}</li>
            ))}
          </ul>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
    <div>
  <button
          onClick={() => navigate("/")}>Go Back to Menu</button>
          </div>
  </div>
  </div>
);
};
















  // //Use in react router
  // const dispatch = useDispatch();
  // //For Redux using the state of question with the name question
  // const questions = useSelector((state) => state.questions.questions);
  // const { register, handleSubmit, setValue, reset } = useForm();
  // const navigate = useNavigate();
  // const [editIndex, setEditIndex] = useState(null);
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     dispatch(logout());
  //     navigate("/");
  //   }
  // });
  // const onSubmit = (data) => {
  //   if (editIndex !== null) {
  //     dispatch(
  //       updateQuestion({
  //         index: editIndex,
  //         newQuestion: { question: data.question, answer: data.answer },
  //       })
  //     );
  //     setEditIndex(null);
  //   } else {
  //     dispatch(addQuestion({ question: data.question, answer: data.answer }));
  //   }
  //   reset();
  // };

  // const handleEdit = (index) => {
  //   const questionToEdit = questions[index];
  //   setValue("question", questionToEdit.question);
  //   setValue("answer", questionToEdit.answer);
  //   setEditIndex(index);
  // };



  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate("/");
  // };
  // console.log("Questions in ExaminerPage:", questions);

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-theme-lightest p-8">
  //     {isAuthenticated && (
  //       <div className="w-full flex justify-between items-center p-4 bg-theme-dark text-white fixed top-0 left-0">
  //         <span className="text-lg">Welcome, {user.username}</span>
  //         <button
  //           onClick={handleLogout}
  //           className="bg-theme-light text-theme-dark py-2 px-4 rounded"
  //         >
  //           Logout
  //         </button>
  //       </div>
  //     )}
  //     <h1 className="text-2xl font-bold mb-4 text-theme-dark">Examiner Page</h1>
  //     <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
  //       <input
  //         type="text"
  //         placeholder="Question"
  //         {...register("question", { required: true })}
  //         className="border p-2 mr-2"
  //       />
  //       <input
  //         type="text"
  //         placeholder="Answer"
  //         {...register("answer", { required: true })}
  //         className="border p-2"
  //       />
  //       <button
  //         type="submit"
  //         className="bg-theme-base text-white py-2 px-4 ml-2"
  //       >
  //         {editIndex !== null ? "Update" : "Add"}
  //       </button>
  //     </form>
  //     <div className="w-full max-w-md">
  //       {questions.map((q, index) => (
  //         <div key={index} className="mb-2 flex text-theme-dark items-center">
  //           <div className="flex-grow">
  //             <span>{q.question}</span>
  //           </div>
  //           <div className="flex-shrink-0">
  //             <button
  //               onClick={() => handleEdit(index)}
  //               className="bg-yellow-500 text-white py-1 px-2 ml-2"
  //             >
  //               Edit
  //             </button>
  //             <button
  //               onClick={() => dispatch(deleteQuestion(index))}
  //               className="bg-red-500 text-white py-1 px-2 ml-2"
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  


export default ExaminerPage;