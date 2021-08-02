import React from "react";
import Styles from "../Styles/SocialIcons.module.css";

const CustomSocialIcon = ({svg,href}) => {
    return (
        <a href={href}>
        <div className={Styles.social_icon}>
        <img src={svg} alt=""/>
        </div>
        </a>
   )
}

export default CustomSocialIcon