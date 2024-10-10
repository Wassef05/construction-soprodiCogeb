import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Form() {
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
    <div>
      <div
        className="gap-16 pt-0 sm:mt-20 items-center relative overflow-hidden p-6 sm:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg max-w-6xl mx-auto bg-gray-300/45 font-[sans-serif]"
      >
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-2 text-sm block font-serif">NOM </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2.5 text-base bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="mb-2 text-sm block font-serif">EMAIL</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2.5 text-base bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-2 text-sm block font-serif">TELEPHONE</label>
                <input
                  type='text'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-2.5 text-base bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="mb-2 text-sm block font-serif">PROJET</label>
                <input
                  type='text'
                  name='project'
                  value={formData.project}
                  onChange={handleChange}
                  className="px-4 py-2.5 text-base bg-white/70 border border-gray-400 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#0B4F48] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <label className="mb-2 text-sm block font-serif">MESSAGE</label>
            <textarea
              rows={6}
              name='message'
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-2.5 bg-white/70 text-gray-800 text-sm border border-gray-400 rounded-lg w-full focus:ring-2 focus:ring-[#0B4F48] focus:border-transparent transition-all duration-300 outline-none"
            ></textarea>

            <div className='flex justify-center items-center'>
              <button
                type="submit"
                className="mt-6 flex items-center font-serif text-lg sm:text-2xl justify-center w-full sm:w-2/3 px-4 py-3 bg-[#3C496E] text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                ENVOYER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}