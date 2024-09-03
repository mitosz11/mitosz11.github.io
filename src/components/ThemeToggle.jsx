import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full"
    >
      {isDarkMode ? (
        <BsSun className="text-yellow-300 text-3xl" />
      ) : (
        <BsMoon className="text-gray-900 text-3xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
