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

  const cards = [
    {
      img: "../../public/giraffe2.jpg",
      title: "Bwindi Impenetrable Forest",
      desc: "Uganda’s crown jewel for primate encounters. Come face to face with the rare mountain gorillas in one of the most magical forests on Earth.",
      link: "/destinations/nairobi",
    },
    {
      img: "../../public/lion2.jpg",
      title: "Murchison Falls",
      desc: "Home to the thunderous falls on the Nile, Big Five game drives, and boat safaris teeming with hippos and crocs.",
      link: "/service-details/2",
    },
    {
      img: "../../public/flamingoes.jpg",
      title: "Batwa Cultural Experiences",
      desc: "Discover the traditions of the indigenous Batwa pygmies, the ancient forest life of Uganda’s first people, keepers of Bwindi’s secrets.",
      link: "/service-details/2",
    },
    {
      img: "../../public/ghazal2.jpg",
      title: "Queen Elizabeth National Park & Lake Mburo & Lake Bunyonyi Safari",
      desc: "Famous for tree-climbing lions, volcanic crater lakes, and the wildlife-rich Kazinga Channel.",
      link: "/service-details/2",
    },
    {
      img: "../../public/tourists.jpg",
      title: "Kampala City Cultural Tour",
      desc: "Dive into Uganda’s capital with visits to the Uganda Museum, royal tombs, markets, and vibrant local cuisine scenes.",
      link: "/service-details/2",
    },
    {
      img: "../../public/elephant1.jpg",
      title: "Kidepo Valley National Park",
      desc: "Remote and wild—home to lions, ostriches, and dramatic landscapes rarely seen by mass tourism.",
      link: "/service-details/2",
    },
    {
      img: "../../public/hicker.jpg",
      title: "Kibale National Park",
      desc: "The “Primate Capital of the World”—best known for chimpanzee trekking and lush rainforest biodiversity.",
      link: "/service-details/2",
    },
    {
      img: "../../public/outdoor1.jpg",
      title: "Lake Mburo National Park",
      desc: "A compact park ideal for walking safaris, cycling, and seeing zebras, giraffes, and hippos up close.",
      link: "/service-details/2",
    },
    {
      img: "../../public/animal2.jpg",
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
