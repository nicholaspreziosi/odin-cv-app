import { useState } from "react";
import "../stylesheets/App.css";

function EducationForm({ educationData, setEducationData }) {
  const [dropDown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropDown);
    const educationForm = document.querySelector("#education-form");
    const educationChevron = document.querySelector("#education-chevron");
    dropDown === false
      ? (educationForm.style.display = "none")
      : (educationForm.style.display = "flex");
    dropDown === false
      ? (educationChevron.src = "../public/chevron-down.svg")
      : (educationChevron.src = "../public/chevron-up.svg");
  }

  function handleSubmit() {
    const educationSchool = document.querySelector(
      "#info-education-school"
    ).value;
    const educationLocation = document.querySelector(
      "#info-education-location"
    ).value;
    const educationDates = document.querySelector(
      "#info-education-dates"
    ).value;
    const educationMajor = document.querySelector(
      "#info-education-major"
    ).value;
    setEducationData({
      school: educationSchool,
      location: educationLocation,
      dates: educationDates,
      major: educationMajor,
    });
  }

  return (
    <div className="form-section">
      <div>
        <div onClick={toggleDropdown} className="form-header">
          <h2>Education</h2>
          <img
            id="education-chevron"
            className="chevron-img"
            src="../public/chevron-down.svg"
            alt=""
          />
        </div>
      </div>
      <form id="education-form" className="info-form" action="">
        <label htmlFor="info-education-school">School:</label>
        <input id="info-education-school" type="text" placeholder="School" />
        <label htmlFor="info-education-location">Location:</label>
        <input
          id="info-education-location"
          type="text"
          placeholder="Location"
        />
        <label htmlFor="info-education-dates">Dates:</label>
        <input id="info-education-dates" type="text" placeholder="Dates" />
        <label htmlFor="info-education-major">Major:</label>
        <input id="info-education-major" type="text" placeholder="Major" />
      </form>
      <button onClick={handleSubmit}>Add Info</button>
    </div>
  );
}

export default EducationForm;
