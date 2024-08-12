import React from "react";

const MenuItem = ({ label, onClick }) => {
  return (
    <li>
      <button onClick={onClick} className="text-white hover:text-gray-300">
        {label}
      </button>
    </li>
  );
};

export default MenuItem;
