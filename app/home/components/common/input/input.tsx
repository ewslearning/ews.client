import { forwardRef } from "react";
import styles from "./input.module.css";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputVariant = "primary" | "secondary" | "green";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  error?: FieldError;
  isDropDown?: boolean;
  dropdownOptions?: { label: string; value: string }[]; 
  variant?: InputVariant;
}

const Input = forwardRef<HTMLInputElement, InputProps>( // eslint-disable-line react/display-name
  ({ label, name, register, error, isDropDown, dropdownOptions,  variant = "primary", ...rest }) => {

    return (
      <div className={variant === "primary" ? styles.container : variant === "green"  ? styles.containerGreen : styles.containerLight}>
        <label htmlFor={name} className={ variant === "primary" ? styles.label:  variant === "green" ? styles.labelGreen: styles.labelLight}>
          {label}
        </label>
       
        {isDropDown ? (
          <select
            id={name}
            {...register(name)} 
            className={`${variant === "primary"? styles.input: styles.inputLight} ${error ? styles.error : ""}`}
          >
            <option value="0" disabled selected>
              {rest.placeholder}
            </option>
            {dropdownOptions?.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            {...register(name)}
            className={`${variant === "primary"? styles.input: variant === "green" ? styles.inputGreen : styles.inputLight} ${error ? styles.error : ""}`}
          />
        )}
        {error && <p className={styles.errorMessage}>{error.message}</p>}
      </div>
    );
  }
);

export default Input;
