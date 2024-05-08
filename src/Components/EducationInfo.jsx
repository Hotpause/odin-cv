// import { useState } from "react";

// src/Components/EducationInfo.jsx

const EducationInfo = ({
  onChange,
  schoolName,
  degree,
  fromDate,
  toDate,
  schoolLocation,
}) => {
  //   const [educationInfo, setEducationInfo] = useState({
  //     school: "test",
  //     degree: "Test",
  //     fromdate: "Test",
  //     todate: "Test",
  //     location: "Test",
  //   });
  //   const [school, setSchool] = useState("test");
  //   const [degree, setDegree] = useState("test");
  //   const [fromdate, setFromDate] = useState("test");
  //   const [todate, setToDate] = useState("test");
  //   const [location, setLocation] = useState("test");

  //   const handleEducationChange = (e) => {
  //     const { name, value } = e.target;

  //     setEducationInfo({ ...educationInfo, [name]: value });
  //   };

  //   const handleSchoolChange = (e) => {
  //     setSchool(e.target.value);
  //   };
  //   const handleDegreeChange = (e) => {
  //     setDegree(e.target.value);
  //   };
  //   const handleFromDateChange = (e) => {
  //     setFromDate(e.target.value);
  //   };
  //   const handleToDateChange = (e) => {
  //     setToDate(e.target.value);
  //   };
  //   const handleLocationChange = (e) => {
  //     setLocation(e.target.value);
  //   };

  return (
    <section className="information-section">
      <h1>Education</h1>
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
        <input type="text" name="degree" value={degree} onChange={onChange} />
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
          <input type="date" name="todate" value={toDate} onChange={onChange} />
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
    </section>
  );
};

export default EducationInfo;
