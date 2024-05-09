import { useState } from "react";

// src/Components/EducationInfo.jsx

const EducationInfo = ({
  onChange,
  schoolName,
  degree,
  fromDate,
  toDate,
  schoolLocation,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSubmit = () => {
    setIsEditing(false);
    // onSubmit;
  };

  return (
    <section className="information-section">
      <h1>Education</h1>
      {isEditing ? (
        <>
          <div className="input-container">
            <label>School Name: </label>
            <input
              type="text"
              name="school"
              value={schoolName}
              placeholder="test"
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>Degree: </label>
            <input
              type="text"
              name="degree"
              value={degree}
              onChange={onChange}
            />
          </div>
          <div className="date-container">
            <div className="input-container">
              <label>From Date:</label>{" "}
              <input
                type="date"
                name="fromdate"
                value={fromDate}
                onChange={onChange}
              />
            </div>
            <div className="input-container">
              <label>To Date:</label>{" "}
              <input
                type="date"
                name="todate"
                value={toDate}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-container">
            <label>Location: </label>
            <input
              type="text"
              name="location"
              value={schoolLocation}
              onChange={onChange}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <div className="static-info">
            <p>
              <strong>School Name:</strong> {schoolName}
            </p>
            <p>
              <strong>Degree:</strong> {degree}
            </p>
            <p>
              <strong>date:</strong> {fromDate} - {toDate}
            </p>
            <p>
              <strong>Location:</strong> {schoolLocation}
            </p>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </section>
  );
};

export default EducationInfo;
