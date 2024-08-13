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
    <div className="absolute text-3xl top-0 right-0 pt-10 pr-16 z-10">
      <ul className="flex gap-6">
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
