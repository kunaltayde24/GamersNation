import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameDetails = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=1dd784997dbc46f187ae86cb577ba744&page=${page}&page_size=9`
        );
        const data = await response.json();
        setGames((prevGames) => [...prevGames, ...data.results]);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [page]);

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Game Library</h1>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <Link 
            to={`/games/${game.id}`} 
            key={game.id} 
            className="relative group bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-yellow-300">{game.name}</h2>
            <p className="text-gray-400 text-sm mt-2">
              {game.description_raw ? game.description_raw.slice(0, 100) + "..." : ""}
            </p>
          </Link>
        ))}
      </div>

      {/* Explore More Button */}
      <button 
        onClick={() => setPage(page + 1)} 
        className="block mx-auto mt-6 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Explore More
      </button>
    </div>
  );
};

export default GameDetails;
