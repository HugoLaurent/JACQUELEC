import React from "react";
import "./header-style.css";

const Header = ({
  textColor,
  onNavigate,
  isNavigating,
  selected,
  setSelected,
}) => {
  const navBarInfo = [
    { id: "accueil", ref: "mainSlide" },
    { id: "services", ref: "secondSlide" },
    { id: "a propos", ref: "thirdSlide" },
    { id: "contact", ref: "forthSlide" },
  ];

  const handleClick = (item) => {
    onNavigate(item.ref);
    setSelected(item.id);
  };

  return (
    <nav className="header">
      <ul className="flex gap-3">
        {navBarInfo.map((item) => (
          <li
            key={item.id}
            className={`text-${textColor} nav-link ${
              selected === item.id ? "selected" : ""
            } ${isNavigating ? "pointer-events-none" : ""}`}
            onClick={() => handleClick(item)}
          >
            <span className="uppercase">{item.id}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
