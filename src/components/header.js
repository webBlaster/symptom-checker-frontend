import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="header">
      <h2>Symcheck</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>

        {!isAuthenticated ? (
          <li>
            <Link to="/register">Register</Link>
          </li>
        ) : null}
        {isAuthenticated ? (
          <li>
            <Link to="/history">History</Link>
          </li>
        ) : null}
        <li>
          {isAuthenticated ? <a href="/">Logout</a> : <a href="/">login</a>}
        </li>
      </ul>
    </div>
  );
};

export default Header;
