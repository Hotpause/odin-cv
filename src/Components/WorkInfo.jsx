// import { useState } from "react";

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
  //   const [workInfo, setWorkInfo] = useState({
  //     name: "test",
  //     position: "test",
  //     fromdate: "test",
  //     todate: "test",
  //     location: "test",
  //     description: "test",
  //   });
  //   const [name, setName] = useState("");
  //   const [position, setPosition] = useState("");
  //   const [fromdate, setFromDate] = useState("");
  //   const [todate, setToDate] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [description, setDescription] = useState("");

  //   const handleWorkChange = (e) => {
  //     const { name, value } = e.target;

  //     setWorkInfo({ ...workInfo, [name]: value });
  //   };

  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };
  //   const handlePositionChange = (e) => {
  //     setPosition(e.target.value);
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
  //   const handleDescriptionChange = (e) => {
  //     setDescription(e.target.value);
  //   };

  return (
    <section className="information-section">
      <h1>Experience</h1>
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
    </section>
  );
};

export default WorkInfo;
