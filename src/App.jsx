import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import ForthSlide from "./pages/ForthSlide/ForthSlide";
import MainSlide from "./pages/MainSlide/MainSlide";
import SecondSlide from "./pages/SecondSlide/SecondSlide";
import ThirdSlice from "./pages/ThirdSlice/ThirdSlice";

export default function App() {
  const [isMainSlideVisible, setIsMainSlideVisible] = useState(true);
  const mainSlideRef = useRef(null);
  const secondSlideRef = useRef(null); // Référence vers la deuxième section
  const thirdSlideRef = useRef(null);
  const forthSlideRef = useRef(null);

  const scrollToSecondSlide = () => {
    // Utilisation de scrollIntoView pour défiler vers la deuxième section
    secondSlideRef.current.scrollIntoView({
      behavior: "smooth", // Animation fluide
      block: "start", // Aligne l'élément au début du viewport
    });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === mainSlideRef.current) {
          setIsMainSlideVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (mainSlideRef.current) {
      observer.observe(mainSlideRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (mainSlideRef.current) {
        observer.unobserve(mainSlideRef.current);
      }
    };
  }, []);

  return (
    <main className="relative">
      <Header textColor="red-500" hoverColor="yellow-400" />

      <div className=" snap-y snap-mandatory h-screen relative scroll-smooth overflow-y-scroll">
        <section ref={mainSlideRef} className=" snap-start h-screen">
          <MainSlide />
        </section>
        <section
          ref={secondSlideRef}
          className=" snap-start h-screen"
          id="second-page"
        >
          <SecondSlide />
        </section>
        <section ref={thirdSlideRef} className=" snap-start h-screen">
          <ThirdSlice />
        </section>
        <section ref={forthSlideRef} className=" snap-start h-screen">
          <ForthSlide />
        </section>
      </div>
    </main>
  );
}
