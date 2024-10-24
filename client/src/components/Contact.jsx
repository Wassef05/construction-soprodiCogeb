import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Form from './Form';
import {construction} from "../img";

function Contact() {
  const [backgroundImage, setBackgroundImage] = useState(construction);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(construction);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            CONTACT
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Email Card */}
          <div className="bg-white/75 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[180px] w-full text-center overflow-hidden">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#0f04b4] text-3xl mb-2" />
            <a
              href="mailto:cogebimmobiliere@gmail.com"
              className="text-[#0f04b4] font-cabin text-base md:text-lg lg:text-xl font-bold break-words"
              style={{ wordWrap: "break-word", maxWidth: "100%" }}
            >
              groupe-cogeb@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white/75 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[150px] w-full text-center overflow-hidden">
            <FontAwesomeIcon icon={faPhone} className="text-[#0f04b4] text-3xl mb-2" />
            <a
              href="tel:+21673323435"
              className="text-[#0f04b4] font-cabin text-base md:text-lg lg:text-xl font-bold break-words"
              style={{ wordWrap: "break-word", maxWidth: "100%" }}
            >
              +216 73 323 435
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white/75 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[150px] w-full col-span-1 sm:col-span-2 text-center overflow-hidden">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#0f04b4] text-3xl mb-2" />
            <a
              href="https://www.google.com/maps?q=Avenue+de+l'environnement,+Sousse,+Tunisia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f04b4] font-cabin text-base md:text-lg lg:text-xl font-bold break-words"
              style={{ wordWrap: "break-word", maxWidth: "100%" }}
            >
              Avenue de l'environnement, Sousse, Tunisia, 4000
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








// import React, { useEffect } from "react";
// import "./Contact.css";

// // Import icons
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { TbDeviceLandlinePhone } from "react-icons/tb";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { MdOutlineEmail } from "react-icons/md";

// // Import Form component
// import Form from './Form';

// import Aos from "aos";
// import "aos/dist/aos.css";

// const Contact = () => {
//   useEffect(() => {
//     Aos.init({ duration: 3000 });
//   }, []);

//   const handlePhoneClick = () => {
//     window.location.href = 'tel:+21673323435';
//   };

//   const handleEmailClick = () => {
//     window.location.href = 'mailto:groupe-cogeb@gmail.com';
//   };

//   return (
//     <div className="Contact container section" id="contact">
//       <div className="secContainer">
//                 {/* Right Section: Form */}
//                 <div className="card">
//           <Form />
//         </div>
//         {/* Left Section */}
//         <div className="textDiv">
//           <div className="secHeader" data-aos="fade-down">
//             <h2 className="title-primary">Contactez-Nous</h2>
//           </div>

//           <div className="secContent" data-aos="fade-right">
//             {/* Card 1 */}
//             <div className="contact-card" data-aos="fade-up">
//               <div className="info flex">
//                 <TbDeviceLandlinePhone className="icon" />
//                 <span>
//                   <p>+216 73 323 435</p>
//                 </span>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="contact-card" data-aos="fade-up">
//               <div className="info flex">
//                 <HiOutlineLocationMarker className="icon" />
//                 <span>
//                   <p>SOPRODI, 4000, Avenue de l'environnement, Sousse, Tunisia</p>
//                 </span>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="contact-card" data-aos="fade-up" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
//               <div className="info flex">
//                 <MdOutlineEmail className="icon" />
//                 <span>
//                   <p>groupe-cogeb@gmail.com</p>
//                 </span>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="contact-card" data-aos="fade-up" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
//               <div className="info flex">
//                 <BiSolidPhoneCall className="icon" />
//                 <span>
//                   <p>+216 98 751 724</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Contact;
