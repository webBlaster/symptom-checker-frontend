import React from "react";

const Diagnosis = ({ result }) => {
  let response =
    result.length > 0 ? (
      result.map((res) => {
        return (
          <li key={Math.random() * 100}>
            {res.Issue.Name}
            <br />
            {res.Issue.Accuracy} Accuracy
          </li>
        );
      })
    ) : (
      <p></p>
    );
  return <ul>{response}</ul>;
};

export default Diagnosis;
