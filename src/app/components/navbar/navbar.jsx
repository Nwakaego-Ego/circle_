"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <div className="logo"></div>
          {/* <FontAwesomeIcon icon={faHome} className="sidebar-home" />
          <FontAwesomeIcon icon={faUser} className="sidebar-user" /> */}
          <div className="sidebar-home">Home</div>
          <div className="sidebar-user">Profile</div>
        </div>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSignIn} />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faSignIn} />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
