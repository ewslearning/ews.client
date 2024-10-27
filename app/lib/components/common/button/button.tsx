import classes from "./button.module.css";

type ButtonVariants = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariants;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children }) => {
  return (
    <button
      className={`${classes.button} ${
        variant === "primary" ? classes.primary : classes.secondary
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
