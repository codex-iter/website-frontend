import React from "react";
import Menu from "./Menu";
import Logo from "../Assets/Images/codex logo 2.png";
import ContactInfo from "./ContactInfo";
import github from "../Assets/Icons/Vector.svg";
import newLogo from "../Assets/Images/half logo - codex.png";
const Base = ({ children }) => {
  function onLoad(event){
    event.preventDefault();
    window.open("https://github.com/codex-iter");
  }
  return (
    <div>
      <Menu />
      {children}
      {["/contact"].includes(window.location.pathname) ? null : (
        <div className='container'>
          {" "}
          <footer>
            <div>
              <img style={{ width: "15vw" }} src={newLogo} alt='' />
            </div>
            <div>
              <p style={{fontSize:"2vw"}}>A community of coders learning and exploring together</p>
            </div>
            <div>
              {/* <p style={{ color: "#f6f6f6", padding: "3px",fontSize:"3vw" }}>FOLLOW US</p> */}
              <ContactInfo>
                <button className="icons-btn" style={{"backgroundColor": "#0c1b38"}} onClick={onLoad}>
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
