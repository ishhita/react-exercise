import React, { useState } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";

import "./darkmode.css";

const Darkmode = () => {
  const [modeName, setModeName] = useState("Dark Mode");
  const [mode, setMode] = useState("");
  const switchMode = () => {
    if (modeName === "Dark Mode") {
      return (
        setModeName((modeName) => (modeName = "Light Mode")),
        setMode((mode) => (mode = "#192734"))
      );
    }
    return (
      setModeName((modeName) => (modeName = "Dark Mode")),
      setMode((mode) => (mode = ""))
    );
  };

  return (
    <div className="dark-mode" style={{ backgroundColor: mode }}>
      <Header text="Dark Mode" />
      <Button text={modeName} func={switchMode} />
    </div>
  );
};

export default Darkmode;
