import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPageAdmin from "./components/Pages/LoginPageAdmin";
import ChoicePage from "./components/Pages/ChoicePage";
import ExamineePage from "./components/Pages/ExamineePage";
import ExaminerPage from "./components/Pages/ExaminerPage";
import RegisterPageAdmin from "./components/Pages/RegisterPageAdmin";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ChoicePage />} />
          <Route path="/adminlogin" element={<LoginPageAdmin />} />
          <Route path="/registeradmin" element={<RegisterPageAdmin/>}/>
          {/* teacher */}
          <Route path="/examiner" element={<ExaminerPage />} />
          {/* student */}
          <Route path="/examinee" element={<ExamineePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
