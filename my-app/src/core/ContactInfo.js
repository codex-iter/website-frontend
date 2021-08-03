import React from "react";

const ContactInfo = ({ children }) => {
  return (
    <div>
      <div className='icons'>
        <button className='icons-btn'>
          <img src='https://img.icons8.com/ios-glyphs/30/000000/instagram-circle.png' />
        </button>
        <button className='icons-btn'>
          <img src='https://img.icons8.com/material-outlined/24/000000/youtube-play--v1.png' />
        </button>
        <button className='icons-btn'>
          <img src='https://img.icons8.com/material-outlined/24/000000/linkedin.png' />
        </button>
        <button className='icons-btn'>
          <img
            style={{
              width: "2em",
              height: "2em",
              borderRadius: "50%",
            }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DiBGuDqFLEfrk0FZRchWt8yVZaiqrfUAgyFX0wqO7eKYkWdmvd9CqsK0kZJSRWnVjaQ&usqp=CAU'
            alt=''
          />
        </button>
        <button className='icons-btn'>
          <img src='https://img.icons8.com/material-outlined/24/000000/facebook-circled--v6.png' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ContactInfo;
