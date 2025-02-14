import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/QuizzardMain.png";
import { buttonMain, disableButton, mainTitle } from "../Styles/Styles.jsx";

const ChoicePage = () => {
  const [disableButtn, setDisableButtn] = useState(true);
  const navigate = useNavigate();

  const questions = useSelector((state) => state.questions.questions);

  useEffect(() => {
    questions.length === 0 ? setDisableButtn(true) : setDisableButtn(false);
  });

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-theme-purple">
        <header>
          <h1 className={mainTitle}>Welcome to Quizzard</h1>
          <p className="  text-black m-3">
            Test your knowledge from the knowledge of professionals.
          </p>
        </header>

        <section>
          <div className="flex justify-center items-center">
            <img className="" src={Logo}></img>

            <article>
              <div>
                <h1 className=" font-serif flex ">Are you a:</h1>
                <button
                  onClick={() => navigate("/adminlogin")}
                  className={buttonMain}
                >
                  Examiner
                </button>
                <button
                  onClick={() => navigate("/examinee")}
                  className={disableButton}
                  disabled={disableButtn}
                >
                  Examinee
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ChoicePage;
