import React, { useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import Signup from "./userAuth/Signup";
import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Login from "./userAuth/Login";
import Home from "./home/Home";
import { SearchProvider } from "../SearchContext";
import { DpProvider } from "../ProfilePictureContext";

const App = () => {
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
  return (
    <>
      <SearchProvider>
        <DpProvider>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to={"/"} /> : <Login />}
            />
            <Route
              path="/signup"
              element={isLoggedIn ? <Navigate to={"/"} /> : <Signup />}
            />
          </Routes>
        </DpProvider>
      </SearchProvider>
    </>
  );
};

export default App;
