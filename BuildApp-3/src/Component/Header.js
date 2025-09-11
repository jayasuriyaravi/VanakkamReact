import React from "react";
import ReactDom from "react-dom/client";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.pikbest.com/png-images/20240907/top-fast-food-logo-designs-that-capture-attention-in-2024_10813950.png!w700wp"
        ></img>
      </div>
      <div className="nav-con">
        <ul className="nav-items">
          <li>home</li>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
