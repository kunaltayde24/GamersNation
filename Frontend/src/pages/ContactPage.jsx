import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your form submission logic, like sending an email or storing data.
    alert('Form submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/bgimage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-20">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 text-white rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 text-white rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 text-white rounded-lg"
                placeholder="Enter your message"
                rows="4"
                required
              />
            </div>

            <button type="submit" className="w-full bg-yellow-500 text-black p-3 rounded-lg text-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Contact Info</h2>
          <p className="text-lg text-gray-300 mb-4">You can reach us at the following:</p>
          <p className="text-lg text-gray-300 mb-4">Email: <a href="mailto:contact@gamersnation.com" className="text-yellow-500">contact@gamersnation.com</a></p>
          <div className="flex justify-center gap-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook-icon.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter-icon.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram-icon.png" alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white text-center py-4">
        <p>&copy; 2025 GamersNation. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
