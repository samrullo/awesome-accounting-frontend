import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ChildrenPage from "./components/ChildrenPage";
import ParentsPage from "./components/ParentsPage";
import TeachersPage from "./components/TeachersPage";
import CoursesPage from "./components/CoursesPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="container mt-5">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1>Welcome to Awesome Accounting</h1>
          <nav>
            <ul className="list-inline">
              {isLoggedIn ? (
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              ) : (
                <li className="list-inline-item">
                  <Link to="/login">Login</Link>
                </li>              
              )}
            </ul>
          </nav>
        </header>
        <div id="loginRegisterContainer" className="my-4">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/children" element={<ChildrenPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/parents" element={<ParentsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
