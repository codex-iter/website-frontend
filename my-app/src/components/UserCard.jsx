import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import "../styles/members.css";

//import { Link, NavLink } from "react-router-dom";

const UserCard = (props) => {
  const { img, name, skill, twitterLink, linkedinLink, githubLink } = props;
  return (
    <div className="cardx">
      <div className="userImage">
        <img src={img} alt="user" />
      </div>
      <div className="name">{name}</div>
      <div className="title">{skill}</div>
      <center>
        <div className="img-btn">
          <a href={twitterLink} target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </div>
      </center>
    </div>
  );
};

export default UserCard;
