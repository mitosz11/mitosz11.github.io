import React from "react";
import MenuItem from "./MenuItem";

const Navbar = ({ onSectionChange }) => {
  const menuItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <div className="absolute text-xl top-0 right-0 mt-4 mr-4">
      <ul className="flex space-x-4">
        {menuItems.map((item) => (
          <MenuItem
            key={item.section}
            label={item.label}
            onClick={() => onSectionChange(item.section)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
