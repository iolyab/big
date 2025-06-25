import React from "react";
import classes from "./button.module.scss";

const Button = ({ label, className = "", variant, ...props }) => {
  const variantClass = () => {
    if (variant === "orderBtn") {
      return classes.orderBtn;
    }
  };

  return (
    <button
      className={`${classes.button}  ${variantClass()} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };
