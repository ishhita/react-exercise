import React from "react";

const Contact = ({ content, display }) => {
  return (
    <div style={{ display: display }}>
      <h1>{content}</h1>
    </div>
  );
};

export default Contact;
