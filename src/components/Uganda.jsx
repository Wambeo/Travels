import { useState } from "react";
import { Link } from "react-router-dom";
import ug1 from "../assets/ug1.jpg"
import ug2 from "../assets/ug2.jpg"
import ug3 from "../assets/ug3.jpg"
import ug4 from "../assets/ug4.jpg"
import ug5 from "../assets/ug5.jpg"
import ug6 from "../assets/ug6.jpg"
import ug7 from "../assets/ug7.jpg"
import ug8 from "../assets/ug8.jpg"
import ug9 from "../assets/ug9.jpg"
import ug10 from "../assets/ug10.jpg"


export default function Uganda() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [ug1, ug2, ug3, ug4, ug1, ug5, ug6, ug7, ug8, ug9, ug10];

  const cards = [
    {
      img: ug1,
      title: "Bwindi Impenetrable Forest",
      desc: "Uganda’s crown jewel for primate encounters. Come face to face with the rare mountain gorillas in one of the most magical forests on Earth.",
      link: "/destinations/nairobi",
    },
    {
      img: ug2,
      title: "Murchison Falls",
      desc: "Home to the thunderous falls on the Nile, Big Five game drives, and boat safaris teeming with hippos and crocs.",
      link: "/service-details/2",
    },
    {
      img: ug3,
      title: "Batwa Cultural Experiences",
      desc: "Discover the traditions of the indigenous Batwa pygmies, the ancient forest life of Uganda’s first people, keepers of Bwindi’s secrets.",
      link: "/service-details/2",
    },
    {
      img: ug4,
      title: "Queen Elizabeth National Park & Lake Mburo & Lake Bunyonyi Safari",
      desc: "Famous for tree-climbing lions, volcanic crater lakes, and the wildlife-rich Kazinga Channel.",
      link: "/service-details/2",
    },
    {
      img: ug5,
      title: "Kampala City Cultural Tour",
      desc: "Dive into Uganda’s capital with visits to the Uganda Museum, royal tombs, markets, and vibrant local cuisine scenes.",
      link: "/service-details/2",
    },
    {
      img: ug6,
      title: "Kidepo Valley National Park",
      desc: "Remote and wild—home to lions, ostriches, and dramatic landscapes rarely seen by mass tourism.",
      link: "/service-details/2",
    },
    {
      img: ug7,
      title: "Kibale National Park",
      desc: "The “Primate Capital of the World”—best known for chimpanzee trekking and lush rainforest biodiversity.",
      link: "/service-details/2",
    },
    {
      img: ug8,
      title: "Lake Mburo National Park",
      desc: "A compact park ideal for walking safaris, cycling, and seeing zebras, giraffes, and hippos up close.",
      link: "/service-details/2",
    },
    {
      img: ug9,
      title: "Lake Bunyonyi",
      desc: "A breathtakingly scenic lake with 29 islands—perfect for relaxation, canoeing, and cultural interactions after gorilla trekking.",
      link: "/service-details/2",
    },
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
      <div className="relative w-full h-[80vh] overflow-hidden bg-orange-400 mb-16">
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
            <p className="text-xl md:text-4xl mt-4">UGANDA</p>
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
          Track mountain gorillas through misty rainforests and discover
          Uganda’s untamed beauty, where jungle meets savannah.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center w-full mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow h-[450px]"
            >
              <Link to={card.link}>
                <img
                  className="rounded-t-lg w-full h-[280px] object-cover"
                  src={card.img}
                  alt={card.title}
                />
                <div className="p-4">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                    {card.title}
                  </h5>
                  <p className="text-sm text-gray-700">{card.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
