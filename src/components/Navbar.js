// Imported React Modules
import React from "react";
import { NavLink, Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";

//Imported CSS Files
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <ReactToolTip />
          <Link to="/" className="navbar-brand" data-tip="Home Page">
            RW Bad Bank
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <ul className="nav">
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "red" } : { color: "" }
                    }
                    className="nav-link"
                    aria-current="page"
                    to="/"
                    data-tip="Go to Home Page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "red" } : { color: "" }
                    }
                    className="nav-link"
                    aria-current="page"
                    to="/createaccount"
                    data-tip="Create a New Account"
                  >
                    Create Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "red" } : { color: "" }
                    }
                    className="nav-link"
                    to="/deposit"
                    data-tip="Make a Deposit"
                  >
                    Deposit
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "red" } : { color: "" }
                    }
                    className="nav-link"
                    to="/withdraw"
                    data-tip="Make a Withdraw"
                  >
                    Withdraw
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "red" } : { color: "" }
                    }
                    className="nav-link"
                    to="/alldata"
                    data-tip="View All Data"
                  >
                    All Data
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
