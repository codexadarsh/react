import React from "react";

const Card = ({
  name = "adarsh",
  age = 19,
  city = "mumbai",
  standard = "sycs",
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{city}</h1>
      <h1>{standard}</h1>
    </div>
  );
};

export default Card;
