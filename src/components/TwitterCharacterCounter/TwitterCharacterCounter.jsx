import React, { useState } from "react";
import Header from "../Header/Header";
import "./twitterCharactercounter.css";
const Twittercharactercounter = () => {
  let limit = 280;
  let errorColor = "";
  let extraChar = 0;
  const [inputLength, setInputLength] = useState({
    tweetLength: 0,
    extraChar: 0,
  });

  const [threadCount, setThreadCount] = useState(0);

  const charCounter = (e) => {
    return e.target.value.length <= limit
      ? setInputLength({
          ...inputLength,
          tweetLength: (inputLength.tweetLength = e.target.value.length),
        })
      : setInputLength({
          ...inputLength,
          extraChar: (inputLength.extraChar = e.target.value.length % limit),
        }) > limit
      ? setThreadCount((threadCount) => threadCount + 1)
      : "";
  };
  errorColor = inputLength.tweetLength + 1 > limit ? "red" : "";

  return (
    <div className="tcc">
      <Header text="Twitter Character Counter" />
      <textarea cols="40" rows="7" onChange={charCounter}></textarea>
      <p>
        <span style={{ color: errorColor }}>{inputLength.tweetLength}/</span>
        <span>{limit}</span>
        {/* &nbsp;&nbsp;<span>{inputLength.extraChar}</span>
        &nbsp;&nbsp;<span>Thread Count :&nbsp;{threadCount}</span> */}
      </p>
    </div>
  );
};

export default Twittercharactercounter;
