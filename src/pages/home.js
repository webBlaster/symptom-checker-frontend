import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Result from "../components/result";
import { API_URL } from "../constants";

const Home = () => {
  const [results, setResult] = useState([]);
  const getSymptoms = async (event) => {
    let value = event.target.value;
    let response = await fetch(`${API_URL}/getSymptoms/${value}`);
    let result = await response.json();
    if (result) {
      setResult(result);
    }
  };

  return (
    <div>
      <TextField
        style={{ width: "60%" }}
        label="Search Symptoms"
        variant="outlined"
        onChange={getSymptoms}
      />
      <Result result={results} />
    </div>
  );
};

export default Home;
