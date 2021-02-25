import React from "react";

const Home = ({ content, display }) => {
  return (
    <div style={{ display: display }}>
      <h1>{content}</h1>
    </div>
  );
};

export default Home;
