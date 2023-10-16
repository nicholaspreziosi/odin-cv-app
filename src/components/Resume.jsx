import { Fragment, useState } from "react";
import "../stylesheets/App.css";

function Resume({ contactData, experienceData, educationData, designData }) {
  return (
    <Fragment>
      <div
        id="resume"
        style={{
          fontFamily: designData.resumeFontFamily,
          background: designData.mainBg,
          color: designData.mainFont,
        }}
      >
        <div
          className="resume-contact"
          style={{
            background: designData.headerBg,
            color: designData.headerFont,
          }}
        >
          <div>
            <img
              style={{ display: "none" }}
              id="prof-image"
              src="../public/account-box-outline.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>{contactData.name || "Name"}</h1>
            <h2>{contactData.email || "Email Address"}</h2>
            <h2>{contactData.phone || "Phone Number"}</h2>
            <h2>{contactData.website || "Website"}</h2>
          </div>
        </div>
        <div
          className="resume-experience"
          style={{
            background: designData.mainBg,
            color: designData.mainFont,
            borderBottom: `1px dashed ${designData.mainFont}`,
          }}
        >
          <h1>
            <i>Experience</i>
          </h1>
          {experienceData.map((experience) => (
            <div key={experience.id}>
              <div className="experience-info">
                <h2>{experience.title || "Title"}</h2>
                <p>{experience.company || "Company"}</p>
              </div>
              <div className="experience-info">
                <p>{experience.location || "Location"}</p>
                <p>{experience.dates || "Dates"}</p>
              </div>
              <p className="experience-description">
                {experience.description || "Description"}
              </p>
            </div>
          ))}
        </div>
        <div
          className="resume-education"
          style={{
            background: designData.mainBg,
            color: designData.mainFont,
          }}
        >
          <h1>
            <i>Education</i>
          </h1>
          {educationData.map((education) => (
            <div key={education.id}>
              <div className="education-info">
                <h2>{education.school || "School"}</h2>
                <p>{education.major || "Major"}</p>
              </div>
              <div className="education-info">
                <p>{education.location || "Location"}</p>
                <p>{education.dates || "Dates"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
