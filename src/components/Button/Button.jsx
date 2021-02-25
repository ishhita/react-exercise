import React, { Fragment } from "react";

const Button = ({
  text,
  func,
  param1,
  param2,
  disabled,
  className,
  display,
  id,
}) => {
  return (
    <Fragment>
      <button
        id={id}
        className={className}
        onClick={() => {
          func(param1, param2);
        }}
        disabled={disabled}
        style={{ display: display }}
      >
        {text}
      </button>
    </Fragment>
  );
};

export default Button;
