import React, { useState } from "react";
import Header from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./age.css";
const Age = () => {
  // const [age, setAge] = useState();
  const [msg, setMsg] = useState();
  // let msg = "";
  const inputHandler = (e) => {
    return e.target.value >= 18 ? setMsg("Valid") : setMsg("Not Valid");
  };
  // msg = age >= 18 ? "Valid" : "Not Valid";
  return (
    <div className="age">
      <Header text="Age Validation" />
      <InputBox
        type="number"
        // value={age}
        // func={(e) => {
        //   setAge(e.target.value);
        // }}
        func={inputHandler}
      />
      <Message msg={msg} />
    </div>
  );
};

export default Age;
