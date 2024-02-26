import React, { useState } from "react";
import "./Header.css";
import { BiChevronLeft, BiChevronDown } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [configureOpen, setConfigureOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleConfigure = () => {
    setConfigureOpen(!configureOpen);
  };

  const openConfigure = () => {
    setConfigureOpen(true);
  };

  const closeConfigure = () => {
    setConfigureOpen(false);
  };
  return (
    <header className="header">
      <div className="menu-container">
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>List Patient</li>
            <li>Register</li>
            <li className="configure">
              <div
                className="configure-dropdown"
                onClick={() =>
                  configureOpen ? closeConfigure() : openConfigure()
                }
              >
                Configure
                {/* {configureOpen ? (
                  <BiChevronDown style={{ color: "white" }} />
                ) : (
                  <BiChevronLeft style={{ color: "white" }} />
                )} */}
              </div>
              {configureOpen && (
                <ul className="submenu">
                  <li>Country</li>
                  <li>State</li>
                  <li>City</li>
                  <li>Hospital</li>
                  <li>Clinic</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="logo-container">
        <span>CLINIC</span>
      </div>
      <div className="logout-container">
        <button className="logout-button">
          <FaRegCircleUser />
        </button>
      </div>
    </header>
  );
};

export default Header;
