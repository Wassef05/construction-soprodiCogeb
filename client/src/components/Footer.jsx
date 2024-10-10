// import React from 'react';
// import logo from '../img/Logo.png';

// function Footer() {
//   return (
//     <footer className="bg-[#3C496E] p-6 sm:p-12 font-sans tracking-wide">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
//         <div className='col-span-2'>
//           <div className="lg:flex mb-4 flex items-center">
//             <a href="/">
//               <img src={logo} width={160} alt="logo" />
//             </a>
//           </div>

//           <div className="lg:block items-start pt-4 sm:pt-12">
//             <p className="text-white max-w-full text-justify font-averia">
//               SOPRODI est une Société de Promotion Immobilière pour le Développement Industriel, dont le Siège Social sis à 121 Avenue Hédi Nouira à Sousse, qui a pour activité principale l'aménagement des zones Industrielles et la Construction des bâtiments et usines attribuées aux activités Industrielles.
//             </p>
//           </div>
//         </div>
//         <div>
//           <ul className="space-y-3 sm:space-y-5 pt-4 sm:pt-12">
//             <li>
//               <a href="#apropos" className="text-white font-cabin hover:text-white text-sm">A Propos De Nous</a>
//             </li>
//             <li>
//               <a href="/" className="text-white font-cabin hover:text-white text-sm">L'objectif De la société</a>
//             </li>
//             <li>
//               <a href="#locaux" className="text-white font-cabin hover:text-white text-sm">Les Locaux SOPRODI</a>
//             </li>
//             <li>
//               <a href="#contact" className="text-white font-cabin hover:text-white text-sm">Contact</a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <ul className="space-y-3 sm:space-y-5 pt-4 sm:pt-12">
//             <li>
//               <a href="#" className="text-white font-cabin hover:text-white text-sm">COGEB</a>
//             </li>
//             <li>
//               <a href="#" className="text-white font-cabin hover:text-white text-sm">AL-BARKA</a>
//             </li>
//             <li>
//               <a href="#" className="text-white font-cabin hover:text-white text-sm">SOPRODI</a>
//             </li>
//             <li>
//               <a href="#" className="text-white font-cabin hover:text-white text-sm">COGEB INTERNATIONAL</a>
//             </li>
//           </ul>
//         </div>

//         <div className='pt-4 sm:pt-10'>
//           <h2 className="text-xl sm:text-2xl mb-4 text-white">CONTACT</h2>
//           <ul className="space-y-2 sm:space-y-4">
//             <li>
//               <a href="#" className="text-white font-cabin hover:text-white text-lg">cogebimmobiliere@gmail.com</a>
//             </li>
//             <li>
//               <a href="#" className="text-white font-cabin hover:text-white text-lg">+216 73 323 435</a>
//             </li>
//             <li>
//               <a href="#" className="text-white font-cabin hover:text-white text-lg">Avenue de l'environnement, Sousse, Tunisia, 4000</a>
//             </li>
//           </ul>
//         </div>
//       </div>
      
//     </footer>
//   );
// }

// export default Footer;

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
import logo from '../img/Logo.png';

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
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={logo} alt="Logo" className="w-1/3 h-auto mb-6" /> 
          <p className="text-white text-sm lg:text-base">
            SOPRODI, 121 Avenue Hédi Nouira, Sousse, Tunisie
          </p>
          <span className="flex items-center gap-x-2 text-white mt-3">
            <FaPhone />
            <p>+216 73 323 435</p>
          </span>
          <span className="flex items-center gap-x-2 text-white mt-2">
            <FaRegEnvelope />
            <p>cogebimmobiliere@gmail.com</p>
          </span>
        </div>

        <div className="lg:w-1/3 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-semibold text-white uppercase mb-2">Informations</p>
          <ul className="text-white space-y-2">
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

        <div className="lg:w-1/3 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-semibold text-white uppercase mb-2">Liens Utiles</p>
          <ul className="text-white space-y-2">
            <li className="cursor-pointer" onClick={() => handleOpenModal('Devis')}>Devis</li>
            <li className="cursor-pointer" onClick={() => handleOpenModal('Confidentialite')}>Confidentialité</li>
            <li className="cursor-pointer" onClick={() => handleOpenModal('Support')}>Support</li>
          </ul>
        </div>

        <div className="mt-4 lg:w-1/3 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-semibold text-white uppercase mb-2">Suivez-Nous</p>
          <div className="flex space-x-4 text-white text-2xl mt-2">
            <FaLinkedinIn className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>

      <section className="bg-[#2c3e50] text-white text-sm">
  <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
    <p className="text-center sm:text-left">© 2024 SOPRODI - Tous droits réservés</p>
    <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
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
