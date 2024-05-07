// import { useState } from "react";

import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import WorkInfo from "./Components/WorkInfo";
import Preview from "./Components/Preview";

function App() {
  return (
    <div className="main-container">
      <section className="left-container">
        <GeneralInfo />
        <EducationInfo />
        <WorkInfo />
      </section>
      <section className="right-container">
        <Preview />
      </section>
    </div>
  );
}

export default App;
