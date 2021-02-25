import React, { Fragment } from "react";

const Message = ({ msg, display, className, background }) => {
  return (
    <Fragment>
      <p
        className={className}
        style={{
          display: display,

          background: background,
        }}
      >
        {msg}
      </p>
    </Fragment>
  );
};

export default Message;
