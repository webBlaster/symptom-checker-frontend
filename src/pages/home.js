import React from "react";
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
      <input
        style={{ width: "60%", padding: "2%" }}
        placeholder="Search Symptoms"
        onChange={getSymptoms}
      />
      <Result result={results} />
    </div>
  );
};

export default Home;
