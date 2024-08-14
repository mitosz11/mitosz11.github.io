import React from "react";

const MenuItem = ({ label, onClick, isActive }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`text-white ${
          isActive ? "text-cyan-300" : "hover:text-cyan-300"
        }`}
      >
        {label}
      </button>
    </li>
  );
};

export default MenuItem;
