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

export default ExamineePage;
