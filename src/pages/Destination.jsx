import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import antelope1 from "../assets/antelope1.jpg"
import birdie from "../assets/birdie.jpg"
import lions from "../assets/lions.jpg"
import leopard from "../assets/leopard.jpg"
import elephants2 from "../assets/elephants2.jpg"
import ghazal2 from "../assets/ghazal2.jpg"
import ghazal from "../assets/ghazal.jpg"
import flamingoes from "../assets/flamingoes.jpg"
import tourists from  "../assets/tourists.jpg"
import diani from  "../assets/diani.jpg"
import maasai from  "../assets/maasai.jpg"
import zebras2 from  "../assets/zebras2.jpg"
import boatracing from  "../assets/boatracing.jpg"
import baboon1 from  "../assets/baboon1.jpg"



export default function Kenya() {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  // ✅ Carousel slides
  const slides = [
    antelope1,
    antelope1,
    birdie,  leopard,
    elephants2,
    ghazal,
    ghazal2,
    lions,
  ];

  // ✅ Cards data
  const cards = [
    {
      title: "Nairobi City Day Trip",
      description:
        "From bustling markets to wildlife adventures, explore the only city with a national park, where urban energy meets natural beauty.",
      image: zebras2,
      link: "/destinations/nairobi",
    },
    {
      title: "Maasai Mara National Reserve",
      description:
        "Witness the awe-inspiring Great Migration, a breathtaking spectacle of nature’s drama amidst stunning landscapes and iconic wildlife.",
      image: maasai,
      link: "/destinations/mara",
    },
    {
      title: "Lake Nakuru National Park",
      description:
        "Marvel at the beauty of Lake Nakuru, home to flamingos, rhinos, and diverse wildlife in a stunning, serene setting.",
      image: flamingoes,
      link: "/destinations/nakuru",
    },
    {
      title: "Tsavo National Parks",
      description:
        "From the Yatta Plateau to Mzima Springs, explore Kenya’s largest park where red-dusted elephants roam freely.",
      image: ghazal2,
      link: "/destinations/tsavo",
    },
    {
      title: "Mount Kenya",
      description:
        "Ascend Africa’s second-highest peak with alpine landscapes, glacial lakes, and unique flora like giant lobelias.",
      image: tourists,
      link: "/destinations/mount-kenya",
    },
    {
      title: "Diani Beach",
      description:
        "Sink your toes into white sands, snorkel vibrant reefs, or enjoy thrilling water sports on Kenya’s famous coast.",
      image: diani,
      link: "/destinations/diani",
    },
    {
      title: "Aberdare National Park",
      description:
        "A haven for nature lovers with game drives, hiking trails, and tree-top lodges overlooking wildlife at watering holes.",
      image: baboon1,
      link: "/destinations/aberdare",
    },
    {
      title: "Lake Naivasha",
      description:
        "Enjoy peaceful boat rides among hippos and birds, or relax with views of the Great Rift Valley at Lake Naivasha.",
      image: boatracing,
      link: "/destinations/naivasha",
    },
  ];

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-orange-200 min-h-screen flex flex-col">
      {/* ✅ Carousel */}
      <div className="relative w-full h-[80vh] overflow-hidden bg-orange-400 mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Carousel text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-xl md:text-5xl font-bold">KENYA</p>
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 z-30 transform -translate-y-1/2 flex items-center justify-center px-4 py-2 bg-transparent rounded-full hover:bg-gray-800/90"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 z-30 transform -translate-y-1/2 flex items-center justify-center px-4 py-2 bg-transparent rounded-full hover:bg-gray-800/90"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>

      {/* ✅ Service Description */}
      <div className="text-xl text-gray-800 flex justify-center bg-orange-200 mt-10 mb-10 w-full p-6 md:p-10">
        <h1 className="max-w-4xl text-center leading-relaxed">
          From the savannas of the Maasai Mara to the sparkling waters of the
          Indian Ocean, Kenya offers an unforgettable journey of discovery.
        </h1>
      </div>

      {/* ✅ Cards */}
      <div className="flex justify-center items-center w-full mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow h-[450px] hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Link to={card.link}>
                <img
                  className="rounded-t-lg w-full h-[280px] object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <div className="p-4">
                  <h5 className="mb-2 text-md font-bold text-gray-900">
                    {card.title}
                  </h5>
                  <p className="text-sm text-gray-700">{card.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
