// components/CustomCheckbox.js
import React from "react";
import styles from "./checkbox.module.css";

interface CustomCheckboxProps {
  label: string;
  value: string
  isChecked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, value, isChecked, onChange }) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        key={value}
        value={value}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.customCheckbox}></span>
      {label && <span className={styles.checkboxLabel}>{label.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</span>}
    </label>
  );
};

export default CustomCheckbox;
