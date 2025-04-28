// src/components/HomeSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const gameSlides = [
  {
    title: "Call of Duty: Warzone",
    description: "Drop into intense, high-stakes battle royale action across sprawling maps in this iconic shooter.",
    image: "/images/download.jpg",
    button: "Play Now",
  },
  {
    title: "Valorant",
    description: "Tactical 5v5 shooter from Riot Games with unique agents and abilities — precision and teamwork are key.",
    image: "/images/val.avif",
    button: "Join the Battle",
  },
  {
    title: "Dota 2",
    description: "The legendary MOBA where strategy, timing, and teamwork shape every epic 5v5 match.",
    image: "/images/dota2.jpg",
    button: "Watch Tournament",
  },
  {
    title: "Fortnite",
    description: "A dynamic mix of shooting, building, and live events in one of the most popular games ever.",
    image: "/images/1123.avif",
    button: "Explore Now",
  },
  {
    title: "Rainbow Six Siege",
    description: "A tense, tactical shooter focused on destruction, gadgets, and operator strategy.",
    image: "/images/1651043aae33bdb6cf17d9992409d2ec5cc4856eb76228f6.avif",
    button: "Start Tactics",
  },
  {
    title: "Assassin’s Creed Shadows",
    description: "Explore feudal Japan in Ubisoft’s newest open-world Assassin’s Creed adventure.",
    image: "/images/123.avif",
    button: "Play Now!!!!!!",
  },
];

const HomeSlider = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {gameSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative flex items-center justify-center text-white">
              {/* Use img tag for the background */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-2xl text-center z-10">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-green-400 animate__animated animate__fadeInDown">
                  {slide.title}
                </h2>
                <p className="mb-6 text-gray-300 animate__animated animate__fadeInUp">
                  {slide.description}
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-full shadow-lg transition animate__animated animate__fadeInUp">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
