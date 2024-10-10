import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function NavComp() {
  const { currentUser } = useSelector((state) => state.user);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        // L'utilisateur fait défiler vers le bas, cacher la Navbar
        setIsNavbarVisible(false);
      } else if (currentScrollPosition < lastScrollPosition) {
        // L'utilisateur fait défiler vers le haut, montrer la Navbar
        setIsNavbarVisible(true);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div className={`fixed top-[-40px] right-0 z-50 md:w-[60vw] lg:w-[50vw] h-auto transition-transform duration-300 ${isNavbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <Navbar fluid rounded className="bg-white/70 rounded-bl-3xl mt-10 pt-0 p-6">
        <div className="flex md:order-1">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="sm:w-[50vw] md:flex md:flex-row items-center justify-center md:mx-auto text-center pt-1">
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="/"
          >
            ACCUEIL
          </a>
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="#apropos"
          >
            A PROPOS
          </a>
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="#locaux"
          >
            LES LOCAUX
          </a>
          <a
            className="text-md lg:text-base font-poppins mr-4 transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
            href="#contact"
          >
            CONTACT
          </a>
          {currentUser ? (
            <NavLink
              className="text-md lg:text-base font-poppins transition-all duration-300 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500"
              to="/profile"
            >
              ADMIN
            </NavLink>
          ) : (
            <div></div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
