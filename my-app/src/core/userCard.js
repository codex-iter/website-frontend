import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../Assets/Images/user.png";
import twitter from "../Assets/Images/twitter.png";
import linkedin from "../Assets/Images/linkedin.png";
import github from "../Assets/Images/github.png";
import "../Styles/members.css";
//import { Link, NavLink } from "react-router-dom";

const userCard = () => {
  return (
    <div className="cardx">
      <div className="userImage">
        <img src={logo} />
      </div>
      <div className="name">Benito Noboa</div>
      <div className="title">UI UX Designer</div>
      <center>
        <div className="">
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={linkedin} />
          </a>
          <a href="#">
            <img src={github} />
          </a>
        </div>
      </center>
    </div>
  );
};

export default userCard;
