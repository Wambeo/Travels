import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tanzania() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "../../public/lions.jpg",
    "../../public/antelope1.jpg",
    "../../public/birdie.jpg",
    "../../public/elephant1.jpg",
    "../../public/elephants2.jpg",
    "../../public/ghazal.jpg",
    "../../public/ghazal2.jpg",
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-orange-200 min-h-screen">
      {/* Carousel */}
      <div className="relative w-full h-[970px] overflow-hidden bg-orange-400">
        {/* Carousel Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Carousel Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-center">
            <p className="text-xl md:text-4xl mt-4 ">TANZANIA</p>
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
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
          type="button"
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

      {/* Service Description */}
      <div className="text-xl text-gray-800 flex justify-center bg-orange-200 mt-10 mb-10 w-full p-10">
        <h1>
        From the Serengeti’s Great Migration to the tranquil beaches of Zanzibar, Tanzania offers a safari experience as vast as it is unforgettable.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">

          {/* Card1*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/destinations/nairobi">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/migrations.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Serengeti great Migration
                </h5>
                <p className="text-sm text-gray-700">
                Follow the thundering hooves of over a million wildebeest as they cross crocodile-filled rivers and predator-packed plains.
                </p>
              </div>
            </Link>
          </div>

          {/* Card2*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/diani.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Zanzibar Beach Escape
                </h5>
                <p className="text-sm text-gray-700">
                Unwind on white-sand beaches, snorkel in turquoise waters, and explore the spice-scented alleyways of historic Stone Town.
                </p>
              </div>
            </Link>
          </div>

          {/* Card3*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/waterfall.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Tarangire National Park Safari
                </h5>
                <p className="text-sm text-gray-700">
                Walk beneath ancient baobab trees and spot massive elephant herds in one of Tanzania’s most underrated wildlife havens.
                </p>
              </div>
            </Link>
          </div>

          {/* Card4*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/ghazal2.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Lake Manyara Safari
                </h5>
                <p className="text-sm text-gray-700">
                Discover tree-climbing lions, flocks of flamingos, and lush forests teeming with birdlife on a perfect day safari.
                </p>
              </div>
            </Link>
          </div>

          {/* Card5*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/tourists.jpg"
                alt="tourists"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Maasai Village Cultural Visit
                </h5>
                <p className="text-sm text-gray-700">
                Step into the vibrant traditions of the Maasai—dance, connect, and learn from one of East Africa’s most iconic communities.
                </p>
              </div>
            </Link>
          </div>

          {/* Card6*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../tourists2.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Ngorongoro Crater Safari
                </h5>
                <p className="text-sm text-gray-700">
                Descend into an ancient volcanic caldera teeming with wildlife, including rhinos, lions, and massive hippo-filled lakes.
                </p>
              </div>
            </Link>
          </div>

          {/* Card7*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/tanzania1.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                   Ndutu Calving Safari
                </h5>
                <p className="text-sm text-gray-700">
                Be at the heart of the action in Ndutu during wildebeest calving season (Jan–Mar)—incredible predator-prey scenes and fresh plains life.
                </p>
              </div>
            </Link>
          </div>

          {/* Card8*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/outdoor1.jpg"
                alt="Naivasha"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Fly-in Serengeti Adventure
                </h5>
                <p className="text-sm text-gray-700">
               Maximize your safari time by flying straight into the Serengeti—luxury camps, stunning views, and unforgettable drives await.
                </p>
              </div>
            </Link>
          </div>

          {/* Card9*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/antelope1.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Mount Kilimanjaro Trek
                </h5>
                <p className="text-sm text-gray-700">
                  Stand in awe of Africa’s tallest peak—hike its forested lower slopes or explore Chagga culture at its majestic base.
                </p>
              </div>
            </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
}