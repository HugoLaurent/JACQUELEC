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
    { name: "accueil", id: "accueil", ref: "mainSlide" },
    { name: "services", id: "services", ref: "secondSlide" },
    { name: "a propos", id: "a-propos", ref: "thirdSlide" },
    { name: "contact", id: "contact", ref: "forthSlide" },
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
            <span className="uppercase">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
