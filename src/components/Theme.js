import React from "react";
import Context from "../context/context";
function Theme() {
  const { theme, toggleTheme } = React.useContext(Context);
  return (
    <div className="switch">
      <i className="material-icons">
        {theme === "dark" ? "wb_sunny" : "brightness_2"}
      </i>
      <label>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="lever"></span>
      </label>
    </div>
  );
}

export default Theme;
