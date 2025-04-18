import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center flex flex-col items-center justify-center text-center" style={{ backgroundImage: "url('images/contact-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-5xl font-extrabold text-yellow-400">Contact Us</h1>
        <p className="relative text-lg text-gray-300 mt-3 max-w-2xl">We'd love to hear from you! Whether you have a question, feedback, or just want to chat about gaming, reach out to us.</p>
      </div>

      {/* Contact Details */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-center">
        {[ 
          { title: "Facebook", detail: "fb.com/gamersnation", icon: <FaFacebook /> },
          { title: "Twitter", detail: "twitter.com/gamersnation", icon: <FaTwitter /> },
          { title: "Instagram", detail: "instagram.com/gamersnation", icon: <FaInstagram /> },
          { title: "Call Us", detail: "+1 234 567 890", icon: "📞" },
          { title: "Email Us", detail: "support@gamersnation.com", icon: "📧" },
          { title: "Visit Us", detail: "123 Gaming Street, NY, USA", icon: "📍" },
        ].map((info, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-4xl text-yellow-400">{info.icon}</span>
            <h3 className="text-xl font-bold mt-3">{info.title}</h3>
            <p className="text-gray-400 mt-1">{info.detail}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-12 w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">💬 Drop Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
          <button type="submit" className="w-full p-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
