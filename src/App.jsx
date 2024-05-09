import { useState } from "react";

import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import WorkInfo from "./Components/WorkInfo";
import Preview from "./Components/Preview";

// src/App.jsx

function App() {
  // **********Personal Info**************
  const [personalInfo, setPersonalInfo] = useState({
    name: "Ashutosh Agarwal",
    email: "ashutosh@gmail.com",
    number: "8197296808",
    location: "India,Bangalore",
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  // **********Education Info**************

  const [educationInfo, setEducationInfo] = useState({
    school: "RVCE",
    degree: "Information Science and Engineering",
    fromdate: "2018-08-01",
    todate: "2022-08-29",
    location: "India,Bangalore",
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;

    setEducationInfo({ ...educationInfo, [name]: value });
  };

  // **********Work Info**************

  const [workInfo, setWorkInfo] = useState({
    name: "EXL",
    position: "Data Scientist",
    fromdate: "2018-08-01",
    todate: "2018-08-01",
    location: "Remote",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis quae magnam obcaecati sunt, sed voluptates adipisci architecto officia sint? Necessitatibus tempore, officia ipsa aliquid odit porro voluptate quasi blanditiis.",
  });

  const handleWorkChange = (e) => {
    const { name, value } = e.target;

    setWorkInfo({ ...workInfo, [name]: value });
  };

  // **********End**************

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="main-container">
      <section className="left-container">
        <GeneralInfo
          onChange={handlePersonalChange}
          name={personalInfo.name}
          email={personalInfo.email}
          number={personalInfo.number}
          location={personalInfo.location}
          onSubmit={handleSubmit}
        />
        <EducationInfo
          onChange={handleEducationChange}
          schoolName={educationInfo.school}
          degree={educationInfo.degree}
          fromDate={educationInfo.fromdate}
          toDate={educationInfo.todate}
          schoolLocation={educationInfo.location}
          // onSubmit={handleSubmit}
        />
        <WorkInfo
          onChange={handleWorkChange}
          companyName={workInfo.name}
          position={workInfo.position}
          workFromDate={workInfo.fromdate}
          workToDate={workInfo.todate}
          workDescription={workInfo.description}
          workLocation={workInfo.location}
          // onSubmit={handleSubmit}
        />
      </section>
      <section className="right-container">
        <Preview
          name={personalInfo.name}
          email={personalInfo.email}
          number={personalInfo.number}
          location={personalInfo.location}
          schoolName={educationInfo.school}
          degree={educationInfo.degree}
          fromDate={educationInfo.fromdate}
          toDate={educationInfo.todate}
          schoolLocation={educationInfo.location}
          companyName={workInfo.name}
          position={workInfo.position}
          workFromDate={workInfo.fromdate}
          workToDate={workInfo.todate}
          workDescription={workInfo.location}
          workLocation={workInfo.description}
        />
      </section>
    </div>
  );
}

export default App;
