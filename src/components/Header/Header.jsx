import React, { Fragment } from "react";
import "./header.css";

const Header = ({ text, display }) => {
  return (
    <Fragment>
      <h1 className="header" style={{ display: display }}>
        {text}
      </h1>
    </Fragment>
  );
};

export default Header;
