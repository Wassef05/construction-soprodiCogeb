import React, { useState } from "react";
import {CoverCard} from "../img";
import {Car} from "../img";
import ModalComponent from "./CustomModal";

export default function Card1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalContent = `
    SOPRODI est une Société de Promotion Immobilière pour le Développement Industriel, Société à Responsabilité Limitée, dont le Siège Social sis à 121 Avenue Hédi Nouira à Sousse, qui a pour activité principale l'aménagement des zones Industrielles et la Construction des bâtiments et usines attribuées aux activités Industrielles.
    
    Créée en 2006, la Société SOPRODI Propriétaire de Terrains d'une superficie Totale de 28000 M2 à Sahline et Manzel Harb la Société a réussi à Construire et aménager 5 Locaux Loués à des Sociétés Étrangères :
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
            À PROPOS
          </h1>
          <p className="font-playfair text-sm sm:text-base text-justify mb-4 leading-relaxed text-gray-800">
            <strong>SOPRODI</strong> est une Société de Promotion Immobilière
            pour le Développement Industriel, Société à Responsabilité Limitée,
            dont le Siège Social sis à 121 Avenue Hédi Nouira à Sousse, qui a
            pour activité principale l'aménagement des zones Industrielles et la
            Construction des bâtiments et usines attribuées aux activités
            Industrielles.
          </p>
          <p className="mt-4 text-lg  sm:text-xl flex items-center gap-2">
            <span className="text-[#0f04b4]  cursor-pointer" onClick={openModal}>
              VOIR PLUS
            </span>
            <span className="text-#0f04b4] text-lg">&#9654;</span>
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
