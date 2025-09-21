import React from "react";

function Button({ title, className }) {
  return (
    <button
      className={`text-white px-4 py-2 font-medium cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
