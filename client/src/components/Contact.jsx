import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Map from './Map';
import Form from './Form';
import cover from "../img/contactcover.png";

function Contact() {
  return (
    <section
      id="contact"
      name="contact"
      style={{ backgroundImage: `url(${cover})` }}
      className="flex flex-col bg-cover bg-center bg-no-repeat min-h-screen w-full md:grid md:grid-cols-5 pt-10 gap-8"
    >
      {/* Left Side: Contact Information & Map */}
      <div className="md:col-span-2 p-6 sm:p-8 md:pl-20 flex flex-col items-start">
        <div
          className="text-black max-w-prose"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "1rem",
            textAlign: "justify",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[#F5B94C] mb-6 md:mb-10">
            CONTACT
          </h1>
        </div>
        <ul className="space-y-4">
          <li className="py-2">
            <a
              href="mailto:cogebimmobiliere@gmail.com"
              className="text-white font-cabin hover:text-white text-lg md:text-xl flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> cogebimmobiliere@gmail.com
            </a>
          </li>
          <li className="py-2">
            <a
              href="tel:+21673323435"
              className="text-white hover:text-white font-cabin text-lg md:text-xl flex items-center"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +216 73 323 435
            </a>
          </li>
          <li className="py-2">
            <a
              href="https://www.google.com/maps?q=Avenue+de+l'environnement,+Sousse,+Tunisia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white font-cabin text-lg md:text-xl flex items-center"
            >
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Avenue de l'environnement, Sousse,<br />
              Tunisia, 4000
            </a>
          </li>
        </ul>

        {/* Map with adjusted border radius and centering on mobile */}
        <div className="mt-6 md:mt-10 w-full">
          <Map className="w-full rounded-lg shadow-lg" />
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
