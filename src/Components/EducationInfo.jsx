import { useState } from "react";

const EducationInfo = () => {
  const [school, setSchool] = useState("test");
  const [degree, setDegree] = useState("test");
  const [fromdate, setFromDate] = useState("test");
  const [todate, setToDate] = useState("test");
  const [location, setLocation] = useState("test");

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };
  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };
  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };
  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <section className="information-section">
      <h1>Education</h1>
      <div className="input-container">
        <label>School Name: </label>
        <input
          type="text"
          value={school}
          placeholder="test"
          onChange={handleSchoolChange}
        />
      </div>
      <div className="input-container">
        <label>Degree: </label>
        <input type="text" value={degree} onChange={handleDegreeChange} />
      </div>
      <div className="date-container">
        <div className="input-container">
          <label>From Date:</label>{" "}
          <input type="date" value={fromdate} onChange={handleFromDateChange} />
        </div>
        <div className="input-container">
          <label>To Date:</label>{" "}
          <input type="date" value={todate} onChange={handleToDateChange} />
        </div>
      </div>
      <div className="input-container">
        <label>Location: </label>
        <input type="text" value={location} onChange={handleLocationChange} />
      </div>
    </section>
  );
};

export default EducationInfo;
