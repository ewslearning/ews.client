import { forwardRef } from "react";
import styles from "./input.module.css";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, register, error, ...rest }, ref) => {
    return (
      <div className={styles.container}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          id={name}
          {...register(name)}
          {...rest}
          ref={ref}
          className={`${styles.input} ${error ? styles.error : ""}`}
        />
        {error && <p className={styles.errorMessage}>{error.message}</p>}
      </div>
    );
  }
);

export default Input;
