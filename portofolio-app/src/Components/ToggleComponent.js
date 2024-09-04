import React, { useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Cover from "./Cover.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";

const ToggleComponents = () => {
  const components = [<Cover />, <About />, <Skills />, <Contact />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevComponent = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextComponent, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="about"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "20px",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <ArrowBackIos
        onClick={prevComponent}
        style={{
          cursor: "pointer",
          marginRight: "10px",
          color: "white",
          fontSize: "24px",
        }}
      />

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        {components[currentIndex]}
      </div>

      <ArrowForwardIos
        onClick={nextComponent}
        style={{
          cursor: "pointer",
          marginLeft: "10px",
          color: "white",
          fontSize: "24px",
        }}
      />
    </div>
  );
};

export default ToggleComponents;
