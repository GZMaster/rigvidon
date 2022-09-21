import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="F_text">
        <p>Copyright © 2022 Rigvidon Energy. All rights reserved.</p>
        <p>
          Designed by <span className="F_Team">Retro Developers</span>
        </p>
      </div>
      <div className="F_Socials">
        <a
          href="https://www.facebook.com/profile.php?id=100084729275588"
          className="F_item"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/company/bralewood-investment-limited/"
          className="F_item"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/bralewoodinvestments/"
          className="F_item"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
