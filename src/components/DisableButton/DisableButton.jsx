import React, { useState } from "react";
import Header from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import "./disablebutton.css";
const DisableButton = () => {
  const [pass, setPassword] = useState({ password: "", confirm_password: "" });
  let isDisable = "";

  isDisable = pass.password === pass.confirm_password ? "" : " ";

  return (
    <div className="db">
      <Header text="Disable Button" />
      <p>
        Password
        <InputBox
          type="password"
          value={pass.password}
          func={(e) => {
            setPassword({ ...pass, password: e.target.value });
          }}
        />
      </p>
      <p>
        Confirm Password
        <InputBox
          type="password"
          value={pass.confirm_password}
          func={(e) => {
            setPassword({ ...pass, confirm_password: e.target.value });
          }}
        />
      </p>
      <Button text="Submit" disabled={isDisable} />
    </div>
  );
};

export default DisableButton;
