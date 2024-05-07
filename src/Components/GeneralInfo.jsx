import { useState } from "react";

const GeneralInfo = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "test",
    email: "test",
    number: "test",
    location: "test",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <section className="information-section">
      <h1>Personal Information</h1>
      <div className="input-container">
        <label>Full Name: </label>
        <input
          type="text"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label>Phone Number:</label>{" "}
        <input
          type="tel"
          name="number"
          value={personalInfo.number}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label>Location: </label>
        <input
          type="text"
          name="location"
          value={personalInfo.location}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default GeneralInfo;
