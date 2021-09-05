import React from "react";
import insta from "../Assets/Icons/insta.svg";
import linkedin from "../Assets/Icons/linkedIn.svg";
import emial from "../Assets/Icons/email.svg";
import twitter from "../Assets/Icons/twitter.svg";
import fb from "../Assets/Icons/insta.svg";
import yt from "../Assets/Icons/YoutubeLogo.svg";
const ContactInfo = ({ children }) => {
  return (
    <div>
      <div className='icons'>
        <a className='icons-btn' href='https://www.instagram.com/codexiter/'>
          <img src={insta} />
        </a>
        <a className='icons-btn'>
          <img src={yt} />
        </a>
        <a className='icons-btn'>
          <img src={linkedin} />
        </a>
        <a className='icons-btn'>
          <img src={fb} alt='' />
        </a>
        <a className='icons-btn'>
          <img src={twitter} />
        </a>
        {children}
      </div>
    </div>
  );
};

export default ContactInfo;
