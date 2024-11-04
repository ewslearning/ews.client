import { forwardRef } from "react";
import styles from "./input.module.css";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  error?: FieldError;
  isDropDown?: boolean;
  dropdownOptions?: { label: string; value: string }[]; 
}

const Input = forwardRef<HTMLInputElement, InputProps>( // eslint-disable-line react/display-name
  ({ label, name, register, error, isDropDown, dropdownOptions, ...rest }, ref) => {

    return (
      <div className={styles.container}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
       
        {isDropDown ? (
          <select
            id={name}
            {...register(name)} 
            defaultValue= "0"
            className={`${styles.input} ${error ? styles.error : ""}`}
          >
            <option value="0" disabled>
              {rest.placeholder}
            </option>
            {dropdownOptions?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            {...register(name)}
            {...rest}
            ref={ref}
            className={`${styles.input} ${error ? styles.error : ""}`}
          />
        )}
        {error && <p className={styles.errorMessage}>{error.message}</p>}
      </div>
    );
  }
);

export default Input;
