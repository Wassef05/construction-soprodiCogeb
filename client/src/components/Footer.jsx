import React, { useState } from 'react';
import { FaPhone, FaInstagram, FaFacebookF, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Logo } from '../img';

const Footer = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (type) => {
    setModalData(modalContentMapping[type]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const modalContentMapping = {
    Devis: {
      title: t('modals.Devis.title'),
      description: t('modals.Devis.description'),
    },
    Confidentialite: {
      title: t('modals.Confidentialite.title'),
      description: t('modals.Confidentialite.description'),
    },
    Support: {
      title: t('modals.Support.title'),
      description: t('modals.Support.description'),
    },
  };

  return (
    <footer className="bg-[#3C496E] pt-8">
      <div className="container mx-auto lg:flex items-start justify-between pb-8 px-4">
        {/* Logo et informations de contact */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={Logo} alt="Logo" className="w-1/3 h-auto mb-6" />
          <p className="text-white text-sm lg:text-base">
            {t('footer.address')}
          </p>
          <span className="flex items-center gap-x-2 text-white mt-3">
            <FaPhone />
            <p>{t('footer.phone')}</p>
          </span>
          <span className="flex items-center gap-x-2 text-white mt-2">
            <FaRegEnvelope />
            <p>{t('footer.email')}</p>
          </span>
        </div>

        {/* Section Informations */}
        <div className="lg:w-1/3 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-bold text-white uppercase mb-2">{t('footer.info')}</p>
          <ul className="text-white space-y-2 text-center lg:text-left">
            <li>
              <a href="#apropos" className="hover:underline">{t('footer.about')}</a>
            </li>
            <li>
              <a href="/" className="hover:underline">{t('footer.companyGoal')}</a>
            </li>
            <li>
              <a href="#locaux" className="hover:underline">{t('footer.soprodiOffices')}</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">{t('footer.contact')}</a>
            </li>
          </ul>
        </div>

        {/* Section Liens Utiles */}
        <div className="lg:w-1/3 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-bold text-white uppercase mb-2">{t('footer.usefulLinks')}</p>
          <ul className="text-white space-y-2 text-center lg:text-left">
            <li className="cursor-pointer" onClick={() => handleOpenModal('Devis')}>{t('footer.quote')}</li>
            <li className="cursor-pointer" onClick={() => handleOpenModal('Confidentialite')}>{t('footer.privacy')}</li>
            <li className="cursor-pointer" onClick={() => handleOpenModal('Support')}>{t('footer.support')}</li>
          </ul>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="mt-4 lg:w-1/3 lg:mt-0 flex flex-col items-center lg:items-start">
          <p className="font-bold text-white uppercase mb-2">{t('footer.followUs')}</p>
          <div className="flex space-x-4 text-white text-2xl mt-2">
            <FaLinkedinIn className="cursor-pointer" title={t('footer.socialLinkedin')} />
            <FaFacebookF className="cursor-pointer" title={t('footer.socialFacebook')} />
            <FaInstagram className="cursor-pointer" title={t('footer.socialInstagram')} />
          </div>
        </div>
      </div>

      {/* Section bas du footer */}
      <section className="bg-[#2c3e50] text-white text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4 text-center sm:text-left">
          <p>{t('footer.rightsReserved')}</p>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
            <li className="cursor-pointer">{t('footer.termsConditions')}</li>
            <li className="cursor-pointer">{t('footer.privacyPolicy')}</li>
            <li className="cursor-pointer">{t('footer.company')}</li>
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
