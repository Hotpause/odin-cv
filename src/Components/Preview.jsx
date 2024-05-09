// import { useState } from "react";

// src/Components/Preview.jsx

const Preview = ({
  name,
  email,
  number,
  location,
  schoolName,
  degree,
  fromDate,
  toDate,
  schoolLocation,
  companyName,
  position,
  workFromDate,
  workToDate,
  workDescription,
  workLocation,
}) => {
  return (
    <section className="preview-section">
      <div className="personal-preview">
        <h1>{name}</h1>
        <div className="under-name">
          <h3>{email}</h3>
          <h3>{number}</h3>
          <h3>{location}</h3>
        </div>
      </div>
      <div className="education-preview">
        <h1>Education</h1>
        <h3>
          {schoolName} {fromDate} --- {toDate}{" "}
        </h3>
        <h3>{degree}</h3>
        <h3>{schoolLocation}</h3>
      </div>
      <div className="experience-preview">
        <h1>Experience</h1>
        <h2>
          {position} @ {companyName}{" "}
        </h2>
        <h2>
          {workFromDate}--{workToDate}{" "}
        </h2>

        <p>{workLocation}</p>
        <h2>{workDescription}</h2>
      </div>
    </section>
  );
};

export default Preview;
