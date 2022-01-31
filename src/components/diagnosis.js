import React from "react";

const Diagnosis = ({ result }) => {
  let response =
    result.length > 0 ? (
      result.map((res) => {
        return (
          <li key={Math.random() * 100}>
            {res.Issue.Name} {"("}
            {res.Issue.Accuracy} Accuracy{")"}
            <div class="progress">
              <div
                class="determinate green"
                style={{ width: `${res.Issue.Accuracy}%` }}
              ></div>
            </div>
          </li>
        );
      })
    ) : (
      <p></p>
    );
  return <ul className="diagnosis-container">{response}</ul>;
};

export default Diagnosis;
