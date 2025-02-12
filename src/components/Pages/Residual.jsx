  //Authentication in Choice if Login is First
//   const { isAuthenticated, user } = useSelector((state) => state.auth);
  //   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };
//   useEffect(() => {
//     if (!isAuthenticated) {
//       dispatch(logout());
//       navigate("/");
//     }
//     if (questions.length === 0) {
//       setDisableButtn(true);
//     } else setDisableButtn(false);
//   });

  {/* {isAuthenticated && (
        <div className="w-full flex justify-between items-center p-4 bg-theme-base text-black fixed top-0 left-0">
          <span>Welcome, {user.username}</span>
          <button
            onClick={handleLogout}
            className="bg-theme-light text-theme-dark py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )} */}

//For Examiner Page where Question and Answer is only on.
    
//   const dispatch = useDispatch();
//   //For Redux using the state of question with the name question
//   const questions = useSelector((state) => state.questions.questions);
//   const { register, handleSubmit, setValue, reset } = useForm();
//   const navigate = useNavigate();
//   const [editIndex, setEditIndex] = useState(null);
//   const { isAuthenticated, user } = useSelector((state) => state.auth);
//   useEffect(() => {
//     if (!isAuthenticated) {
//       dispatch(logout());
//       navigate("/");
//     }
//   });
//   const onSubmit = (data) => {
//     if (editIndex !== null) {
//       dispatch(
//         updateQuestion({
//           index: editIndex,
//           newQuestion: { question: data.question, answer: data.answer },
//         })
//       );
//       setEditIndex(null);
//     } else {
//       dispatch(addQuestion({ question: data.question, answer: data.answer }));
//     }
//     reset();
//   };

//   const handleEdit = (index) => {
//     const questionToEdit = questions[index];
//     setValue("question", questionToEdit.question);
//     setValue("answer", questionToEdit.answer);
//     setEditIndex(index);
//   };



//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };
//   console.log("Questions in ExaminerPage:", questions);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-theme-lightest p-8">
//       {isAuthenticated && (
//         <div className="w-full flex justify-between items-center p-4 bg-theme-dark text-white fixed top-0 left-0">
//           <span className="text-lg">Welcome, {user.username}</span>
//           <button
//             onClick={handleLogout}
//             className="bg-theme-light text-theme-dark py-2 px-4 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//       <h1 className="text-2xl font-bold mb-4 text-theme-dark">Examiner Page</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
//         <input
//           type="text"
//           placeholder="Question"
//           {...register("question", { required: true })}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Answer"
//           {...register("answer", { required: true })}
//           className="border p-2"
//         />
//         <button
//           type="submit"
//           className="bg-theme-base text-white py-2 px-4 ml-2"
//         >
//           {editIndex !== null ? "Update" : "Add"}
//         </button>
//       </form>
//       <div className="w-full max-w-md">
//         {questions.map((q, index) => (
//           <div key={index} className="mb-2 flex text-theme-dark items-center">
//             <div className="flex-grow">
//               <span>{q.question}</span>
//             </div>
//             <div className="flex-shrink-0">
//               <button
//                 onClick={() => handleEdit(index)}
//                 className="bg-yellow-500 text-white py-1 px-2 ml-2"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => dispatch(deleteQuestion(index))}
//                 className="bg-red-500 text-white py-1 px-2 ml-2"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
  

//For Examinee if Answer is only type written
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