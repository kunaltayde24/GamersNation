import { useState } from "react";

export default function AboutPage() {
  const [reviews] = useState([
    { name: "Alex", review: "Amazing gaming experience! 🎮🔥" },
    { name: "Jamie", review: "The best platform for gamers worldwide!" },
    { name: "Chris", review: "Next-level graphics and smooth gameplay!" },
  ]);

  const [faqs] = useState([
    { question: "What games do you offer?", answer: "We offer a variety of action, strategy, and multiplayer games to suit all types of gamers." },
    { question: "Is there a subscription fee?", answer: "No, our platform is free to play with optional premium features." },
    { question: "How can I participate in tournaments?", answer: "You can join tournaments by signing up on our website under the 'Events' section." },
  ]);

  return (
    <div className="bg-gray-900 text-white">
      {/* About Us Section with Local Background Image */}
      <div
        className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('images/bgimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl font-extrabold text-yellow-400">ABOUT US</h1>
          <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
            At GamersNation, we push the boundaries of gaming by delivering immersive experiences, cutting-edge graphics, and a passionate gaming community.
          </p>
        </div>
      </div>

      {/* Our News */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold text-center mb-6">🚀 Our News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">New Game Released!</h3>
            <p className="text-gray-400 mt-2">Experience the thrill of 'Warzone X' now available.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Upcoming Tournament</h3>
            <p className="text-gray-400 mt-2">Join the ultimate battle this weekend & win prizes!</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Exclusive Rewards</h3>
            <p className="text-gray-400 mt-2">Earn skins, weapons, and perks with our new season pass.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="p-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">🔥 Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Ultra HD Graphics</h3>
            <p className="text-gray-300">Enjoy stunning visuals with next-gen rendering.</p>
          </div>
          <div className="p-5 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Multiplayer Battles</h3>
            <p className="text-gray-300">Compete with players globally in real-time.</p>
          </div>
          <div className="p-5 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="text-gray-300">We’re here to assist you anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* People Reviews */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold text-center mb-6">⭐ People Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, index) => (
            <div key={index} className="p-5 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{r.name}</h3>
              <p className="text-gray-400 mt-2">"{r.review}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">❓ Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-5 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}