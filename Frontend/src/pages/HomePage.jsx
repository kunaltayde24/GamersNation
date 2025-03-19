import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/123.jpeg')" }} // ✅ Corrected path
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="space-between z-10 max-w-3xl ">
          <h1 className="text-5xl font-extrabold mb-4 text-white">Watch the Launch CGI Trailer
          </h1>
          <p className="text-gray-300 text-lg px-4">
          Discover the Launch CGI Trailer of AC Shadows now!
</p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition mr-4">
            Visit Website
          </button>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition  ">
            Pre-Order Now
          </button>
        </div>
      </div>
      
      {/* Game Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
        {[1, 2, 3, 4].map((game) => (
          <div key={game} className="bg-gray-800 rounded-xl shadow-xl p-6 transition-transform transform hover:scale-105">
            <img src={`/images/game${game}.jpg`} alt={`Game ${game}`} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-yellow-300">Game Title {game}</h2>
            <p className="text-gray-400 text-sm">Immersive experience with top-tier gameplay.</p>
          </div>
        ))}
      </div>
      
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
