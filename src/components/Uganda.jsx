import { useState } from "react";
import { Link } from "react-router-dom";

export default function Uganda() {
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
            <p className="text-xl md:text-4xl mt-4 ">UGANDA</p>
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
        Track mountain gorillas through misty rainforests and discover Uganda’s untamed beauty, where jungle meets savannah.
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
                src="../../public/giraffe2.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Bwindi Impenetrable Forest
                </h5>
                <p className="text-sm text-gray-700">
                Uganda’s crown jewel for primate encounters. Come face to face with the rare mountain gorillas in one of the most magical forests on Earth.
                </p>
              </div>
            </Link>
          </div>

          {/* Card2*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/lion2.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Murchison Falls
                </h5>
                <p className="text-sm text-gray-700">
                Home to the thunderous falls on the Nile, Big Five game drives, and boat safaris teeming with hippos and crocs.
                </p>
              </div>
            </Link>
          </div>

          {/* Card3*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/flamingoes.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  Batwa Cultural Experiences
                </h5>
                <p className="text-sm text-gray-700">
                Discover the traditions of the indigenous Batwa pygmies, the ancient forest life of Uganda’s first people, keepers of Bwindi’s secrets.
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
                  Queen Elizabeth National Park & Lake Mburo & Lake Bunyonyi Safari
                </h5>
                <p className="text-sm text-gray-700">
                Famous for tree-climbing lions, volcanic crater lakes, and the wildlife-rich Kazinga Channel.
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
                  Kampala City Cultural Tour 
                </h5>
                <p className="text-sm text-gray-700">
               Dive into Uganda’s capital with visits to the Uganda Museum, royal tombs, markets, and vibrant local cuisine scenes.
                </p>
              </div>
            </Link>
          </div>

          {/* Card6*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/elephant1.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Kidepo Valley National Park
                </h5>
                <p className="text-sm text-gray-700">
                Remote and wild—home to lions, ostriches, and dramatic landscapes rarely seen by mass tourism.
                </p>
              </div>
            </Link>
          </div>

          {/* Card7*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/hicker.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                   Kibale National Park
                </h5>
                <p className="text-sm text-gray-700">
                The “Primate Capital of the World”—best known for chimpanzee trekking and lush rainforest biodiversity.
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
                  Lake Mburo National Park
                </h5>
                <p className="text-sm text-gray-700">
                A compact park ideal for walking safaris, cycling, and seeing zebras, giraffes, and hippos up close.
                </p>
              </div>
            </Link>
          </div>

          {/* Card9*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="../../public/animal2.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Lake Bunyonyi
                </h5>
                <p className="text-sm text-gray-700">
                  A breathtakingly scenic lake with 29 islands—perfect for relaxation, canoeing, and cultural interactions after gorilla trekking.
                </p>
              </div>
            </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
}