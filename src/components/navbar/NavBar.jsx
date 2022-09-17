import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuerry";
import logo from "../../assets/images/Rigvigon Logo.png";
import "./NavBar.scss";

const NavBar = () => {
  const [selectPage, setSelectPage] = useState("Home");
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <div className="nav__component">
      <div className="nav__header">
        <img className="logo" src={logo} alt="" />
      </div>

      {isPageWide ? (
        <div className="links__content">
          <NavLink
            className={selectPage === "Home" ? "links selected" : "links"}
            to="/"
            onClick={() => setSelectPage("Home")}
          >
            Home
          </NavLink>
          <NavLink
            className={selectPage === "About Us" ? "links selected" : "links"}
            to="/about Us"
            onClick={() => setSelectPage("About Us")}
          >
            About Us
          </NavLink>
          <NavLink
            className={selectPage === "What we do" ? "links selected" : "links"}
            to="/What we do"
            onClick={() => setSelectPage("What we do")}
          >
            What we do
          </NavLink>

          <NavLink
            className={
              selectPage === "Contact Us"
                ? "links Contact-Link selected"
                : "links Contact-Link"
            }
            to="/contact Us"
            onClick={() => setSelectPage("Contact Us")}
          >
            Contact Us
          </NavLink>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </div>
  );
};

export default NavBar;
