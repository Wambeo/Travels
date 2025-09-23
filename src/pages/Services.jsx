import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

// Import assets
import animal2 from "../assets/animal2.jpg";
import antelope1 from "../assets/antelope1.jpg";
import baboon1 from "../assets/baboon1.jpg";
import big5 from "../assets/big5.png";
import bird2 from "../assets/bird2.jpg";
import birdie from "../assets/birdie.jpg";
import boatracing from "../assets/boatracing.jpg";
import cheetah from "../assets/cheetah.jpg";
import cheetah2 from "../assets/cheetah2.jpg";
import chimpanzee from "../assets/chimpanzee.jpg";
import diani from "../assets/diani.jpg";
import elephant1 from "../assets/elephant1.jpg";
import elephants2 from "../assets/elephants2.jpg";
import flamingoes from "../assets/flamingoes.jpg";
import ghazal from "../assets/ghazal.jpg";
import leopard from "../assets/leopard.jpg";
import luxury from "../assets/luxury.jpg";
import maasai from "../assets/maasai.jpg";
import eco from "../assets/eco.png";
import park1 from "../assets/park1.jpg";
import twolions from "../assets/twolions.jpg";
import cars from "../assets/cars.jpg";
import massage from "../assets/massage.jpg";
import tanzania1 from "../assets/tanzania1.jpg";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  const slides = [
    animal2,
    antelope1,
    baboon1,
    big5,
    bird2,
    boatracing,
    cheetah,
    cheetah2,
    chimpanzee,
    diani,
    elephant1,
    elephants2,
    flamingoes,
    ghazal,
    leopard,
    birdie,
    twolions,
  ];

  const cards = [
    {
      id: 1,
      title: "Car Hire",
      img: cars,
      desc: "Explore Africa at your own pace. Whether you need a rugged 4x4 for safari adventures, a comfortable sedan for city tours, or a spacious van for group travel we’ve got you covered.",
      link: "/services/service1",
    },
    {
      id: 2,
      title: "Custom Tours",
      img: park1,
      desc: "Design your dream adventure and explore Africa your way, with every detail planned just for you to ensure your journey is as extraordinary as you envision.",
      link: "/service-details/2",
    },
    {
      id: 3,
      title: "Group Safaris",
      img: tanzania1,
      desc: "Enjoy the camaraderie of exploring Africa’s iconic landscapes, abundant wildlife, and hidden gems with like-minded travelers on our expertly curated group safaris.",
      link: "/service-details/3",
    },
    {
      id: 4,
      title: "Cultural & Heritage Tours",
      img: maasai,
      desc: "From visiting ancient archaeological sites and iconic landmarks to engaging with local communities, these tours offer an authentic journey into the heart of Africa’s heritage.",
      link: "/service-details/4",
    },
    {
      id: 5,
      title: "Eco & Sustainable Tours",
      img: eco,
      desc: "Engage in eco-friendly tours, learn about local conservation efforts, and support communities that rely on sustainable resources.",
      link: "/service-details/5",
    },
    {
      id: 6,
      title: "Adventure Sports & Expeditions",
      img: boatracing,
      desc: "Explore Africa’s rugged terrain and push your limits. From scaling mountains and white-water rafting to skydiving and dune bashing, we offer experiences for adrenaline seekers of all kinds.",
      link: "/service-details/6",
    },
    {
      id: 7,
      title: "Special Interest Tours",
      img: bird2,
      desc: "We craft personalized itineraries to match your passions. Whether photography, birdwatching, culinary exploration, or history, our expert guides are here for you.",
      link: "/service-details/7",
    },
    {
      id: 8,
      title: "Wellness & Retreats",
      img: massage,
      desc: "Reconnect with your mind, body, and spirit. Our packages offer relaxation and rejuvenation, featuring yoga sessions, meditation, spa treatments, and holistic therapies.",
      link: "/service-details/8",
    },
    {
      id: 9,
      title: "Luxury Travel",
      img: luxury,
      desc: "Experience Africa in unparalleled style and comfort with bespoke packages. Stay in opulent lodges, exclusive resorts, or private villas, with gourmet dining and scenic escapes.",
      link: "/service-details/9",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setLoading(true);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setLoading(true);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-200 min-h-screen">
      {/* Carousel */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-orange-400">
        <div className="absolute inset-0">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-10 h-10 animate-spin text-white" />
            </div>
          )}
          <img
            src={slides[currentSlide]}
            alt="slide"
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setLoading(false)}
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-xl md:text-4xl mt-4 font-bold">OUR SERVICES</p>
        </div>

        {/* Prev Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-1/2 left-5 z-30 transform -translate-y-1/2 px-3 py-2 bg-black/30 rounded-full hover:bg-black/60"
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
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-1/2 right-5 z-30 transform -translate-y-1/2 px-3 py-2 bg-black/30 rounded-full hover:bg-black/60"
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
        </button>
      </div>

      {/* Service Description */}
      <div className="text-lg text-gray-800 flex justify-center bg-orange-200 mt-10 mb-10 w-full px-6">
        <h1 className="max-w-4xl text-center">
          With a team of our professional tour guides, drivers, and cook, we are
          dedicated to providing you the best service and experience that
          matches the money-value.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center w-full mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-lg shadow h-[420px] hover:shadow-lg transition"
            >
              <Link to={card.link}>
                <img
                  className="rounded-t-lg w-full h-[220px] object-cover"
                  src={card.img}
                  alt={card.title}
                />
                <div className="p-4">
                  <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">
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
