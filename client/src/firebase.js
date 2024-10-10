import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAONxNO8SbmxXfk-7-RhEnct86toV8A6KU",
  authDomain: "soprodi-32897.firebaseapp.com",
  projectId: "soprodi-32897",
  storageBucket: "soprodi-32897.appspot.com",
  messagingSenderId: "565568510568",
  appId: "1:565568510568:web:8079e8ed78a7b2eb0379dd",
  measurementId: "G-GFK5DEX31P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = app;  // Assurez-vous d'exporter l'instance d'application correcte

export const firebaseAnalytics = analytics;  // Exportez l'instance d'Analytics si nécessaire