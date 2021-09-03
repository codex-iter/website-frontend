import React from "react";
import Menu from "./Menu";
import Logo from "../Assets/Images/codex logo 2.png";
import ContactInfo from "./ContactInfo";
import github from "../Assets/Icons/Vector.svg";
import newLogo from "../Assets/Images/half logo - codex.png";
const Base = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      {["/contact", "/about"].includes(window.location.pathname) ? null : (
        <div className='container'>
          {" "}
          <footer>
            <div>
              <img style={{ width: "150px" }} src={newLogo} alt='' />
            </div>
            <div>
              <p>A community of coders learning and exploring together</p>
            </div>
            <div className='footer-end'>
              <h2 style={{ color: "#f6f6f6", padding: "5px" }}>FOLLOW US</h2>
              <ContactInfo>
                <button className='icons-btn'>
                  <img src={github} alt='' />
                </button>
              </ContactInfo>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Base;
