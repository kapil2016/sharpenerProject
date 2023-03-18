import React from "react";
import styles from "./Button.module.css";

const Button = ({ children,buttonOnClick, disabled }) => {
  return (
    <button
      className={styles.Button}
      onClick={buttonOnClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
