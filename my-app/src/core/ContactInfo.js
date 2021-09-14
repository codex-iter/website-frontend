import React from "react";
import insta from "../Assets/Icons/insta.svg";
import linkedin from "../Assets/Icons/linkedIn.svg";
import email from "../Assets/Icons/email.svg";
import twitter from "../Assets/Icons/twitter.svg";
import fb from "../Assets/Icons/facebook.svg";
import yt from "../Assets/Icons/YoutubeLogo.svg";
const ContactInfo = ({ children }) => {
  return (
    <div>
      <div className='icons'>
        <a className='icons-btn' href='https://www.instagram.com/codexiter/' rel='noreferrer' target='_blank'>
          <img src={insta} alt=''/>
        </a>
        <a className='icons-btn' href='https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA' rel='noreferrer' target='_blank'>
          <img src={yt} alt=''/>
        </a>
        <a className='icons-btn' href='https://www.linkedin.com/company/codex-iter' rel='noreferrer' target='_blank'>
          <img src={linkedin} alt=''/>
        </a>
        <a className='icons-btn' href='https://www.facebook.com/codexiter' rel='noreferrer' target='_blank'>
          <img src={fb} alt='' />
        </a>
        {/* <a className='icons-btn'>
          <img src={twitter} />
        </a> */}
        {children}
      </div>
    </div>
  );
};

export default ContactInfo;
