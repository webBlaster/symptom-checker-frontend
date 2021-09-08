import React from "react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Result from "../components/result";
import Symptoms from "../components/symptoms";
import Diagnosis from "../components/diagnosis";
import Header from "../components/header";
import { API_URL } from "../constants";

const Dashboard = () => {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [diagnoseLoading, setDiagnoseLoading] = useState(false);
  let [symptoms, setSymptoms] = useState([]);
  let [diagnosis, setDiagnosis] = useState([]);
  let profile = useSelector((state) => state.auth);
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
      `${API_URL}/diagnose/${symptomIds}/${profile.gender}/${profile.year_of_birth}/${profile._id}`
    ).catch((error) => {
      console.log(error);
      setDiagnoseLoading(false);
    });
    const response = await request;
    if (response) {
      const result = await response.json();
      setSymptoms([]);
      setDiagnoseLoading(false);
      setDiagnosis(result);
    }
    console.log(profile);
  };

  return (
    <>
      <Header />

      <input
        style={{ width: "40%", padding: "1%", fontSize: "20px" }}
        placeholder="Search Symptoms"
        onChange={getSymptoms}
        ref={inputRef}
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
        {diagnoseLoading ? "Loading...." : "Diagnose"}
      </button>
      <Diagnosis result={diagnosis} />
    </>
  );
};

export default Dashboard;
