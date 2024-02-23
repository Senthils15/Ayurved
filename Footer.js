import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdAddLocationAlt } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-flex">
        <div className="footer-left">
          <img src={logo} className="footer-logo"></img>
        </div>
        <div className="footer-middle">
          <Link to="/home" className="footer-link">
            Home
          </Link>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/services" className="footer-link">
            Services
          </Link>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
        </div>
        <div className="footer-right">
          <FaFacebookF className="footer-icon" />
          <FaTwitter className="footer-icon" />
          <RiInstagramFill className="footer-icon" />
          <MdAddLocationAlt className="footer-icon" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
