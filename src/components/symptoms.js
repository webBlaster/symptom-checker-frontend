import React from "react";
import "../App.css";

const Symptoms = ({ symptoms }) => {
  let response =
    symptoms.length > 0 ? (
      symptoms.map((item) => {
        return (
          <li key={Math.random() * 100}>
            {item.Name}
            <br />
            <span>
              <button className="btn-floating btn-small waves-effect waves-light red">
                <i class="material-icons">remove</i>
              </button>
            </span>
          </li>
        );
      })
    ) : (
      <p>No symptoms selected</p>
    );
  return <ul className="added-symptoms">{response}</ul>;
};

export default Symptoms;
