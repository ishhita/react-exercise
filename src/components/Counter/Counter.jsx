import React, { useState } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Message from "../Message/Message";
import "./counter.css";

const Counter = ({ display, hideHeading, hideMsg, id }) => {
  const [count, setCount] = useState(0);
  let msg = "";
  const incrementOrDecrement = (operation) => {
    return operation === "+"
      ? setCount((count) => count + 1)
      : count > 0
      ? setCount((count) => count - 1)
      : "";
  };
  msg = count === 0 ? "Be +Ve" : "";
  console.log(display);
  return (
    <div className="counter" style={{ display: display }} id={id}>
      <Header text="Counter" display={hideHeading} />
      <Button text="-" func={incrementOrDecrement} param1="-" />
      &nbsp;&nbsp;<span>{count}</span>&nbsp;&nbsp;
      <Button text="+" func={incrementOrDecrement} param1="+" />
      <Message msg={msg} display={hideMsg} />
    </div>
  );
};

export default Counter;
