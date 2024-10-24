import React, { useState } from 'react';
import {
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Logo} from '../img';

const modalContentMapping = {
  Devis: {
    title: "Calcul de Devis sur Mesure",
    description: "Chez SOPRODI, nous comprenons que chaque projet est unique et nécessite une approche personnalisée. C'est pourquoi nous offrons un service de calcul de devis sur mesure pour répondre précisément à vos besoins.",
  },
  Confidentialite: {
    title: "Politique de Confidentialité",
    description: "Chez SOPRODI, la protection de vos données personnelles est une priorité absolue. Nous nous engageons à respecter votre vie privée et à traiter vos informations avec le plus grand soin.",
  },
  Support: {
    title: "Support et Conseils",
    description: "Chez SOPRODI, nous croyons que le succès de votre projet repose sur un accompagnement de qualité. C'est pourquoi nous offrons un service de support complet, conçu pour répondre à toutes vos questions.",
  },
};

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (type) => {
    setModalData(modalContentMapping[type]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <footer className="bg-[#3C496E] pt-8">
      <div className="container mx-auto lg:flex items-start justify-between pb-8 px-4">
        {/* Logo et informations de contact */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={Logo} alt="Logo" className="w-1/3 h-auto mb-6" /> 
          <p className="text-white text-sm lg:text-base">
            SOPRODI, 4000, Avenue de l'environnement, <br /> Sousse, Tunisia
          </p>
          <span className="flex items-center gap-x-2 text-white mt-3">
            <FaPhone />
            <p>+216 73 323 435</p>
          </span>
          <span className="flex items-center gap-x-2 text-white mt-2">
            <FaRegEnvelope />
            <p>groupe-cogeb@gmail.com</p>
          </span>
        </div>

        {/* Section Informations */}
        <div className="lg:w-1/3 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-bold text-white uppercase mb-2">Informations</p>
          <ul className="text-white space-y-2 text-center lg:text-left">
            <li>
              <a href="#apropos" className="hover:underline">A Propos De Nous</a>
            </li>
            <li>
              <a href="/" className="hover:underline">L'objectif De la société</a>
            </li>
            <li>
              <a href="#locaux" className="hover:underline">Les Locaux SOPRODI</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Section Liens Utiles */}
        <div className="lg:w-1/3 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-bold text-white uppercase mb-2">Liens Utiles</p>
          <ul className="text-white space-y-2 text-center lg:text-left">
            <li className="cursor-pointer" onClick={() => handleOpenModal('Devis')}>Devis</li>
            <li className="cursor-pointer" onClick={() => handleOpenModal('Confidentialite')}>Confidentialité</li>
            <li className="cursor-pointer" onClick={() => handleOpenModal('Support')}>Support</li>
          </ul>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="mt-4 lg:w-1/3 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-bold text-white uppercase mb-2">Suivez-Nous</p>
          <div className="flex space-x-4 text-white text-2xl mt-2">
            <FaLinkedinIn className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Section bas du footer */}
      <section className="bg-[#2c3e50] text-white text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4 text-center sm:text-left">
          <p>© 2024 SOPRODI - Tous droits réservés</p>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
            <li className="cursor-pointer">Conditions générales d'utilisation</li>
            <li className="cursor-pointer">Politique de confidentialité</li>
            <li className="cursor-pointer">SOPRODI</li>
          </ul>
        </div>
      </section>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            backgroundColor: "white",
            p: 4,
            borderRadius: 2,
            maxWidth: '80%',
            mx: 'auto',
            mt: '20%',
            maxHeight: '90vh',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            overflowY: 'auto',
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {modalData.title}
          </Typography>
          <Typography variant="body1" component="p">
            {modalData.description}
          </Typography>
        </Box>
      </Modal>
    </footer>
  );
};

export default Footer;
