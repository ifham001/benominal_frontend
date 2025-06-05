import React from "react";
import classNames from "classnames";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "px-6 py-2 rounded-full font-medium transition-colors duration-300",
        "bg-[#1B4332] text-[#A37E2C] hover:bg-[#14532d]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
