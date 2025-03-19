import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { id } = useParams();  // ✅ Get game ID from URL
  const [game, setGame] = useState(null);
  const [video, setVideo] = useState(null);
  const API_KEY = "1dd784997dbc46f187ae86cb577ba744";

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const data = await res.json();
        setGame(data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    const fetchGameVideo = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${API_KEY}`);
        const data = await res.json();
        if (data.results.length > 0) {
          setVideo(data.results[0].data.max);
        }
      } catch (error) {
        console.error("Error fetching game video:", error);
      }
    };

    fetchGameDetails();
    fetchGameVideo();
  }, [id]);

  if (!game) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{game.name}</h1>
      <div className="flex flex-col items-center">
        <img src={game.background_image} alt={game.name} className="w-full md:w-3/4 lg:w-1/2 h-96 object-cover rounded-lg" />
        
        {video && (
          <video controls className="w-full md:w-3/4 lg:w-1/2 mt-6">
            <source src={video} type="video/mp4" />
          </video>
        )}

        <p className="text-gray-400 text-lg mt-6 px-6 md:px-32">{game.description_raw}</p>

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
