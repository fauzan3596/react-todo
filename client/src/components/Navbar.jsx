import React from "react";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "nav-link text-white bg-black rounded-3 px-3 me-2"
      : "nav-link text-white rounded-3 px-3 me-2";
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary py-2 sticky-top border-bottom 
      border-white border-opacity-75 border-1"
      data-bs-theme="dark"
    >
      <div className="container-fluid ms-4 me-3">
        <NavLink className="navbar-brand list-inline" to="/">
          <FaReact className="mb-1 me-3" size="40" />
          <h1 className="d-inline fs-5">My Todos List</h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/todos" end>
                Todos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/todos/add">
                Add Todos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
