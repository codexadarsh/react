import React from "react";

const name = "adarsh";

const Greeting = () => {
  return (
    <div>
      <h1>Greeting {name}</h1>
      <p>{new Date().getDate()}</p>
    </div>
  );
};

export default Greeting;
