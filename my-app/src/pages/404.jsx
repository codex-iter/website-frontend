import React from "react";

import CustomButton from "../components/Buttons";
import Styles from "../styles/Error.module.css";
import error from "../assets/icons/error.svg";
import arrow from "../assets/icons/arrow.svg";

const Error = (props) => {
  const handleClick = () => {
    props.history.push("/");
  };

  return (
    <div className={Styles.error_outer}>
      <div className={Styles.error_image}>
        <img src={error} alt="" />
      </div>
      <div className={Styles.error_message}>Bummer, Page not found.</div>
      <div className={Styles.error_message_2}>
        Something cool is coming soon. Stay tuned
      </div>
      <div className={Styles.error_button}>
        <CustomButton text="Home" page="404" handleClick={handleClick} />
      </div>
      <div className={Styles.error_report_issue}>
        <div className={Styles.error_report_message}>Report an issue</div>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Error;
