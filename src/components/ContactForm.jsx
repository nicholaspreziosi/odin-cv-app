import { Fragment, useState } from "react";
import App from "../App.jsx";
import "../stylesheets/App.css";

function ContactForm({ contactData, setContactData }) {
  const [dropDown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropDown);
    const contactFormContainer = document.querySelector(
      "#contact-form-container"
    );
    const contactChevron = document.querySelector("#contact-chevron");
    dropDown === false
      ? (contactFormContainer.style.display = "none")
      : (contactFormContainer.style.display = "flex");
    dropDown === false
      ? (contactChevron.src = "../public/chevron-down.svg")
      : (contactChevron.src = "../public/chevron-up.svg");
  }

  function handleSubmit() {
    const contactName = document.querySelector("#info-contact-name").value;
    const contactEmail = document.querySelector("#info-contact-email").value;
    const contactPhone = document.querySelector("#info-contact-phone").value;
    const contactWebsite = document.querySelector(
      "#info-contact-website"
    ).value;
    setContactData({
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      website: contactWebsite,
    });
  }

  return (
    <div className="form-section">
      <div onClick={toggleDropdown} className="form-header">
        <h2>Contact Info</h2>
        <img
          id="contact-chevron"
          className="chevron-img"
          src="../public/chevron-down.svg"
          alt=""
        />
      </div>
      <div id="contact-form-container">
        <form id="contact-form" className="info-form">
          <label htmlFor="info-contact-name">Name:</label>
          <input id="info-contact-name" type="text" placeholder="Name" />
          <label htmlFor="info-contact-email">Email Address:</label>
          <input id="info-contact-email" type="text" placeholder="Email" />
          <label htmlFor="info-contact-phone">Phone Number:</label>
          <input
            id="info-contact-phone"
            type="tel"
            placeholder="Phone Number"
          />
          <label htmlFor="info-contact-website">Website:</label>
          <input id="info-contact-website" type="text" placeholder="Website" />
        </form>
        <button onClick={handleSubmit}>Add Info</button>
      </div>
    </div>
  );
}

export default ContactForm;
