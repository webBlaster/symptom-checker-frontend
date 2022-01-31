import React from "react";

const Result = ({ result, addSymptom }) => {
  let response =
    result.length > 0 ? (
      result.map((res) => {
        return (
          <li key={Math.random() * 100}>
            {res._source.Name} <br />
            <span>
              {" "}
              <button
                onClick={() => {
                  addSymptom(res._source);
                }}
                class="btn-floating btn-small waves-effect waves-light green"
              >
                <i class="material-icons">add</i>
              </button>
            </span>
          </li>
        );
      })
    ) : (
      <p>No symptoms added</p>
    );
  return <ul className="symptoms-container">{response}</ul>;
};

export default Result;
