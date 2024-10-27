import classes from "./button.module.css";

type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button
      className={`${classes.button} ${
        variant === "primary" ? classes.primary : classes.secondary
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
