import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/header";
import { login } from "../actions/auth";

const Signin = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const signIn = (event) => {
    event.preventDefault();
    dispatch(login(values, history, dispatch, setLoading));
  };

  return (
    <>
      <Header />
      <div className="login">
        <h3>Sign in</h3>
        <form onSubmit={signIn}>
          <input
            type="email"
            required
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            required
            placeholder="password"
            onChange={handleChange}
          />
          <br />
          <input
            className="auth-btn"
            type="submit"
            value={loading ? "Loading..." : "Sign In"}
          />
        </form>
      </div>
    </>
  );
};

export default Signin;
