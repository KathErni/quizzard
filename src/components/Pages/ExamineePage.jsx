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
    <div className="flex flex-col ustify-center min-h-screen bg-theme-blue p-8">
      <div>
        <h1 className="text-2xl font-bold font-mono mb-3">Question</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-theme-purple p-5">
        {questions.map((q, index) => (
          <div key={index}>
            <strong>{q.question}</strong>
            {q.options.map((option, idx) => (
              <div key={idx}>
                {/* Choices */}
                <input
                  type="radio"
                  name={`answer${index}`} // Unique name for each question
                  value={option} // Value is the option text
                  onChange={handleChange}
                  checked={answers[`answer${index}`] === option} // Check if this option is selected
                  //change radiobox to a more relevant type
                  className=""
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="bg-theme-ochre text-black  text-lg  p-3  py-2 rounded my-2"
        >
          Submit Answers
        </button>
      </form>
      <div>
        <div>
          <button
            className="bg-theme-ochre text-black  text-lg  p-3  py-2 rounded my-2 block m-auto"
            onClick={() => navigate("/")}
          >
            Go Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamineePage;
