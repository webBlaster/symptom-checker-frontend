import React from "react";
import "../App.css";

const Symptoms = ({ symptoms }) => {
  let response =
    symptoms.length > 0 ? (
      symptoms.map((item) => {
        return (
          <li key={Math.random() * 100}>
            {item.Name}
            <p className="cancel">x</p>
          </li>
        );
      })
    ) : (
      <p>No symptoms selected</p>
    );
  return <ul className="added-symptoms">{response}</ul>;
};

export default Symptoms;
