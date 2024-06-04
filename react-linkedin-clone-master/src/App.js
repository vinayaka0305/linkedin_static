import "./styles/App.css";
import LoginPage from "./components/authentication/LoginPage";
import SignUp from "./components/authentication/SignUp";
import { Navbar } from "./components/navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Me } from "./components/navlinks/Me";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import AccountHome from "./components/Account/AccountHome";
import { MyNetwork } from "./components/navlinks/MyNetwork";
import { Jobs } from "./components/navlinks/Jobs";
import { Messaging } from "./components/navlinks/Messaging";
import { Notifications } from "./components/navlinks/Notifications";
import { Home } from "./components/navlinks/Home";
import { Premium } from "./components/navlinks/Premium";
import UserProfile from "./components/userProfile/UserProfile";
import { createContext, useState } from "react";
import SearchResults from "./components/search/SearchResults";
import blankProfile from "./assets/profilePicture/blank-profile-picture.webp";

export const AuthContext = createContext();

function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [darkTheme, setDarkTheme] = useState(true);
  const [profileImage, setProfileImage] = useState(blankProfile);

  document.body.style.backgroundColor = darkTheme ? "#000" : "#ddd";

  return (
    <AuthContext.Provider
      value={{
        jwtToken,
        setJwtToken,
        userInfo,
        setUserInfo,
        darkTheme,
        setDarkTheme,
        profileImage,
        setProfileImage,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home/*" element={<Navbar />}>
            <Route path="feed/*" element={<Home />} />
            <Route path="my-network" element={<MyNetwork />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="messages" element={<Messaging />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="me" element={<Me />} />
            <Route path="account" element={<AccountHome />} />
            <Route path="feed/account" element={<AccountHome />} />
            <Route path="id/:id" element={<UserProfile />} />
            <Route path="search/:searchterm" element={<SearchResults />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
