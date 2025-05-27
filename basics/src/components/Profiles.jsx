import React, { useState } from "react";

const Profiles = () => {
  const [profile, setprofile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setprofile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3>Info</h3>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
    </div>
  );
};

export default Profiles;
