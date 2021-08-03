import React from "react";
import Menu from "./Menu";
import Logo from "../images/codex logo 2.png";
import ContactInfo from "./ContactInfo";

const Base = ({ children }) => {

  return (
    <div>
      <Menu/>
      {children}
      {["/contact","/about"].includes(window.location.pathname)?null:<footer>
        <div>
          <img style={{ width: "243px", height: "243px" }} src={Logo} alt='' />
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>
        <div>
          <h2 style={{ color: "#f6f6f6", padding: "5px" }}>FOLLOW US</h2>
          <ContactInfo>
            <button className='icons-btn'>
              <img src='https://img.icons8.com/material-rounded/24/000000/github.png' alt="" />
            </button>
          </ContactInfo>
        </div>
      </footer>}
    </div>
  );
};

export default Base;
