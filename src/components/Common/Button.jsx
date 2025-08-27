import React from "react";
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary: "btn-primary",
    secondary: "border border-primary text-primary hover:bg-primary/10",
    outline:
      "border border-gray-600 text-gray-300 hover:border-primary hover:text-primary",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
