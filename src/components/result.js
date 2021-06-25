import React from "react";

const Result = ({ result, addSymptom }) => {
  let response =
    result.length > 0 ? (
      result.map((res) => {
        return (
          <li key={Math.random() * 100}>
            {res._source.Name}{" "}
            <span>
              {" "}
              <button
                onClick={() => {
                  addSymptom(res._source);
                }}
              >
                Add
              </button>
            </span>
          </li>
        );
      })
    ) : (
      <p></p>
    );
  return <ul>{response}</ul>;
};

export default Result;
