import React, { useState } from "react";
import Header from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import "./showpassword.css";
const Showpassword = () => {
  const [typeText, setTypeText] = useState({ type: "password", text: "Show" });
  const showHidePassword = () => {
    return typeText.text === "Show"
      ? setTypeText({ type: "text", text: "Hide" })
      : setTypeText({ type: "password", text: "Show" });
  };
  console.log(typeText.type, typeText.text);
  return (
    <div className="sp">
      <Header text="Show Password" />
      <InputBox type={typeText.type} />
      <Button text={typeText.text} func={showHidePassword} />
    </div>
  );
};

export default Showpassword;
