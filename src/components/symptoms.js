import React from "react";

const Symptoms = ({ symptoms }) => {
  let response =
    symptoms.length > 0 ? (
      symptoms.map((item) => {
        return (
          <li key={Math.random() * 100}>
            {item.Name} <span> </span>
          </li>
        );
      })
    ) : (
      <p></p>
    );
  return <ul>{response}</ul>;
};

export default Symptoms;
