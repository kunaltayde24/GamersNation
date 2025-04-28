import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/bgimage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-20">
          <h1 className="text-4xl font-bold">About GamersNation</h1>
          <p className="mt-4 text-lg">Your one-stop destination for gaming news, reviews, and trends!</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-300">
            At GamersNation, we believe gaming is more than just entertainment—it's a community. We provide the latest news, reviews, and gaming trends to keep you connected and informed about everything in the gaming world.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <img src="/images/team1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-xl">Kunal Tayde</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <img src="/images/team2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-xl">Akanksha Jedhe</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <img src="/images/team3.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-xl">Alex</h3>
              <p className="text-gray-400">Content Creator</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default AboutPage;
