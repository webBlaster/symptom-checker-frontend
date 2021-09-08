import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/header";

const History = () => {
  return (
    <>
      <Header />
      <div className="history">
        <h2>No History Available</h2>
      </div>
    </>
  );
};

export default History;
