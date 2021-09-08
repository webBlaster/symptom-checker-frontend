import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../actions/auth";
import Header from "../components/header";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    gender: "male",
    year_of_birth: "1910",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (event) => {
    event.preventDefault();
    dispatch(register(values, history, dispatch, setLoading));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="register">
        <h3>CREATE ACCOUNT</h3>
        <form onSubmit={signUp}>
          <input
            type="email"
            name="email"
            required
            placeholder="email"
            onChange={handleChange}
          />
          <br />
          <select name="gender" required onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <input
            type="number"
            placeholder="year of birth"
            required
            min="1910"
            max="2021"
            name="year_of_birth"
            defaultValue="1910"
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
            value={loading ? "Loading..." : "Sign Up"}
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
