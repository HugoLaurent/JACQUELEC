import React from "react";

export default function Footer({ selected, openModal }) {
  // Déterminer la couleur du texte en fonction de la section sélectionnée
  const textColorClass =
    selected === "accueil" || selected === "a propos"
      ? "text-yellow-500"
      : "text-black";

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${textColorClass}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {currentYear} Jacquelec - Électricien à Rennes</p>
        </div>
        <div className="flex space-x-6">
          <button
            onClick={() => openModal("mentions")}
            className={`hover:underline ${textColorClass}`}
          >
            Mentions légales
          </button>
          <button
            onClick={() => openModal("politique")}
            className={`hover:underline ${textColorClass}`}
          >
            Politique de confidentialité
          </button>
        </div>
      </div>
    </footer>
  );
}
