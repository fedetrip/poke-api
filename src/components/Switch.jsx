import { useState, useEffect } from "react";
import "../css/Switch.css";

export const Switch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? "dark" : "light";

  useEffect(() => {
    document.body.setAttribute = ("data-theme", theme);
  }, [theme]);

  const handleChange = () => {
    setDarkMode(!darkMode);
    console.log("Tema cambiado a " + (darkMode ? theme : theme));
  };

  return (
    <label className={`switch `}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={darkMode}
      />
      <span className="slider" />
    </label>
  );
};
