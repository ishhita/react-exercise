import React, { Fragment } from "react";
import "./link.css";

const Link = ({ link, text }) => {
  return (
    <Fragment>
      <a className="a-link" href={link}>
        {text}
      </a>
    </Fragment>
  );
};

export default Link;
