import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Home } from "../navlinks/Home";

import styles from "../../styles/navbar/NavBar.module.css";
import NavLinks from "./NavLinks";
import Logo from "../logo/Logo";
import SearchBar from "./SearchBar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../App";

export const Navbar = () => {
  const navigate = useNavigate();
  const {darkTheme} = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem("jwtToken") === null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <nav className={styles.navBar} style={{backgroundColor:darkTheme?"#1b1f23":"#fff"}}>
        <section>
        <div className={styles.logoSearchBar}>
          <Logo />
          <SearchBar />
        </div>
        <NavLinks />
        </section>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Outlet />
    </>
  );
};
