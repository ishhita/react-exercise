import React, { Fragment } from "react";

const Link = ({ link, text }) => {
  return (
    <Fragment>
      <a href={link}>{text}</a>
    </Fragment>
  );
};

export default Link;
