import { useState, useEffect, useRef } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import ForthSlide from "./pages/ForthSlide/ForthSlide";
import MainSlide from "./pages/MainSlide/MainSlide";
import SecondSlide from "./pages/SecondSlide/SecondSlide";
import ThirdSlice from "./pages/ThirdSlice/ThirdSlice";

export default function App() {
  const containerRef = useRef(null);
  const mainSlideRef = useRef(null);
  const secondSlideRef = useRef(null);
  const thirdSlideRef = useRef(null);
  const forthSlideRef = useRef(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [selected, setSelected] = useState("home");

  // Map des références pour la navigation
  const slideRefs = {
    mainSlide: mainSlideRef,
    secondSlide: secondSlideRef,
    thirdSlide: thirdSlideRef,
    forthSlide: forthSlideRef,
  };

  // Fonction de navigation au clic
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

  // Écouteur de scroll pour mettre à jour "selected" selon la section visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTop = 0;
    let isScrolling = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (isScrolling || isNavigating) return;

      const currentScrollTop = container.scrollTop;
      const sections = [
        mainSlideRef,
        secondSlideRef,
        thirdSlideRef,
        forthSlideRef,
      ];
      let currentSection = "home";

      sections.forEach((ref) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;

          if (
            currentScrollTop >= sectionTop - 100 &&
            currentScrollTop < sectionTop + sectionHeight - 100
          ) {
            currentSection = ref.current.id;
          }
        }
      });

      if (selected !== currentSection && !isNavigating) {
        setSelected(currentSection);
      }

      lastScrollTop = currentScrollTop;
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
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
        <section ref={mainSlideRef} id="home" className="h-screen">
          <MainSlide />
        </section>
        <section ref={secondSlideRef} id="services" className="min-h-screen">
          <SecondSlide />
        </section>
        <section ref={thirdSlideRef} id="about" className="min-h-screen">
          <ThirdSlice />
        </section>
        <section ref={forthSlideRef} id="contact" className="min-h-screen">
          <ForthSlide />
        </section>
      </div>
    </main>
  );
}
