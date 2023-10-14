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
        <label htmlFor="">School:</label>
        <input
          onChange={(e) =>
            setEducationData({
              ...educationData,
              school: e.target.value,
            })
          }
          type="text"
          placeholder="School"
        />
        <label htmlFor="">Location:</label>
        <input
          onChange={(e) =>
            setEducationData({
              ...educationData,
              location: e.target.value,
            })
          }
          type="text"
          placeholder="Location"
        />
        <label htmlFor="">Dates:</label>
        <input
          onChange={(e) =>
            setEducationData({
              ...educationData,
              dates: e.target.value,
            })
          }
          type="text"
          placeholder="Dates"
        />
        <label htmlFor="">Major:</label>
        <input
          onChange={(e) =>
            setEducationData({
              ...educationData,
              major: e.target.value,
            })
          }
          type="text"
          placeholder="Major"
        />
        <button type="submit">Add Info</button>
      </form>
    </div>
  );
}

export default EducationForm;
