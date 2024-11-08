import React, { useEffect } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next"; // Import de i18next

Modal.setAppElement("#root");

export default function ModalComponent({ isOpen, onClose, content }) {
  const { t } = useTranslation(); // Utilisation de useTranslation pour les traductions

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("modal-open");
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
          zIndex: 9999, 
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '10px',
          width: '90%',  
          maxWidth: '600px', 
          padding: '20px',
          textAlign: 'left',
          zIndex: 10000, 
          overflow: 'auto',
          maxHeight: '80vh',
          paddingBottom: '20px',
        },
      }}
    >
      <div className="relative">
        {/* Close Button, moved to top-right */}
        <button
          onClick={onClose}
          className="fixed top-2 right-2 text-[#0f04b4] font-bold text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-4">
          {t("modal.aboutUs")} {/* Traduction du titre */}
        </h2>
        <div className="text-sm">
          {content.split('\n').map((text, index) => (
            <p key={index} className="mb-2">
              {text}
            </p>
          ))}
          <ul className="list-disc ml-5 text-blue-500 mt-4">
            <li>{t("modal.company1")}</li>
            <li>{t("modal.company2")}</li>
            <li>{t("modal.company3")}</li>
            <li>{t("modal.company4")}</li>
            <li>{t("modal.company5")}</li>
            <li>{t("modal.company6")}</li>
            <li>{t("modal.company7")}</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
