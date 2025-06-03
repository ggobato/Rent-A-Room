import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

// Import components
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import RoomsList from './components/roomslist/RoomsList';
import Home from './components/home/Home';


function App() {
  const isVSCodeServer = window.location.href.includes('cloudfront.net');
  const basename = isVSCodeServer ? '/proxy/3000/' : '/';

  return (
    <div>


      <Router basename={basename}>

        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Rent A Room
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/rooms"} className="nav-link">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>

          </div>
        </nav>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </Router>


    </div>
  );

}

export default App;
