import React from "react";
import Styles from "../Styles/Buttons.module.css";

const CustomButton = ({text,page,handleClick}) => {
    return (
        <div className={page==='404'?Styles.button_404:page==='contact'?Styles.button_contact:Styles.button_about} onClick={handleClick}>
            {text}
        </div>
    )
}

export default CustomButton;