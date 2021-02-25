import React, { useState } from "react";
import Header from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import Message from "../Message/Message";
import "./alphanumeric.css";
const Alphanumeric = () => {
  const [msg, setMsg] = useState("");

  let isChar = false;
  let isNumber = false;

  const inputHandler = (event) => {
    //Input value
    let input = event.target.value;

    for (let i = 0; i < input.length; i++) {
      //isChar?

      if (!isChar) {
        isChar =
          (input[i] >= "A" && input[i] <= "Z") ||
          (input[i] >= "a" && input[i] <= "z")
            ? true
            : false;
      }

      //isNumber?
      if (!isNumber) {
        isNumber = input[i] >= "0" && input[i] <= "9" ? true : false;
      }

      //Update the Message
      if (isChar && isNumber) {
        setMsg((msg) => (msg = "All Good"));
        isChar = false;
        isNumber = false;
        break;
      } else {
        setMsg(
          (msg) =>
            (msg = "Password Should Contain atleast one numeric or string")
        );
      }
    }
  };
  return (
    <div className="alpha">
      <Header text="Alphanumeric Password Checking" />
      <p>
        Enter Password
        <InputBox type="password" func={inputHandler} />
      </p>
      <Message msg={msg} />
    </div>
  );
};

export default Alphanumeric;
