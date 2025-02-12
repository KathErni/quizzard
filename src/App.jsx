import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPageAdmin from "./components/Pages/LoginPageAdmin";
import ChoicePage from "./components/Pages/ChoicePage";
import ExamineePage from "./components/Pages/ExamineePage"; // student
import ExaminerPage from "./components/Pages/ExaminerPage"; // teacher


const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<ChoicePage/>}/>
        <Route path="/adminlogin" element ={<LoginPageAdmin/>}/>
        <Route path="/examiner" element={<ExaminerPage />} />
        <Route path="/examinee" element={<ExamineePage />} />
      </Routes>
    </Router>
    
    </>
  );
};

export default App
