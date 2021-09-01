import React from "react";
import { useState } from "react";
import Result from "../components/result";
import Symptoms from "../components/symptoms";
import Diagnosis from "../components/diagnosis";
import { API_URL } from "../constants";

const Home = () => {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  let [symptoms, setSymptoms] = useState([]);
  let [diagnosis, setDiagnosis] = useState([]);

  const getSymptoms = async (event) => {
    if (!event.target.value) return;
    setLoading(true);
    setResult([]);
    let value = event.target.value;
    let response = await fetch(`${API_URL}/symptom/${value}`);
    let result = await response.json();
    if (result) {
      setLoading(false);
      setResult(result);
    }
  };

  const addSymptom = (item) => {
    if (isSymptomSelected(item)) return;
    let newSymptomArray = [...symptoms, ...[item]];
    setSymptoms(newSymptomArray);
  };

  const isSymptomSelected = (symptom) => {
    return symptoms.includes(symptom);
  };

  const getDiagnosis = async () => {
    const symptomIds = symptoms.map((symptom) => {
      return symptom.ID;
    });
    const request = await fetch(
      `${API_URL}/diagnose/${symptomIds}/male/2000`
    ).catch((error) => console.log(error));
    const response = await request;
    if (response) {
      const result = await response.json();
      console.log(result);
      setDiagnosis(result);
    }
  };

  return (
    <div>
      <input
        style={{ width: "40%", padding: "1%", fontSize: "20px" }}
        placeholder="Search Symptoms"
        onChange={getSymptoms}
      />
      <Result result={results} addSymptom={addSymptom} />
      <span hidden={!loading}>Loading....</span>
      <hr />
      <Symptoms symptoms={symptoms} />
      <hr />
      <button
        className="btn"
        style={{ width: "40%", padding: "1%", fontSize: "20px" }}
        onClick={getDiagnosis}
        disabled={symptoms.length === 0}
      >
        Diagnose
      </button>
      <Diagnosis result={diagnosis} />
    </div>
  );
};

export default Home;
