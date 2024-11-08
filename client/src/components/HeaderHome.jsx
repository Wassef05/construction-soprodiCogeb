import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderHome.css";
import { useTypewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next"; // Importer i18next pour la traduction

import { covSmall } from "../img"; // Image pour mobile
import { covLarge } from "../img"; // Image pour desktop
import { Logo } from "../img"; // Logo

export default function HeaderHome() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Utilisation de useTranslation

  const [text] = useTypewriter({
    words: [t("headerHome.slogan")], // Utiliser la clé de traduction pour le slogan
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const sponsorsElement = document.getElementById("sponsor");
      if (sponsorsElement) {
        sponsorsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="accueil" name="accueil">
      {/* Utilisation du tag <picture> pour les images responsives */}
      <picture>
        <source media="(max-width: 640px)" srcSet={covSmall} />
        <source media="(min-width: 641px)" srcSet={covLarge} />
        <img
          src={covLarge} // Image fallback
          alt={t("headerHome.coverImageAlt")} // Utiliser une clé de traduction pour l'alt de l'image
          className="bg bg-no-repeat h-[100vh] w-full"
          loading="lazy"
        />
      </picture>
      
      {/* Positionnement du texte */}
      <div className="slogan-container" style={{ borderTopRightRadius: '50px', width: '90%' }}>
        <h1 className="simple-font text-bright slogan-text">
          {text}
          <span className="cursor">🖊</span>
        </h1>
      </div>

      {/* Logo positionné en haut à gauche */}
      <img
        src={Logo}
        alt={t("headerHome.logoAlt")} // Utiliser une clé de traduction pour l'alt du logo
        className="logo m-4 w-28 sm:w-36 md:w-42 lg:w-48 h-auto"
        loading="lazy"
      />
    </section>
  );
}
