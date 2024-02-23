import React from "react";
import "../css/Contact.css";
import contact from "../Assets/contact.jpg";
import bannerBtm from "../Assets/banner-btm.png";
import contactLeft from "../Assets/contact-left.png";
function Contact() {
  window.scrollTo(0, 0);

  return (
    <div className="contact">
      <div className="contact-top">
        <img className="img-one" src={contact}></img>
      </div>
      <img className="banner-btm" src={bannerBtm}></img>
      <div className="contact-section">
        <div className="section-left">
          <img src={contactLeft}></img>
        </div>
        <div className="section-right">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h2 className="title-one">We Love To</h2>
            <h3 className="title-two">Hear From You</h3>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Message" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
