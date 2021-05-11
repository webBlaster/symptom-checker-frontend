import React from "react";

const Result = ({ result }) => {
  let response =
    result.length > 0 ? (
      result.map((res) => {
        return (
          <li key={Math.random() * 100}>
            {res._source.Name}{" "}
            <span>
              {" "}
              <button>Add</button>
            </span>
          </li>
        );
      })
    ) : (
      <p>no search results found</p>
    );
  return <ul>{response}</ul>;
};

export default Result;
