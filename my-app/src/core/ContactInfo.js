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
        <button className='icons-btn'>
          <img src={insta} />
        </button>
        <button className='icons-btn'>
          <img src={yt} />
        </button>
        <button className='icons-btn'>
          <img src={linkedin} />
        </button>
        <button className='icons-btn'>
          <img src={fb} alt='' />
        </button>
        <button className='icons-btn'>
          <img src={twitter} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ContactInfo;
