import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // For icons

const AboutPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "🎮 How can I download a game?",
      answer: "Visit the game's page and click on the Download button. Ensure your system meets the requirements.",
    },
    {
      question: "🛠️ Can I submit my own game?",
      answer: "Yes! Developers can upload their games by signing in and accessing the Developer Dashboard.",
    },
    {
      question: "💰 Are the games free to play?",
      answer: "We offer both free and paid games. Check the game page to see its pricing details.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen p-8 flex flex-col items-center">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-green-400 mb-6 tracking-widest drop-shadow-lg">
        GamersNation 🎮
      </h1>

      <p className="text-lg text-gray-300 text-center max-w-2xl mb-10">
        Welcome to <span className="text-green-400 font-semibold">GamersNation</span>, your ultimate hub for discovering, downloading, and enjoying top-rated games! 🚀 Whether you're an <span className="text-green-400">FPS master</span>, <span className="text-green-400">RPG adventurer</span>, or <span className="text-green-400">casual gamer</span>, we've got something for you!
      </p>

      {/* Call-to-Action Button */}
      <a href="/games" className="mb-10 bg-green-500 text-black px-6 py-3 rounded-full text-lg font-bold shadow-md hover:bg-green-400 transition duration-300">
        Explore Games 🚀
      </a>

      {/* FAQ Section */}
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-green-500 mb-5">🔥 Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-xl shadow-lg cursor-pointer hover:bg-gray-800 transition duration-300"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {openFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              {openFAQ === index && (
                <p className="text-gray-400 mt-3 transition-opacity duration-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-gray-400">
        © {new Date().getFullYear()} GamersNation. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutPage;
