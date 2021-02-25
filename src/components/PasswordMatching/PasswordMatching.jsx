import React, { useState } from "react";
import Header from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./passwordmatching.css";
const PasswordMatching = () => {
  const [pass, setPassword] = useState({
    password: "",
    confirm_password: "",
    error: "",
  });

  const clickHandler = () => {
    return pass.password === pass.confirm_password
      ? setPassword({
          ...pass,
          error: (pass.error = "Password and Confirm Password Matched"),
        })
      : setPassword({
          ...pass,
          error: (pass.error = "Password and Confirm Password Not Matched"),
        });
  };
  return (
    <div className="pm">
      <Header text="Password Matching" />
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
      <Button text="Submit" func={clickHandler} />
      <Message msg={pass.error} />
    </div>
  );
};

export default PasswordMatching;
