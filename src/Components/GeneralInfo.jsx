import { useState } from "react";

const GeneralInfo = () => {
  const [name, setName] = useState("test");
  const [email, setEmail] = useState("test");
  const [number, setNumber] = useState("test");
  const [location, setLocation] = useState("test");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <section className="informationSection">
      <h1>Personal Information</h1>
      <div className="input-container">
        <label>Full Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className="input-container">
        <label>Email: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="input-container">
        <label>Phone Number:</label>{" "}
        <input type="tel" value={number} onChange={handleNumberChange} />
      </div>
      <div className="input-container">
        <label>Location: </label>
        <input type="text" value={location} onChange={handleLocationChange} />
      </div>
    </section>
  );
};

export default GeneralInfo;
