import { Fragment, useState } from "react";
import App from "../App.jsx";
import "../stylesheets/App.css";

function DesignForm({ designData, setDesignData }) {
  const [dropDown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropDown);
    const designForm = document.querySelector("#design-form");
    const designChevron = document.querySelector("#design-chevron");
    dropDown === false
      ? (designForm.style.display = "none")
      : (designForm.style.display = "flex");
    dropDown === false
      ? (designChevron.src = "../public/chevron-down.svg")
      : (designChevron.src = "../public/chevron-up.svg");
  }

  function handleFontChange() {}

  return (
    <div className="form-section">
      <div onClick={toggleDropdown} className="form-header">
        <h2>Design</h2>
        <img
          id="design-chevron"
          className="chevron-img"
          src="../public/chevron-down.svg"
          alt=""
        />
      </div>
      <div id="design-form" className="info-form">
        <div id="font-container">
          <label htmlFor="select-font">Select Font: </label>
          <select
            onChange={(e) =>
              setDesignData({
                ...designData,
                resumeFontFamily: e.target.value,
              })
            }
            name="font"
            id="select-font"
          >
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Calibri">Calibri</option>
            <option value="Arial">Arial</option>
          </select>
        </div>
        <div id="color-selector-container">
          <div>
            <label htmlFor="">Header Background Color: </label>
            <input
              onChange={(e) =>
                setDesignData({
                  ...designData,
                  headerBg: e.target.value,
                })
              }
              type="color"
              defaultValue="#010136"
            />
          </div>
          <div>
            <label htmlFor="">Header Font Color: </label>
            <input
              onChange={(e) =>
                setDesignData({
                  ...designData,
                  headerFont: e.target.value,
                })
              }
              type="color"
              defaultValue="#ffffff"
            />
          </div>
          <div>
            <label htmlFor="">Main Background Color: </label>
            <input
              onChange={(e) =>
                setDesignData({
                  ...designData,
                  mainBg: e.target.value,
                })
              }
              type="color"
              defaultValue="#ffffff"
            />
          </div>
          <div>
            <label htmlFor="">Main Font Color: </label>
            <input
              onChange={(e) =>
                setDesignData({
                  ...designData,
                  mainFont: e.target.value,
                })
              }
              type="color"
              defaultValue="#000000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignForm;
