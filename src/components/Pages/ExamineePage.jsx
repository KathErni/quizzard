import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ModalScore from "../shared/ModalScore";


const ExamineePage = () => {

    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.questions);
    const [answers, setAnswers] = useState({}); // Store selected answers
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value })); // Update selected answer
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let score = 0;
  
      questions.forEach((q, index) => {
        if (answers[`answer${index}`] === q.correctAnswer) {
          score++;
        }
      });
  
      // Display the score or handle it as needed
      alert(`Your score: ${score} out of ${questions.length}`);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-theme-light p-8">
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index}>
            <strong>{q.question}</strong>
            {q.options.map((option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name={`answer${index}`} // Unique name for each question
                  value={option} // Value is the option text
                  onChange={handleChange}
                  checked={answers[`answer${index}`] === option} // Check if this option is selected
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <div>
      
      <button
        onClick={() => navigate("/")}>
        Go Back to Main
      </button>
      
    
    </div>
      </div>
      
      
    );
  };
  



















  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     dispatch(logout());
  //     navigate("/");
  //   }
  // });

//   const onSubmit = (data) => {
//     let newScore = 0;
//     //Passing Grade
//     const passingGrade = questions.length /2;
//     questions.forEach((q, index) => {
//       //Change to multiple choice
//       if (
//         data[`answer${index}`] &&
//         data[`answer${index}`].toLowerCase().trim() === q.answer.toLowerCase()
//       ) {
//         newScore++;
//       }
//     });
//     setScore(newScore);

//     if (passingGrade <= newScore) {
//       setPass(true);
//     } else setPass(false);
//   };

//   const handleGoBack = () => {
//     navigate("/");
//   };

//   const resetScore = () => {
//     setScore(null);
//   };

//   const closeModal = () => {
//     setScore(null);
//   };

//   console.log("Questions in ExamineePage:", questions);
// //Remove user authentication to examinee : Reason => Student
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-theme-lightest p-8">
//       <h1 className="text-2xl font-bold mb-4 text-theme-dark mt-16">
//         Examinee Page
//       </h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
//         {questions.map((q, index) => (
//           <div key={index} className="mb-4 bg-white shadow-md rounded p-4">
//             <span className="text-theme-dark block mb-2">{q.question}</span>
//             <input
//               type="text"
//               {...register(`answer${index}`, { required: true })}
//               onChange={resetScore}
//               className="border p-2 w-full"
//             />
//           </div>
//         ))}
//         <div className="flex flex-col items-center justify-center bg-theme-lightest">
//           <button type="submit" className="bg-theme-base text-white py-2 px-4">
//             Submit
//           </button>

//         {/* Goes Back to Choices */}
//           <button
//             onClick={handleGoBack}
//             className="bg-theme-dark text-white py-2 px-4 mt-4"
//           >
//             Back to Choices
//           </button>
//         </div>
//       </form>
//       {score !== null && (
//         <ModalScore score={score} closeModal={closeModal} passed={pass} />
//       )}
//     </div>
//   );


export default ExamineePage;