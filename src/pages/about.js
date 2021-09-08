import React from "react";
import Header from "../components/header";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <p>
          This tool does not provide medical advice.This tool is not intended to
          be a substitute for professional medical advice, diagnosis, or
          treatment. Always seek the advice of your physician or other qualified
          health provider with any questions you may have regarding a medical
          condition. Never disregard professional medical advice or delay in
          seeking it because of something you have read on here! If you think
          you may have a medical emergency, call your doctor or pray
          immediately.{" "}
        </p>
      </div>
    </>
  );
};

export default About;
