import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authslice";

const ChoicePage = () => {
//   const [disableButtn, setDisableButtn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const questions = useSelector((state) => state.questions.questions);
  

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-theme-lightest">
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
      <image src=" "></image>
      <h1 className="text-5xl font-bold mb-5 text-theme-dark mt-4">Welcome to Quizzard</h1>
      <p>Test your knowledge from the knowledge of professionals.</p>
      <div>
        <button
          onClick={() => navigate("/adminlogin")}
           className="bg-theme-dark text-white py-2 px-4 rounded m-2 disabled:bg-gray-400"
        >
          Examiner
        </button>
        <button
          onClick={() => navigate("/examinee")}
          className="bg-theme-dark text-white py-2 px-4 rounded m-2 disabled:bg-gray-400"
        //   disabled={disableButtn}
        >
          Examinee
        </button>
      </div>
    </div>
  );
};

export default ChoicePage;