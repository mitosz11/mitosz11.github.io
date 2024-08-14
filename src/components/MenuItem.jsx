const MenuItem = ({ label, onClick, isActive }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`${
          isActive ? "text-cyan-300" : "hover:text-cyan-300 text-white"
        }`}
      >
        {label}
      </button>
    </li>
  );
};

export default MenuItem;
