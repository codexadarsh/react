import React from "react";

const Weather = () => {
  let temp = 7;

  if (temp < 15) {
    return <h1>it's cold out side</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>it's nice outiside</h1>;
  } else if (temp > 25) {
    return <h1>it's hot outside</h1>;
  }
};

export default Weather;
