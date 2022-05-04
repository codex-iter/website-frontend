import React from "react";
import styles from "../styles/Inputs.module.css";

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
            ? styles.input_outer_contact
            : styles.input_outer_contact_message
          : styles.input_outer_about
      }
    >
      {svg ? (
        <span className={styles.svg_span}>
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
          className={styles.textarea}
        />
      )}
    </div>
  );
};

export default CustomInput;
