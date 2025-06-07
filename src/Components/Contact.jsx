import React from 'react';
import './Contact.css'; // still needed for blob animation & glitch
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_qcwhxes', 'template_rs248sf', e.target, 'QN9LCztGZQ9ChkRwP')
    .then((result) => {
      console.log(result.text);
      alert('Message sent!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });

  e.target.reset();
};
  return (

    <div className="flex flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto my-12 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-[#111]">
      {/* Form Section */}
      <div className="flex-1 p-10 flex flex-col justify-center bg-[#111]">
        <form   name="contact" className="w-full "  onSubmit={sendEmail}  >
          <input
            type="text"
            placeholder="Your Name" name="user_name"
            className="w-full bg-transparent border-b border-white text-white mb-5 py-2 px-1 outline-none placeholder-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email" name="user_email"
            className="w-full bg-transparent border-b border-white text-white mb-5 py-2 px-1 outline-none placeholder-white"
            required
          />
          <textarea placeholder="Share your thoughts" name="message"
            className="w-full bg-transparent border-b border-white text-white mb-5 py-2 px-1 outline-none placeholder-white h-24 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="relative bg-white text-black font-bold py-3 px-5 cursor-pointer transition-all duration-300 before:absolute before:inset-0 before:border-t-2 before:border-l-2 before:border-red-500 before:border-l-yellow-500 after:absolute after:inset-0 after:border-b-2 after:border-r-2 after:border-blue-500 after:border-r-cyan-500 z-0"
          >
            <span className="relative z-10">Contact Me</span>
          </button>
        </form>
      </div>

      {/* Text Section */}
      <div className="flex-1 p-10 relative flex flex-col justify-center bg-[#111] text-white">
        <div className="blob-bg"></div>
        <h1 className="glitch text-4xl md:text-5xl font-bold mb-5" data-text="Contact — Us">
          Contact — Us
        </h1>
         <p className="text-sm max-w-md leading-relaxed text-gray-300 z-10">
          It is very important for us to keep in touch with you, so we are always ready
          to answer any question that interests you. Shoot!
        </p>
      </div>
    </div>
  );
};

export default Contact;

