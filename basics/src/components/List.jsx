import React from "react";

const list = [1, 2, 3, 4, 5];

const List = () => {
  return (
    <div>
      {list.map((number) => (
        <ul key={Math.random}>
          <li>{number}</li>
        </ul>
      ))}
    </div>
  );
};

export default List;
