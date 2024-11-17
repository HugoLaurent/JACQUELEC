import { useState, useRef, useEffect } from "react";
import Modal from "./components/Modal/Modal"; // Importer le modal
import "./App.css";

import Header from "./components/Header/Header";
import ForthSlide from "./pages/ForthSlide/ForthSlide";
import MainSlide from "./pages/MainSlide/MainSlide";
import SecondSlide from "./pages/SecondSlide/SecondSlide";
import ThirdSlice from "./pages/ThirdSlice/ThirdSlice";
import Footer from "./components/Footer/Footer";
import Mentions from "./pages/Legal/Mentions";
import PolitiqueConfidentialite from "./pages/Legal/PolitiqueConfidentialite";

export default function App() {
  const containerRef = useRef(null);
  const mainSlideRef = useRef(null);
  const secondSlideRef = useRef(null);
  const thirdSlideRef = useRef(null);
  const forthSlideRef = useRef(null);

  const [isNavigating, setIsNavigating] = useState(false);
  const [selected, setSelected] = useState("accueil");

  const [isModalOpen, setIsModalOpen] = useState(false); // Gestion de l'état du modal
  const [modalContent, setModalContent] = useState(""); // Contenu du modal

  const slideRefs = {
    mainSlide: mainSlideRef,
    secondSlide: secondSlideRef,
    thirdSlide: thirdSlideRef,
    forthSlide: forthSlideRef,
  };

  const handleNavigation = (refName) => {
    if (isNavigating) return;
    setIsNavigating(true);
    setSelected(refName);

    const targetRef = slideRefs[refName];
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000);
      }, 50);
    }
  };

  // Ouvrir le modal et afficher le contenu approprié
  const openModal = (type) => {
    let content = "";
    if (type === "mentions") {
      content = <Mentions />;
    } else if (type === "politique") {
      content = <PolitiqueConfidentialite />;
    }

    setModalContent(content);
    setIsModalOpen(true); // Ouvre le modal
  };

  // Écouteur de scroll pour mettre à jour "selected" selon la section visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;
      const sections = [
        { id: "accueil", ref: mainSlideRef },
        { id: "services", ref: secondSlideRef },
        { id: "a-propos", ref: thirdSlideRef },
        { id: "contact", ref: forthSlideRef },
      ];

      let currentSection = "accueil"; // Section par défaut
      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;

          if (
            currentScrollTop >= sectionTop - 100 &&
            currentScrollTop < sectionTop + sectionHeight - 100
          ) {
            currentSection = id;
          }
        }
      });

      // Mise à jour de l'état "selected" en fonction de la section visible
      if (selected !== currentSection) {
        setSelected(currentSection);
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isNavigating, selected]);

  return (
    <main className="relative">
      <Header
        textColor="red-500"
        onNavigate={handleNavigation}
        isNavigating={isNavigating}
        selected={selected}
        setSelected={setSelected}
      />
      <div
        ref={containerRef}
        className="h-screen relative overflow-y-scroll scroll-smooth main-container"
      >
        {/* Sections Scrollables */}
        <section ref={mainSlideRef} id="accueil" className="h-screen">
          <MainSlide />
        </section>
        <section ref={secondSlideRef} id="services" className="min-h-screen">
          <SecondSlide />
        </section>
        <section ref={thirdSlideRef} id="a-propos" className="min-h-screen">
          <ThirdSlice />
        </section>
        <section ref={forthSlideRef} id="contact" className="min-h-screen">
          <ForthSlide />
        </section>
      </div>
      <section className="absolute bottom-0 z-50 w-full">
        <Footer
          selected={selected}
          openModal={openModal} // Passe la fonction d'ouverture de modal au Footer
        />
      </section>

      {/* Modal Popup pour Mentions légales ou Politique de confidentialité */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </main>
  );
}
