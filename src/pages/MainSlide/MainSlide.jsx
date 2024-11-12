import Header from "../../components/Header/Header";
import "./main-style.css";
import { useEffect, useRef } from "react";

import lightOn from "../../assets/images/light-on.png";

export default function MainSlide({ scrollToSecondSlide }) {
  const svgRef = useRef(null);
  const bulbRef = useRef(null);
  const blackBgRef = useRef(null);

  useEffect(() => {
    const updateBulbPosition = () => {
      const svgPath = svgRef.current.querySelector("path");
      const bulb = bulbRef.current;

      if (svgPath && bulb) {
        const pathLength = svgPath.getTotalLength();
        const endPoint = svgPath.getPointAtLength(pathLength); // Get the end of the line

        // Position the bulb using SVG transform
        bulb.style.transform = `translate(${endPoint.x - 8}px, ${
          endPoint.y - 8
        }px)`;
      }
    };

    updateBulbPosition(); // Initial position

    // Ajout d'un écouteur d'événement de redimensionnement pour mettre à jour la position du bulb
    window.addEventListener("resize", updateBulbPosition);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateBulbPosition);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradientSize = 150;
      const x = e.clientX;
      const y = e.clientY;

      // Création d'un masque radial qui suit la souris
      const mask = `radial-gradient(circle at ${x}px ${y}px, transparent ${gradientSize}px, black 0)`;

      if (blackBgRef.current) {
        blackBgRef.current.style.maskImage = mask; // Pour les navigateurs modernes
        blackBgRef.current.style.webkitMaskImage = mask; // Compatibilité WebKit (Safari)
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="main-container h-[100vh] flex items-center justify-center relative overflow-hidden">
      <article className="main-title__container h-[100vh] w-full  absolute bg-[#f1d832]  z-10">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="absolute w-full h-full z-40"
        >
          <path
            d="M 100 100 L 100 90 L -25 90 L -25 20 L 30 20 L 30 30"
            stroke="black"
            strokeWidth=".1"
            fill="none"
          />
          <image
            ref={bulbRef}
            href={lightOn}
            x="0"
            y="0"
            width="50"
            height="50"
            className="w-4 h-4 main-bulb"
            transform={`translate(${30 - 25}, ${30 - 25})`}
          />
        </svg>
        <div className="main-hero">
          <h1>JACQUÉLEC</h1>
        </div>
        <p className="main-services__wrapper">
          Électricité - Changement de tableau éléctrique - Mise aux normes -
          Prises informatiques
        </p>
      </article>
      <article className="scroll-down-indicator absolute bottom-10 z-30 flex justify-center w-full">
        <a href="#second-page" className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-[black]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </article>
      <article
        ref={blackBgRef}
        className="main-title__container h-[100vh] w-full absolute bg-black text-[#f1d832]  z-20"
      >
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="absolute w-full h-full z-40"
        >
          <path
            d="M 100 100 L 100 90 L -25 90 L -25 20 L 30 20 L 30 30"
            stroke="#f1d832"
            strokeWidth=".1"
            fill="none"
          />
        </svg>
        <div className="main-hero">
          <h1>JACQUÉLEC</h1>
        </div>
        <p className="main-services__wrapper">
          Électricité - Changement de tableau éléctrique - Mise aux normes -
          Prises informatiques
        </p>
      </article>
      <article className="scroll-down-indicator absolute bottom-10 z-30 flex justify-center w-full">
        <a href="#second-page" className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f1d832"
            className="w-6 h-6 text-[#f1d832]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </article>
    </section>
  );
}
