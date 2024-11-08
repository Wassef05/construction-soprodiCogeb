import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook

export default function Form() {
  const { t } = useTranslation(); // Access the translation function
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      project: formData.project,
      message: formData.message,
    };

    emailjs.send('service_0f8yimr', 'template_l966uqc', templateParams, 'to5gUXaCWZrbtuiXb')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div
      className="gap-16 pt-0 sm:mt-20 items-center relative overflow-hidden p-6 sm:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg max-w-6xl mx-auto bg-white/80  font-[sans-serif]"
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 text-xl block font-serif text-center font-extrabold text-[#0f04b4] sm:text-left"
              >
                {t("form.name")} {/* Name from translation */}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2.5 text-lg bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-[#0f04b4] transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-xl block font-serif text-center font-bold text-[#0f04b4] sm:text-left"
              >
                {t("form.email")} {/* Email from translation */}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2.5 text-lg bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-[#0f04b4] transition-all duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 text-xl block font-serif text-center font-bold text-[#0f04b4] sm:text-left"
              >
                {t("form.phone")} {/* Phone from translation */}
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-2.5 text-lg bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-[#0f04b4] transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="project"
                className="mb-2 text-xl block font-serif text-center font-bold text-[#0f04b4] sm:text-left"
              >
                {t("form.project")} {/* Project from translation */}
              </label>
              <input
                id="project"
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="px-4 py-2.5 text-lg bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-[#0f04b4] transition-all duration-300"
              />
            </div>
          </div>

          <label
            htmlFor="message"
            className="mb-2 text-xl block font-serif text-center font-bold text-[#0f04b4] sm:text-left"
          >
            {t("form.message")} {/* Message from translation */}
          </label>
          <textarea
            id="message"
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2.5 text-lg bg-white/70 text-gray-800 border border-gray-400 rounded-lg w-full focus:ring-2 focus:ring-[#0B4F48] focus:border-[#0f04b4] transition-all duration-300 outline-none"
          ></textarea>

          <div className='flex justify-center items-center'>
            <button
              type="submit"
              className="mt-6 flex items-center font-serif text-lg sm:text-2xl justify-center w-full sm:w-2/3 px-4 py-3 bg-[#3C496E] text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              {t("form.send")} {/* Send button from translation */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
