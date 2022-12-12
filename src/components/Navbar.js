import React from "react";
import Context from "../context/context";
import Theme from "./Theme";
function Navbar() {
  const { theme } = React.useContext(Context);
  // const switchTheme = theme === "light" ? "black" : "white";
  const switchTheme = theme === "dark" ? "#2b3945" : "white";
  return (
    <header>
      <nav>
        <div
          className="nav-wrapper truncate"
          style={{ background: `${switchTheme}` }}
        >
          <a href="/" className="brand-logo hide-on-med-and-down">
            Where in the World
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <Theme />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
