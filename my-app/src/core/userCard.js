import Card from "react-bootstrap/Card";
import logo from "../Assets/Images/user.png";
import twitter from "../Assets/Images/twitter.png";
import linkedin from "../Assets/Images/linkedin.png";
import github from "../Assets/Images/github.png";
import "../Styles/members.css";

//import { Link, NavLink } from "react-router-dom";

const UserCard = (props) => {
  const { img, name, skill, twitterLink, linkedinLink, githubLink } = props;
  return (
    <div className="cardx">
      <div className="userImage">
        <img src={img} />
      </div>
      <div className="name">{name}</div>
      <div className="title">{skill}</div>
      <center>
        <div className="img-btn">
          <a href={twitterLink} target="_blank">
            <img src={twitter} />
          </a>
          <a href={linkedinLink} target="_blank">
            <img src={linkedin} />
          </a>
          <a href={githubLink} target="_blank">
            <img src={github} />
          </a>
        </div>
      </center>
    </div>
  );
};

export default UserCard;
