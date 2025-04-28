import React from "react";
import { Link } from "react-router-dom"; // Use Link to navigate to individual game pages

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/123.jpeg')" }} // ✅ Corrected path
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="space-between z-10 max-w-3xl px-4">
          <h1 className="text-5xl font-extrabold mb-6 text-white animate__animated animate__fadeIn">Watch the Launch CGI Trailer</h1>
          <p className="text-gray-300 text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Discover the Launch CGI Trailer of AC Shadows now!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.example.com" // Replace with your website URL
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition"
              aria-label="Visit website"
            >
              Visit Website
            </a>
            <a
              href="https://www.example.com/preorder" // Replace with your pre-order URL
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition"
              aria-label="Pre-order now"
            >
              Pre-Order Now
            </a>
          </div>
        </div>
      </div>

      {/* Trending Games Section */}
      <section className="w-full max-w-6xl mt-12">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 animate__animated animate__fadeIn">Trending Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Call of Duty */}
          <Link
            to="/games/modern-warfare" // Link to the respective game page
            className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-0.5s"
          >
            <img
              src="images/download.jpg"
              alt="Call of Duty"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">Call of Duty: Modern Warfare II/III/Warzone/Black Ops 6</h3>
            <p className="text-gray-400 text-sm">The ultimate first-person shooter experience.</p>
          </Link>

          {/* Valorant */}
          <Link
            to="/games/valorant" // Link to Valorant game page
            className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s"
          >
            <img
              src="images/download (1).jpg"
              alt="Valorant"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">Valorant</h3>
            <p className="text-gray-400 text-sm">Competitive tactical shooting at its finest.</p>
          </Link>

          {/* Dota 2 */}
          <Link
            to="/games/dota-2" // Link to Dota 2 game page
            className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1.5s"
          >
            <img
              src="images/download (3).jpg"
              alt="Dota 2"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">Dota 2</h3>
            <p className="text-gray-400 text-sm">A strategy game with intense team-based gameplay.</p>
          </Link>
        </div>
      </section>

      <section className="mt-16 cursor-pointer">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-10">Latest News</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main big news card */}
          <div className="lg:col-span-2 bg-gray-950 rounded-xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
            <img
              src="/images/star2.avif"
              alt="Star Wars Outlaws"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400">April 18, 2025</p>
              <h3 className="text-2xl font-semibold text-green-400 mt-2 ">
                Watch The New Trailer For Star Wars Outlaws: A Pirate’s Fortune, Releasing May 15;
                Base Game Demo Available Now
              </h3>
            </div>
          </div>

          {/* Smaller vertical news cards */}
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-4 bg-gray-900 p-4 rounded-xl shadow hover:scale-[1.02] transition">
              <img
                src="/images/skull.jpg"
                alt="Skull and Bones"
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <p className="text-xs text-gray-400">April 15, 2025</p>
                <h4 className="text-sm font-bold text-green-400">
                  Skull and Bones Year 2: Everything You Need to Know
                </h4>
              </div>
            </div>

            <div className="flex space-x-4 bg-gray-900 p-4 rounded-xl shadow hover:scale-[1.02] transition">
              <img
                src="/images/persia.jpg"
                alt="Prince of Persia"
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <p className="text-xs text-gray-400">April 14, 2025</p>
                <h4 className="text-sm font-bold text-green-400">
                  Prince of Persia: The Lost Crown Now on Mobile
                </h4>
              </div>
            </div>

            <div className="flex space-x-4 bg-gray-900 p-4 rounded-xl shadow hover:scale-[1.02] transition">
              <img
                src="/images/chroma.jpg"
                alt="Chroma Tool"
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <p className="text-xs text-gray-400">April 14, 2025</p>
                <h4 className="text-sm font-bold text-green-400">
                  Colorblind Tool Chroma Now Public
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full shadow-md transition">
            View All News
          </button>
        </div>
      </section>

      {/* Store Section */}
         {/* Store Section */}
         <section className="bg-gradient py-12 rounded-2xl shadow-xl ">
        <h2 className="text-3xl font-bold text-center mb-10 ">
          <span className="text-white">GamersNation</span> <span className="text-blue-500">STORE</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s cursor-pointer">
            <img src="/images/ass.avif" alt="Assassin's Creed Shadows" className="w-full h-70 object-full" />
          
          </div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s cursor-pointer">
            <img src="/images/store2.png" alt="Ubisoft Units" className="w-full h-70 object-cover" />
            <p className="text-white font-semibold py-4">GET 20% OFF WITH YOUR UBISOFT UNITS</p>
          </div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center  hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s cursor-pointer">
            <img src="/images/store3.png" alt="Anno" className="w-full h-70 object-cover" />
            <p className="text-white font-semibold py-4 underline">ADD TO WISHLIST</p>
          
        </div>
        </div>
       
      </section>

      {/* CTA Button */}
      <div className="mt-12">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
