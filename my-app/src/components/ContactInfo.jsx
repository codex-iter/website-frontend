import React from "react";
import insta from "../assets/icons/insta.svg";
import linkedin from "../assets/icons/linkedIn.svg";
import fb from "../assets/icons/facebook.svg";
import yt from "../assets/icons/YoutubeLogo.svg";

const ContactInfo = ({ children }) => {
  return (
    <div>
      <div className="icons">
        <a
          className="icons-btn"
          href="https://www.instagram.com/codexiter/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={insta} alt="" />
        </a>
        <a
          className="icons-btn"
          href="https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA"
          rel="noreferrer"
          target="_blank"
        >
          <img src={yt} alt="" />
        </a>
        <a
          className="icons-btn"
          href="https://www.linkedin.com/company/codex-iter"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          className="icons-btn"
          href="https://www.facebook.com/codexiter"
          rel="noreferrer"
          target="_blank"
        >
          <img src={fb} alt="" />
        </a>
        {children}
      </div>
    </div>
  );
};

export default ContactInfo;
