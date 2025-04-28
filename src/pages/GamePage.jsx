import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { id } = useParams();  // ✅ Get game ID from URL
  const [game, setGame] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const API_KEY = "1dd784997dbc46f187ae86cb577ba744";

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch game details");
        const data = await res.json();
        setGame(data);
      } catch (error) {
        setError("Error fetching game details.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchGameVideo = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch game video");
        const data = await res.json();
        if (data.results.length > 0) {
          setVideo(data.results[0].data.max);
        }
      } catch (error) {
        setError("Error fetching game video.");
        console.error(error);
      }
    };

    fetchGameDetails();
    fetchGameVideo();
  }, [id]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{game.name}</h1>
      <div className="flex flex-col items-center">
        {/* Background Image */}
        <img 
          src={game.background_image || '/path/to/fallback-image.jpg'} // Fallback image
          alt={game.name}
          className="w-full md:w-3/4 lg:w-1/2 h-96 object-cover rounded-lg"
        />

        {/* Game Video */}
        {video ? (
          <video controls className="w-full md:w-3/4 lg:w-1/2 mt-6">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <p className="mt-6 text-gray-400">No video available for this game.</p>
        )}

        {/* Game Description */}
        <p className="text-gray-400 text-lg mt-6 px-6 md:px-32">{game.description_raw}</p>

        {/* Link to Website */}
        <a
          href={game.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-yellow-500 px-6 py-2 text-black font-bold rounded hover:bg-yellow-400 transition"
        >
          Download / Learn More
        </a>
      </div>
    </div>
  );
};

export default GamePage;
