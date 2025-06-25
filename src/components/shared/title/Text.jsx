import React from "react";
import classes from "./text.module.scss";

const Text = ({ children, variant = "default", className = "" }) => {
  const combinedClassNames =
    `${classes.title} ${classes[variant]} ${className}`.trim();
  return <p className={combinedClassNames}>{children}</p>;
};

export { Text };
