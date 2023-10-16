import React from "react";
import { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import ContactForm from "./components/ContactForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import DesignForm from "./components/DesignForm.jsx";
import Resume from "./components/Resume.jsx";

function App() {
  const [contactData, setContactData] = useState({
    imgSrc: "",
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  const [designData, setDesignData] = useState({
    headerBg: "",
    headerFont: "",
    mainBg: "",
    mainFont: "",
    resumeFontFamily: "Helvetica",
  });

  return (
    <>
      <div id="main-container">
        <div id="info-container">
          <ContactForm
            contactData={contactData}
            setContactData={setContactData}
          />
          <ExperienceForm
            experienceData={experienceData}
            setExperienceData={setExperienceData}
          />
          <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
          />
          <DesignForm designData={designData} setDesignData={setDesignData} />
        </div>
        <Resume
          contactData={contactData}
          experienceData={experienceData}
          educationData={educationData}
          designData={designData}
        ></Resume>
      </div>
    </>
  );
}

export default App;
