import React from "react";

const Person = ({ name = "adarsh", age = 19 }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};

export default Person;
