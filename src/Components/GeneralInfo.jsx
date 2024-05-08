import { useState } from "react";

// src/Components/GeneralInfo.jsx

const GeneralInfo = ({ onChange, name, email, number, location, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSubmit = () => {
    setIsEditing(false);
    onSubmit;
  };

  return (
    <section className="information-section">
      <h1>Personal Information</h1>
      {isEditing ? (
        <>
          <div className="input-container">
            <label>Full Name: </label>
            <input type="text" name="name" value={name} onChange={onChange} />
          </div>
          <div className="input-container">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>Phone Number:</label>{" "}
            <input
              type="tel"
              name="number"
              value={number}
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>Location: </label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={onChange}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <div className="static-info">
            <p>
              <strong>Full Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone Number:</strong> {number}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </section>
  );
};

export default GeneralInfo;
