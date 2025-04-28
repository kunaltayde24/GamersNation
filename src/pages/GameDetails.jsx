import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameDetails = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = "1dd784997dbc46f187ae86cb577ba744";

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=9`
        );
        const data = await response.json();
        setGames((prevGames) => [...prevGames, ...data.results]);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [page]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.length === 0) {
        setSearchResults([]);
        return;
      }
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error searching games:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSearchResults();
    }, 500); // debounce 500ms

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const displayedGames = searchQuery.length > 0 ? searchResults : games;

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Game Library</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for games..."
          className="w-full md:w-1/2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedGames.map((game) => (
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
      {searchQuery.length === 0 && (
        <button
          onClick={() => setPage(page + 1)}
          className="block mx-auto mt-6 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Explore More
        </button>
      )}
    </div>
  );
};

export default GameDetails;
