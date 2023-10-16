import { useState } from "react";
import "../stylesheets/App.css";

let nextId = 0;

function ExperienceForm({ experienceData, setExperienceData }) {
  const [dropDown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropDown);
    const experienceForm = document.querySelector("#experience-form");
    const experienceChevron = document.querySelector("#experience-chevron");
    dropDown === false
      ? (experienceForm.style.display = "none")
      : (experienceForm.style.display = "flex");
    dropDown === false
      ? (experienceChevron.src = "../public/chevron-down.svg")
      : (experienceChevron.src = "../public/chevron-up.svg");
  }

  function handleSubmit() {
    const experienceTitle = document.querySelector(
      "#info-experience-title"
    ).value;
    const experienceCompany = document.querySelector(
      "#info-experience-company"
    ).value;
    const experienceLocation = document.querySelector(
      "#info-experience-location"
    ).value;
    const experienceDates = document.querySelector(
      "#info-experience-dates"
    ).value;
    const experienceDescription = document.querySelector(
      "#info-experience-description"
    ).value;
    setExperienceData([
      ...experienceData,
      {
        id: nextId++,
        title: experienceTitle,
        company: experienceCompany,
        location: experienceLocation,
        dates: experienceDates,
        description: experienceDescription,
      },
    ]);
  }

  return (
    <div className="form-section">
      <div onClick={toggleDropdown} className="form-header">
        <h2>Experience</h2>
        <img
          id="experience-chevron"
          className="chevron-img"
          src="../public/chevron-down.svg"
          alt=""
        />
      </div>
      <form id="experience-form" className="info-form" action="">
        <label htmlFor="info-experience-title">Title:</label>
        <input id="info-experience-title" type="text" placeholder="Title" />
        <label htmlFor="info-experience-company">Company:</label>
        <input id="info-experience-company" type="text" placeholder="Company" />
        <label htmlFor="info-experience-location">Location:</label>
        <input
          id="info-experience-location"
          type="text"
          placeholder="Location"
        />
        <label htmlFor="info-experience-dates">Dates:</label>
        <input id="info-experience-dates" type="text" placeholder="Dates" />
        <label htmlFor="info-experience-description">Description:</label>
        <textarea
          name=""
          id="info-experience-description"
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <button onClick={handleSubmit}>Add Info</button>
      {experienceData.map((experience) => (
        <>
          <div className="info-item-display" key={experience.id}>
            <p>{experience.title}</p>
            <button
              className="info-item-display-delete"
              onClick={() => {
                setExperienceData(
                  experienceData.filter((e) => e.id !== experience.id)
                );
              }}
            >
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default ExperienceForm;
