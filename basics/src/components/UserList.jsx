import React from "react";

const users = [
  { id: 1, name: "Adarsh", price: 19 },
  { id: 2, name: "Jitesh", price: 29 },
  { id: 3, name: "Shivam", price: 69 },
];
const UserList = () => {
  return (
    <div>
      {users.map(({ id, name, price }) => (
        <ul key={id}>
          <li>{name}</li>
          <li>${price}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
