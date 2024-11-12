import { useEffect, useRef } from "react";

const services = [
  {
    nom: "Installation électrique",
    description:
      "Je vous propose l'installation complète de vos systèmes électriques, que ce soit pour une construction neuve ou une rénovation. Je m'assure que chaque installation soit conforme aux normes en vigueur et parfaitement adaptée à vos besoins.",
    icone: "🔌",
  },
  {
    nom: "Dépannage électrique",
    description:
      "En cas de panne ou de dysfonctionnement électrique, je suis à votre disposition pour intervenir rapidement. Je diagnostique le problème et effectue les réparations nécessaires pour remettre votre installation en état de fonctionnement.",
    icone: "⚡️🔧",
  },
  {
    nom: "Mise aux normes électriques",
    description:
      "Je vous aide à mettre votre installation électrique aux normes de sécurité actuelles (NF C 15-100). Cela peut inclure la mise en conformité du tableau électrique, des prises de terre ou l'ajout de protections adaptées à votre domicile ou votre entreprise.",
    icone: "⚡️📏",
  },
  {
    nom: "Installation de systèmes de chauffage électrique",
    description:
      "Je suis spécialisé dans l'installation de systèmes de chauffage électrique, que ce soit pour des radiateurs, des planchers chauffants ou des chaudières électriques. Ensemble, nous choisirons la solution la plus efficace et la plus économique pour votre confort.",
    icone: "🌡️",
  },
  {
    nom: "Éclairage intérieur et extérieur",
    description:
      "Je conçois et installe des systèmes d'éclairage adaptés à vos espaces intérieurs et extérieurs. Que ce soit pour des spots, des luminaires ou des installations pour votre jardin et terrasse, je vous propose des solutions esthétiques et fonctionnelles.",
    icone: "💡",
  },
  {
    nom: "Vérification et diagnostic d'installations électriques",
    description:
      "Je réalise un diagnostic complet de vos installations électriques pour détecter d'éventuelles anomalies ou risques. Après analyse, je vous propose des solutions de mise en sécurité et de rénovation pour garantir le bon fonctionnement de votre installation.",
    icone: "🔍",
  },
  {
    nom: "Installation de bornes de recharge pour véhicules électriques",
    description:
      "Je vous accompagne dans l'installation de bornes de recharge pour votre véhicule électrique, que ce soit à domicile ou en entreprise. Je vous conseille sur le meilleur emplacement et je garantis une installation conforme et sécurisée.",
    icone: "🔌🚗",
  },

  {
    nom: "Maintenance électrique préventive",
    description:
      "Je vous propose un service de maintenance préventive pour assurer le bon fonctionnement de vos installations électriques. Cela inclut la vérification régulière des équipements, la détection de risques potentiels et la mise en œuvre des mesures nécessaires pour prévenir tout incident.",
    icone: "🔧🛠️",
  },
];

export default function SecondSlide() {
  const secondSlideRef = useRef(null); // Ref pour la deuxième section

  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradientSize = 150;
      const x = e.clientX;
      const y = e.clientY;

      // Applique un fond avec un gradient radial noir sur le second slide
      const radialGradient = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 1) ${gradientSize}px, rgba(0, 0, 0, 0) 10%)`;

      if (secondSlideRef.current) {
        secondSlideRef.current.style.backgroundImage = radialGradient; // Application du fond dynamique
      }
    };

    const secondSlide = secondSlideRef.current;
    if (secondSlide) {
      secondSlide.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (secondSlide) {
        secondSlide.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={secondSlideRef}
      className="min-h-screen bg-[#f1d832] flex items-center justify-center relative overflow-x-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute w-full h-full z-10"
      >
        {/* Tracé qui "continue" du premier */}
        <path
          d="M 99 0 L 99 30 L -20 30 L -20 70 L 99 70 L 99 100"
          stroke="black"
          strokeWidth=".1"
          fill="none"
        />
      </svg>
      <section className="flex flex-wrap justify-center gap-6 p-6 py-8 max-w-[1300px]">
        {services.map((service, index) => (
          <article
            key={index}
            className="card-service__wrapper z-20  cursor-default bg-white p-4 rounded-md shadow-md flex flex-col items-center text-center w-[250px] min-w-[250px] flex-shrink-0"
          >
            <div className="service-icon text-4xl mb-4">{service.icone}</div>
            <h3 className="text-lg font-semibold mb-4">{service.nom}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
