import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderHome.css";
import { useTypewriter } from "react-simple-typewriter";

import {covSmall} from "../img";  // Image pour mobile
import {covLarge} from "../img";  // Image pour desktop
import {Logo} from "../img"; // Logo
// import {} from '../img'

export default function HeaderHome() {
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: ["Réinventez votre usine"],
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
    alt="Image de couverture de l'accueil"
    className="bg bg-no-repeat h-[100vh] w-full"
    loading="lazy"
  />
</picture>

      {/* Positionnement du texte */} 
      <div className="slogan-container  " style={{ borderTopRightRadius: '50px', width: '90%' }} >
    <h1 className="simple-font text-bright slogan-text">
              {text}
              <span className="cursor">🖊</span>
            </h1>
  </div>


      {/* Logo positionné en haut à gauche */}
      <img
        src={Logo}
        alt="Logo de l'entreprise"
        className="logo m-4 w-28 sm:w-36 md:w-42 lg:w-48 h-auto"
        loading="lazy"
      />
    </section>
  );
}
