import { Fragment, useState } from "react";
import App from "../App.jsx";
import "../stylesheets/App.css";

function ContactForm({ contactData, setContactData }) {
  const [dropDown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropDown);
    const contactForm = document.querySelector("#contact-form");
    const contactChevron = document.querySelector("#contact-chevron");
    dropDown === false
      ? (contactForm.style.display = "none")
      : (contactForm.style.display = "flex");
    dropDown === false
      ? (contactChevron.src = "../public/chevron-down.svg")
      : (contactChevron.src = "../public/chevron-up.svg");
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
      <form id="contact-form" className="info-form">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) =>
            setContactData({
              ...contactData,
              name: e.target.value,
            })
          }
          id="name"
          type="text"
          placeholder="Name"
        />
        <label htmlFor="email">Email Address:</label>
        <input
          onChange={(e) =>
            setContactData({
              ...contactData,
              email: e.target.value,
            })
          }
          id="email"
          type="text"
          placeholder="Email"
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          onChange={(e) =>
            setContactData({
              ...contactData,
              phone: e.target.value,
            })
          }
          id="phone"
          type="tel"
          placeholder="Phone Number"
        />
        <label htmlFor="website">Website:</label>
        <input
          onChange={(e) =>
            setContactData({
              ...contactData,
              website: e.target.value,
            })
          }
          id="website"
          type="text"
          placeholder="Website"
        />
        <button type="submit">Add Info</button>
      </form>
    </div>
  );
}

export default ContactForm;
