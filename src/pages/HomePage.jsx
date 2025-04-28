import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">

      {/* Hero Image Section - GTA VI Style */}
<div className="w-full max-w-7xl mt-10 flex flex-col lg:flex-row items-center justify-center bg-black rounded-xl overflow-hidden shadow-2xl">
  
  {/* Left Image */}
  <div className="w-full lg:w-2/3 h-full">
  <Link to="/games/437059">

      <img
        src="/images/creed.jpg" // <-- Replace with your image
        alt="Assassin's Creed Valhalla"
        className="w-full h-full object-cover"
      />
    </Link>
  </div>

  {/* Right Content */}
  <div className="w-full lg:w-1/3 p-8 flex flex-col items-center justify-center text-center space-y-6 bg-black text-white">
    <h2 className="text-2xl font-bold">Assassin's Creed Valhalla</h2>
    <p className="text-lg font-light">Check Out Now!!!!</p>
    <Link 
  to="/games/437059" 
  className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-center"
>
  PLAY NOW
</Link>

    {/* Dots */}
    <div className="flex space-x-2 mt-4">
      <span className="w-3 h-3 bg-white rounded-full"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
    </div>
  </div>

</div>
      

      {/* Trending Games Section */}
      <section className="w-full max-w-6xl mt-12">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 animate__animated animate__fadeIn">
          Trending Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/games/modern-warfare"
            className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-0.5s"
          >
            <img
              src="images/1651043aae33bdb6cf17d9992409d2ec5cc4856eb76228f6.avif"
              alt="Call of Duty"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">
              Call of Duty: Modern Warfare II/III/Warzone/Black Ops 6
            </h3>
            <p className="text-gray-400 text-sm">The ultimate first-person shooter experience.</p>
          </Link>

          <Link
            to="/games/valorant"
            className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s"
          >
            <img
              src="images/val.jpg"
              alt="Valorant"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">Valorant</h3>
            <p className="text-gray-400 text-sm">Competitive tactical shooting at its finest.</p>
          </Link>

          <Link
            to="/games/dota-2"
            className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1.5s"
          >
            <img
              src="images/download (2).jpg"
              alt="Dota 2"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">Dota 2</h3>
            <p className="text-gray-400 text-sm">A strategy game with intense team-based gameplay.</p>
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mt-16 cursor-pointer">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-10">Latest News</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-950 rounded-xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
            <img
              src="/images/star2.avif"
              alt="Star Wars Outlaws"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400">April 18, 2025</p>
              <h3 className="text-2xl font-semibold text-green-400 mt-2">
                Watch The New Trailer For Star Wars Outlaws: A Pirate’s Fortune, Releasing May 15;
                Base Game Demo Available Now
              </h3>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex space-x-4 bg-gray-900 p-4 rounded-xl shadow hover:scale-[1.02] transition">
              <img src="/images/hq720.jpg" alt="Skull and Bones" className="w-24 h-24 object-cover rounded" />
              <div>
                <p className="text-xs text-gray-400">April 15, 2025</p>
                <h4 className="text-sm font-bold text-green-400">
                  Skull and Bones Year 2: Everything You Need to Know
                </h4>
              </div>
            </div>

            <div className="flex space-x-4 bg-gray-900 p-4 rounded-xl shadow hover:scale-[1.02] transition">
              <img src="/images/download (5).jpg" alt="Prince of Persia" className="w-24 h-24 object-cover rounded" />
              <div>
                <p className="text-xs text-gray-400">April 14, 2025</p>
                <h4 className="text-sm font-bold text-green-400">
                  Prince of Persia: The Lost Crown Now on Mobile
                </h4>
              </div>
            </div>

            <div className="flex space-x-4 bg-gray-900 p-4 rounded-xl shadow hover:scale-[1.02] transition">
              <img src="/images/ubisoft-chroma-featured.png" alt="Chroma Tool" className="w-24 h-24 object-cover rounded" />
              <div>
                <p className="text-xs text-gray-400">April 14, 2025</p>
                <h4 className="text-sm font-bold text-green-400">
                  Colorblind Tool Chroma Now Public
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center mt-10">
          <Link to="/news">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full shadow-md transition">
              View All News
            </button>
          </Link>
        </div>
      </section>

      {/* Store Section */}
      <section className="bg-gradient py-12 rounded-2xl shadow-xl mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-white">GamersNation</span> <span className="text-blue-500">STORE</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s cursor-pointer">
            <img src="/images/ass.avif" alt="Assassin's Creed Shadows" className="w-full h-70 object-cover" />
            <p className="text-white font-semibold py-4">BUY NOW!!!!!</p>
          </div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s cursor-pointer">
            <img src="/images/coin.avif" alt="Ubisoft Units" className="w-full h-70 object-cover" />
            <p className="text-white font-semibold py-4">GET 20% OFF WITH YOUR UBISOFT UNITS</p>
          </div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s cursor-pointer">
            <img src="/images/anno.avif" alt="Anno" className="w-full h-70 object-cover" />
            <p className="text-white font-semibold py-4 underline">ADD TO WISHLIST</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
