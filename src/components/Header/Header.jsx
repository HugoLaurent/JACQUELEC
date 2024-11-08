import React, { useState } from "react";
import "./header-style.css";

const Header = ({ textColor }) => {
  const [selected, setSelected] = useState("home"); // État pour l'élément sélectionné
  const navBarInfo = ["home", "services", "about", "contact"];

  const handleClick = (item) => {
    setSelected(item); // Met à jour l'élément sélectionné
  };

  return (
    <nav className="header">
      <ul className="flex gap-3">
        {navBarInfo.map((item) => (
          <li
            key={item}
            className={`text-${textColor} nav-link ${
              selected === item ? "selected" : ""
            }`}
            onClick={() => handleClick(item)} // Gère le clic
          >
            <span className="uppercase">{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
