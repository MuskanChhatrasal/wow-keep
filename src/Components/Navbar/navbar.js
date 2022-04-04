import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { Toast } from "../Toast/toast";

const Navbar = () => {
  const { authState, logout } = useAuth();
  return (
    <header
      className="header cont-shadow"
      style={{ width: "96rem", backgroundColor: "white" }}
    >
      <div className="logos">
        <Link to="/">
          <a>
            W <span className="logos-o">O</span>W Keep
            <span className="logos-excla">!</span>
          </a>
        </Link>
      </div>
      <ul className="header-nav">
        <li style={{ marginTop: "0.75rem", cursor: "pointer" }}>
          {!authState.userID ? (
            <i class="fas fa-user-alt"></i>
          ) : (
            `Hello, ${authState.userName}`
          )}
        </li>
        <li style={{ cursor: "pointer" }}>
          {authState.userID ? (
            <a onClick={() => logout()}>
              <i
                class="fas fa-sign-out-alt"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Logout
            </a>
          ) : (
            <Link to="/login">
              <i
                class="fas fa-sign-in-alt"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Login
            </Link>
          )}
        </li>
        <li>
          <button className="menu">
            <i className="bi bi-list"></i>
          </button>
        </li>
      </ul>
      <Toast />
    </header>
  );
};

export default Navbar;
