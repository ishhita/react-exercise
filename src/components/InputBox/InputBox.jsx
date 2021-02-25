import React, { Fragment } from "react";

const InputBox = ({ type, func, value }) => {
  return (
    <Fragment>
      <input type={type} value={value} onChange={func} />
    </Fragment>
  );
};

export default InputBox;
