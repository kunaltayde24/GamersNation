import React from "react";

const newsData = [
  {
    title: "Ubisoft Drops New Star Wars Trailer",
    date: "April 18, 2025",
    description: "Check out the new Star Wars Outlaws gameplay reveal. It's coming May 15!",
    image: "/images/star2.avif",
  },
  {
    title: "Skull and Bones Year 2 Announced",
    date: "April 15, 2025",
    description: "All the features arriving in Year 2 of Skull and Bones, including new PvP missions!",
    image: "/images/hq720.jpg",
  },
  {
    title: "Prince of Persia Now on Mobile",
    date: "April 14, 2025",
    description: "The Lost Crown mobile version is now live for iOS and Android users.",
    image: "/images/download (5).jpg",
  },
  {
    title: "Colorblind Tool “Chroma” Goes Public",
    date: "April 14, 2025",
    description: "Ubisoft introduces Chroma to help gamers with color vision deficiency.",
    image: "/images/ubisoft-chroma-featured.png",
  },
  {
    title: "Far Cry 7 Rumored for Early Reveal",
    date: "April 10, 2025",
    description: "Rumors suggest Far Cry 7 might be announced during the upcoming Ubisoft Forward event.",
    image: "/images/download (6).jpg",
  },
  {
    title: "Rainbow Six Siege New Operator Leaked",
    date: "April 9, 2025",
    description: "New stealth-based operator details have surfaced — check out what’s coming!",
    image: "/images/images (1).jpg",
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-green-400 text-center">All News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition transform"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-400">{news.date}</p>
              <h2 className="text-xl font-semibold text-green-400 mt-2">{news.title}</h2>
              <p className="mt-2 text-gray-300 text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
