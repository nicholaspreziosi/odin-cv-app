import { useState } from "react";
import "../stylesheets/App.css";

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
        <label htmlFor="">Title:</label>
        <input
          onChange={(e) =>
            setExperienceData({
              ...experienceData,
              title: e.target.value,
            })
          }
          type="text"
          placeholder="Title"
        />
        <label htmlFor="">Company:</label>
        <input
          onChange={(e) =>
            setExperienceData({
              ...experienceData,
              company: e.target.value,
            })
          }
          type="text"
          placeholder="Company"
        />
        <label htmlFor="">Location:</label>
        <input
          onChange={(e) =>
            setExperienceData({
              ...experienceData,
              location: e.target.value,
            })
          }
          type="text"
          placeholder="Location"
        />
        <label htmlFor="">Dates:</label>
        <input
          onChange={(e) =>
            setExperienceData({
              ...experienceData,
              dates: e.target.value,
            })
          }
          type="text"
          placeholder="Dates"
        />
        <label htmlFor="">Description:</label>
        <textarea
          onChange={(e) =>
            setExperienceData({
              ...experienceData,
              description: e.target.value,
            })
          }
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Add Info</button>
      </form>
    </div>
  );
}

export default ExperienceForm;
