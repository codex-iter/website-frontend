import React from "react";
import Menu from "../components/Menu";
import ContactInfo from "../components/ContactInfo";
import github from "../assets/icons/github.svg";
import newLogo from "../assets/images/half logo - codex.png";

const Base = ({ children }) => {
  function handleCtaClick(event) {
    event.preventDefault();
    window.open("https://github.com/codex-iter");
  }

  return (
    <div>
      <Menu />
      {children}
      {["/contact"].includes(window.location.pathname) ? null : (
        <div className="container">
          <footer>
            <div>
              <img style={{ width: "15vw" }} src={newLogo} alt="" />
            </div>
            <div>
              <p style={{ fontSize: "2vw" }}>
                A community of coders learning and exploring together
              </p>
            </div>
            <div>
              <ContactInfo>
                <button
                  className="icons-btn"
                  style={{ backgroundColor: "#0c1b38" }}
                  onClick={handleCtaClick}
                >
                  <img src={github} alt="" />
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
