export default function ThirdSlice() {
  return (
    <section
      className="third-slide-container bg-black h-[100vh] relative overflow-hidden flex justify-center items-center py-16"
      id="about"
    >
      <div className="hero-text text-center text-[#f1d832] z-30 max-w-4xl px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          Jacques Pinard - Électricien à Rennes
        </h1>

        <p className="subtitle text-lg sm:text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Expert en installations électriques, rénovation et dépannage dans la
          région de Rennes.
        </p>

        <p className="description text-base sm:text-lg mb-8 px-4 animate__animated animate__fadeIn animate__delay-2s">
          Fort de plus de 30 ans d'expérience dans le domaine de l'électricité,
          Jacques Pinard intervient à Rennes et dans ses alentours pour vous
          fournir des services électriques de qualité, en toute sécurité. Vous
          pouvez compter sur lui pour tous vos projets électriques, qu'il
          s'agisse d'une rénovation, d'une nouvelle installation ou d'un
          dépannage urgent.
        </p>

        <p className="contact text-lg sm:text-xl mb-8 px-4 animate__animated animate__fadeIn animate__delay-3s">
          Découvrez tous les services proposés sur la{" "}
          <a href="/services" className="text-[#f1d832] underline">
            page Services
          </a>
          .
        </p>

        <p className="contact text-lg sm:text-xl animate__animated animate__fadeIn animate__delay-5s">
          <strong>Contactez-moi dès aujourd'hui</strong> pour un devis gratuit
          et rapide.
        </p>
      </div>
    </section>
  );
}
