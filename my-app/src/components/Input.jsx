import React from "react";
import Styles from "../Styles/Inputs.module.css";

const CustomInput = ({
  name,
  value,
  type,
  handleChange,
  svg,
  path,
  placeholder,
}) => {
  return (
    <div
      className={
        path === "contact"
          ? type === "text"
            ? Styles.input_outer_contact
            : Styles.input_outer_contact_message
          : Styles.input_outer_about
      }
    >
      {svg ? (
        <span className={Styles.svg_span}>
          <img src={svg} alt="" />
        </span>
      ) : null}
      {type === "text" ? (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <textarea
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={Styles.textarea}
        />
      )}
    </div>
  );
};

export default CustomInput;
