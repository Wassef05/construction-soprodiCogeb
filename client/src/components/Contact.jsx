import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // Import i18next hook
import Form from './Form';
import { construction } from "../img";

function Contact() {
  const { t } = useTranslation(); // Hook to access translations
  const [backgroundImage] = useState(construction);

  return (
    <section
      id="contact"
      name="contact"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex flex-col bg-cover bg-center bg-no-repeat min-h-screen w-full md:grid md:grid-cols-5 pt-10 gap-8"
    >
      {/* Left Side: Contact Information */}
      <div className="md:col-span-2 p-6 sm:p-8 md:pl-20 flex flex-col items-start">
        <div
          className="text-black max-w-prose mb-8"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "1rem",
            textAlign: "justify",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0f04b4]">
            {t("contact.title")} {/* Title from translation */}
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Email Card */}
          <div className="bg-white/75 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[180px] w-full text-center overflow-hidden">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#0f04b4] text-3xl sm:text-4xl mb-2" />
            <a
              href="mailto:cogebimmobiliere@gmail.com"
              className="text-[#0f04b4] font-cabin text-base md:text-lg lg:text-xl font-bold break-words"
              style={{ wordWrap: "break-word", maxWidth: "100%" }}
            >
              {t("contact.email")} {/* Email from translation */}
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white/75 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[150px] w-full text-center overflow-hidden">
            <FontAwesomeIcon icon={faPhone} className="text-[#0f04b4] text-3xl sm:text-4xl mb-2" />
            <a
              href="tel:+21673323435"
              className="text-[#0f04b4] font-cabin text-base md:text-lg lg:text-xl font-bold break-words"
              style={{ wordWrap: "break-word", maxWidth: "100%" }}
            >
              {t("contact.phone")} {/* Phone number from translation */}
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white/75 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[150px] w-full col-span-1 sm:col-span-2 text-center overflow-hidden">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#0f04b4] text-3xl sm:text-4xl mb-2" />
            <a
              href="https://www.google.com/maps?q=Avenue+de+l'environnement,+Sousse,+Tunisia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f04b4] font-cabin text-base md:text-lg lg:text-xl font-bold break-words"
              style={{ wordWrap: "break-word", maxWidth: "100%" }}
            >
              {t("contact.location")} {/* Location from translation */}
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:col-span-3 p-6 sm:p-8 md:p-10">
        <div className="rounded-lg shadow-lg p-4 sm:p-6 md:p-10">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
