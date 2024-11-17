import { useRef, useEffect } from "react";

export default function ForthSlide() {
  const contactSlideRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradientSize = 150;
      const x = e.clientX;
      const y = e.clientY;

      const radialGradient = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 1) ${gradientSize}px, rgba(0, 0, 0, 0) 10%)`;

      if (contactSlideRef.current) {
        contactSlideRef.current.style.backgroundImage = radialGradient;
      }
    };

    const contactSlide = contactSlideRef.current;
    if (contactSlide) {
      contactSlide.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (contactSlide) {
        contactSlide.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={contactSlideRef}
      className="min-h-screen bg-[#f1d832] flex items-center justify-center relative overflow-x-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute w-full h-full z-10"
      >
        <path
          d="M 99 0 L 99 30 L -20 30 L -20 70 L 99 70 L 99 100"
          stroke="black"
          strokeWidth=".1"
          fill="none"
        />
      </svg>
      <section className="flex flex-col items-center gap-6 p-6 py-8 max-w-[1300px]">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Contactez-moi
        </h2>
        <form className="bg-white p-6 rounded-md shadow-md w-[435px] max-w-md z-50">
          <div className="mb-4">
            <label
              className="block text-[#f1d832] text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#f1d832] text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Votre email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#f1d832] text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Votre message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#f1d832] hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Envoyer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
