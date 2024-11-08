// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Configuration de i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
  },
  lng: 'fr', // Langue par défaut
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false, // react déjà sécurisé contre XSS
  },
});

export default i18n;
