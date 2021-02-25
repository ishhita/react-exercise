import React, { useState } from "react";
import Header from "../Header/Header";
import Message from "../Message/Message";
import Button from "../Button/Button";
import "./toast.css";

// const style = {
//   width: "200px",
//   marginLeft: "35%",
//   padding: "2%",
//   textAlign: "center",
//   border: "2px solid grey",
// };
const Toast = () => {
  const [toggle, setToggle] = useState({ display: "Block", action: "Hide" });
  const clickHandler = () => {
    return toggle.action === "Hide"
      ? setToggle({
          ...toggle,
          action: (toggle.action = "Show"),
          display: (toggle.display = "none"),
        })
      : setToggle({
          ...toggle,
          action: (toggle.action = "Hide"),
          display: (toggle.display = "block"),
        });
  };
  console.log(toggle);
  return (
    <div className="toast">
      <Header text="Toast" />
      <Message msg="I am a Toast Message!" display={toggle.display} />
      <Button text={toggle.action} func={clickHandler} />
      <Message
        className="toastBox"
        msg="I am a Toast Error!"
        background="#ef5350"
      />
      <Message
        className="toastBox"
        msg="I am a Toast Success!"
        background="#4caf50 "
      />
      <Message
        className="toastBox"
        msg="I am a Toast Warning!"
        background="#ffee58 "
      />
    </div>
  );
};

export default Toast;
