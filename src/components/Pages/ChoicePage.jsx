import React, { useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authslice";
import Logo from "../../assets/QuizzardMain.png";

const ChoicePage = () => {
  const [disableButtn, setDisableButtn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);


  useEffect(() => {    
    if (questions.length === 0) {
      setDisableButtn(true);
    } else setDisableButtn(false);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-theme-lightest">
    
      <img src={Logo}></img>
      <h1 className="text-5xl font-bold mb-5 text-theme-dark mt-4">Welcome to Quizzard</h1>
      <p > Test your knowledge from the knowledge of professionals.</p>
      <div>
        <button
          onClick={() => navigate("/adminlogin")}
           className="bg-theme-dark text-white w-full py-2 px-4 rounded m-2"
        >
          Examiner
        </button>
        <br/>
        <button
          onClick={() => navigate("/examinee")}
          className="bg-theme-dark text-white w-full py-2 px-4 rounded m-2 disabled:bg-gray-400"
          disabled={disableButtn}
        >
          Examinee
        </button>
      </div>
    </div>
  );
};

export default ChoicePage;
