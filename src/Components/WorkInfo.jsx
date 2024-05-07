import { useState } from "react";

const WorkInfo = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [fromdate, setFromDate] = useState("");
  const [todate, setToDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
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
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <section className="informationSection">
      <h1>Experience</h1>
      <div className="input-container">
        <label>Company Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className="input-container">
        <label>Postion: </label>
        <input type="text" value={position} onChange={handlePositionChange} />
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
      <div className="input-container">
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
    </section>
  );
};

export default WorkInfo;
