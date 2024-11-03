import { forwardRef } from "react";
import styles from "./input.module.css";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  isDropDown?: boolean;
  dropdownOptions?: { label: string; value: string }[]; 
}

const Input = forwardRef<HTMLInputElement, InputProps<any>>(
  ({ label, name, register, error, isDropDown, dropdownOptions, ...rest }, ref) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === "RemoveAll") {
        e.target.value = ""; // Clear the selection
        register(name).onChange({ target: { value: "" } } as any); // Reset the value in the form
      }
    };


    return (
      <div className={styles.container}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
       
        {isDropDown ? (
          <select
            id={name}
            {...register(name)}
            onChange={handleChange}
            className={`${styles.input} ${error ? styles.error : ""}`}
          >
            <option value="" disabled >
              {rest.placeholder}
            </option>
            <option value="RemoveAll"  >
              Remove selected choice
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
