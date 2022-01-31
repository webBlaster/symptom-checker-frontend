import React from "react";
import { useState, useRef } from "react";
import Result from "../components/result";
import Symptoms from "../components/symptoms";
import Diagnosis from "../components/diagnosis";
import { API_URL } from "../constants";

const Dashboard = () => {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [diagnoseLoading, setDiagnoseLoading] = useState(false);
  let [symptoms, setSymptoms] = useState([]);
  let [diagnosis, setDiagnosis] = useState([]);
  let inputRef = useRef();

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
    inputRef.current.value = "";
  };

  const isSymptomSelected = (symptom) => {
    return symptoms.includes(symptom);
  };

  const getDiagnosis = async () => {
    setDiagnoseLoading(true);
    const symptomIds = symptoms.map((symptom) => {
      return symptom.ID;
    });
    const request = await fetch(
      `${API_URL}/diagnose/${symptomIds}/${"male"}/${"1996"}/${"2"}`
    ).catch((error) => {
      console.log(error);
      setDiagnoseLoading(false);
    });
    const response = await request;
    if (response) {
      const result = await response.json();
      setSymptoms([]);
      setResult([]);
      setDiagnoseLoading(false);
      setDiagnosis(result);
    }
  };

  return (
    <>
      <div className="container">
        <h4>Search for your symptoms</h4>
        <br />
        <input
          placeholder="Search Symptoms(e.g headaches)"
          onChange={getSymptoms}
          ref={inputRef}
        />
        <Result result={results} addSymptom={addSymptom} />
        <span hidden={!loading}>
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        </span>

        <Symptoms symptoms={symptoms} />

        <button
          className="btn green"
          onClick={getDiagnosis}
          disabled={symptoms.length === 0}
        >
          {diagnoseLoading ? "Loading...." : "Diagnose"}
        </button>
        <Diagnosis result={diagnosis} />
      </div>
    </>
  );
};

export default Dashboard;
