import React from "react";
import loader from "../../loader.gif";

const Loader = () => {
  return (
    <>
      <img
        src={`${loader}`}
        alt=""
        style={{ width: "200px", display: "block", margin: "auto" }}
      />
    </>
  );
};

export default Loader;
