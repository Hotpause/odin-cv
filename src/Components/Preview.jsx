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
        <h2>Full name: {name}</h2>
        <h2>email: {email}</h2>
        <h2>number: {number}</h2>
        <h2>location: {location}</h2>
      </div>
      <div className="education-preview">
        <h2>School Name:{schoolName} </h2>
        <h2>Degree:{degree} </h2>
        <h2>From Date:{fromDate} </h2>
        <h2>To Date:{toDate} </h2>
        <h2>Location:{schoolLocation}</h2>
      </div>
      <div className="experience-preview">
        <h2>Company Name:{companyName} </h2>
        <h2>position:{position} </h2>
        <h2>From Date:{workFromDate} </h2>
        <h2>To Date:{workToDate} </h2>
        <h2>Description:{workDescription}</h2>
        <h2>Location:{workLocation}</h2>
      </div>
    </section>
  );
};

export default Preview;
