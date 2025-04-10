import React from "react";
import classes from "./button.module.css";

type ButtonVariants = "primary" | "secondary" | "whiteBg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const variantClass =
    variant === "primary"
      ? classes.primary
      : variant === "secondary"
      ? classes.secondary
      : classes.whiteBg;

  return (
    <button className={`${classes.button} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
