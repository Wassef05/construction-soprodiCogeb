import React, { useState } from "react";
import { CoverCard } from "../img";
import { Car } from "../img";
import ModalComponent from "./CustomModal";
import { useTranslation } from "react-i18next"; // Import de i18next

export default function Card1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation(); // Utilisation de useTranslation pour les traductions

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalContent = `
    ${t('card1.modalContentLine1')}
    ${t('card1.modalContentLine2')}
    ${t('card1.modalContentLine3')}
  `;

  return (
    <section
      id="apropos"
      name="apropos"
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      <div
        style={{ 
          backgroundImage: `url(${CoverCard})`, 
          bottom: '0', 
          left: '48px', 
          position: 'absolute' 
        }}
        className="w-full h-full sm:h-3/5 bg-cover bg-center bg-no-repeat -ml-12"
      ></div>
      
      <div className="relative z-10 p-4 sm:p-8 flex flex-col sm:flex-row flex-wrap justify-around items-center mb-12">
        {/* Texte section */}
        <div
          className="text-[#000000] max-w-prose w-full sm:w-1/2 lg:pl-28"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "1rem",
            textAlign: "justify",
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0f04b4] text-center sm:text-left mb-6 sm:mb-8">
            {t('card1.aboutUs')} {/* Traduction du titre */}
          </h1>
          <p className="font-playfair text-sm sm:text-base text-justify mb-4 leading-relaxed text-gray-800">
            <strong>{t('card1.soprodi')}</strong> {t('card1.description')}
          </p>
          <p className="mt-4 text-lg sm:text-xl flex items-center gap-2">
            <span className="text-[#0f04b4] cursor-pointer" onClick={openModal}>
              {t('card1.seeMore')} {/* Traduction du bouton */}
            </span>
            <span className="text-[#0f04b4] text-lg">&#9654;</span>
          </p>
        </div>

        {/* Image section */}
        <div className="w-full sm:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src={Car}
            alt="Card image"
            className="rounded-[30px] w-3/4 sm:w-3/4 lg:w-[22vw] h-auto shadow-3xl lg:shadow-[0px_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105 lg:mr-[10%]"
          />
        </div>
      </div>

      {/* Modal */}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
      />
    </section>
  );
}
