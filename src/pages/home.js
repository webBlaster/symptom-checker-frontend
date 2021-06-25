import React from "react";
import { useState } from "react";
import Result from "../components/result";
import Symptoms from "../components/symptoms";
import { API_URL } from "../constants";

const Home = () => {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  let [symptoms, setSymptoms] = useState([]);

  const getSymptoms = async (event) => {
    if (!event.target.value) return;
    setLoading(true);
    setResult([]);
    let value = event.target.value;
    let response = await fetch(`${API_URL}/getSymptoms/${value}`);
    let result = await response.json();
    if (result) {
      setLoading(false);
      setResult(result);
    }
  };

  const addSymptom = (item) => {
    let newSymptomArray = [...symptoms, ...[item]];
    setSymptoms(newSymptomArray);
    setTimeout(() => console.log(symptoms), 5000);
  };

  return (
    <div>
      <input
        style={{ width: "60%", padding: "2%" }}
        placeholder="Search Symptoms"
        onChange={getSymptoms}
      />
      <Result result={results} addSymptom={addSymptom} />
      <span hidden={!loading}>Loading....</span>
      <Symptoms symptoms={symptoms} />
    </div>
  );
};

export default Home;
