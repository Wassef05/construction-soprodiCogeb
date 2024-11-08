import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa"; // Icône pour la sélection de langue
import { useTranslation } from "react-i18next"; // Import pour la traduction
import { fr, eng } from "../img"; // Import des images des drapeaux

export default function NavComp() {
  const { currentUser } = useSelector((state) => state.user);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour ouvrir/fermer le menu

  const { t, i18n } = useTranslation();
  const languageLinkStyles = `block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsNavbarVisible(currentScrollPosition < lastScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsLanguageDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollPosition]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div
      className={`fixed top-[-40px] right-0 z-50 md:w-[60vw] lg:w-[50vw] h-auto transition-transform duration-300 ${
        isNavbarVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <Navbar fluid rounded className="md:bg-white/70 bg-transparent rounded-bl-3xl mt-10 pt-0 p-6">
        {/* Conteneur pour icônes et menu burger en version mobile */}
        <div className="flex items-center justify-between md:order-1 relative">
          {/* Icône de langue en version mobile (en dehors de Navbar.Collapse) */}
          <div className="block md:hidden relative dropdown-container">
            <FaGlobe
              className="text-blue-500 text-lg cursor-pointer md:ml-0 md:mr-16 mr-4"
              onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
            />
            {/* Dropdown de langue en version mobile */}
            {isLanguageDropdownOpen && (
              <div className="absolute top-full left-0 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="flex flex-col bg-white">
                  <span
                    className={languageLinkStyles}
                    onClick={() => changeLanguage("fr")}
                  >
                    <img src={fr} alt="FR" className="w-5 h-5 mr-2" /> FR
                  </span>
                  <span
                    className={languageLinkStyles}
                    onClick={() => changeLanguage("en")}
                  >
                    <img src={eng} alt="ENG" className="w-5 h-5 mr-2" /> ENG
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Icône du menu burger (Navbar.Toggle) fixe en mobile */}
          <div className="mr-2 md:hidden relative z-50">
            <Navbar.Toggle
              className="cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>

        {/* Menu principal en version mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/20 shadow-md z-40 md:hidden">
            <Navbar.Collapse className="flex flex-col items-center bg-white/70 text-center pt-1 rounded-lg">
              <a
                className="text-md lg:text-base font-poppins mb-2 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
                href="/"
              >
                {t("navbar.home")}
              </a>
              <a
                className="text-md lg:text-base font-poppins mb-2 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
                href="#apropos"
              >
                {t("navbar.about")}
              </a>
              <a
                className="text-md lg:text-base font-poppins mb-2 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
                href="#locaux"
              >
                {t("navbar.locations")}
              </a>
              <a
                className="text-md lg:text-base font-poppins mb-2 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
                href="#contact"
              >
                {t("navbar.contact")}
              </a>
              {currentUser && (
                <NavLink
                  className="text-md lg:text-base font-poppins mb-2 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
                  to="/profile"
                >
                  {t("navbar.admin")}
                </NavLink>
              )}
            </Navbar.Collapse>
          </div>
        )}

        {/* Menu principal en version desktop */}
        <Navbar.Collapse className="hidden md:flex md:flex-row items-center justify-center md:mx-auto text-center pt-1">
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="/"
          >
            {t("navbar.home")}
          </a>
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="#apropos"
          >
            {t("navbar.about")}
          </a>
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="#locaux"
          >
            {t("navbar.locations")}
          </a>
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="#contact"
          >
            {t("navbar.contact")}
          </a>
          {currentUser && (
            <NavLink
              className="text-md lg:text-base font-poppins transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500 mr-4"
              to="/profile"
            >
              {t("navbar.admin")}
            </NavLink>
          )}

          {/* Icône de langue uniquement en version desktop */}
          <div className="hidden md:block relative dropdown-container">
            <FaGlobe
              className="text-blue-500 text-lg cursor-pointer"
              onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
            />
            {isLanguageDropdownOpen && (
              <div className="absolute top-full left-0 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="flex flex-col bg-white">
                  <span
                    onClick={() => changeLanguage("fr")}
                    className={languageLinkStyles}
                  >
                    <img src={fr} alt="FR" className="w-5 h-5 mr-2" /> FR
                  </span>
                  <span
                    onClick={() => changeLanguage("en")}
                    className={languageLinkStyles}
                  >
                    <img src={eng} alt="ENG" className="w-5 h-5 mr-2" /> ENG
                  </span>
                </div>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
