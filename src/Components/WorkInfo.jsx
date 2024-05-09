import { useState } from "react";

// src/Components/WorkInfo.jsx

const WorkInfo = ({
  onChange,
  companyName,
  position,
  workFromDate,
  workToDate,
  workDescription,
  workLocation,
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
      <h1>Experience</h1>
      {isEditing ? (
        <>
          <div className="input-container">
            <label>Company Name: </label>
            <input
              type="text"
              name="name"
              value={companyName}
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>Postion: </label>
            <input
              type="text"
              name="position"
              value={position}
              onChange={onChange}
            />
          </div>
          <div className="date-container">
            <div className="input-container">
              <label>From Date:</label>{" "}
              <input
                type="date"
                name="fromdate"
                value={workFromDate}
                onChange={onChange}
              />
            </div>
            <div className="input-container">
              <label>To Date:</label>{" "}
              <input
                type="date"
                name="todate"
                value={workToDate}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-container">
            <label>Location: </label>
            <input
              type="text"
              name="location"
              value={workLocation}
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>Description: </label>
            <input
              type="text"
              name="description"
              value={workDescription}
              onChange={onChange}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <div className="static-info">
            <p>
              <strong>Company Name:</strong> {companyName}
            </p>
            <p>
              <strong>Position:</strong> {position}
            </p>
            <p>
              <strong>Date:</strong> {workFromDate} - {workToDate}
            </p>
            <p>
              <strong>Location:</strong> {workLocation}
            </p>
            <p>
              <strong>Description:</strong> {workDescription}
            </p>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </section>
  );
};

export default WorkInfo;
