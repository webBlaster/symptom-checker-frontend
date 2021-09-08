import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import { API_URL } from "../constants";

const History = () => {
  const [previous, setPrevious] = useState([]);
  let profile = useSelector((state) => state.auth);
  const getHistory = async () => {
    const request = await fetch(`${API_URL}/history/${profile._id}`).catch(
      (error) => console.log(error)
    );

    const response = await request;
    if (response) {
      const result = await response.json();
      const historyArray = [JSON.parse(result[0].diagnosis_array)];
      console.log(historyArray);
      let newArray = [...previous, ...historyArray];
      setPrevious(newArray);
    }
  };
  useEffect(
    () => {
      getHistory();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Header />
      <ul className="history">
        {previous?.length > 0 ? (
          previous?.map((item) => {
            return <li>{item[0].Issue.Name}</li>;
          })
        ) : (
          <h2>No History Available</h2>
        )}
      </ul>
    </>
  );
};

export default History;
