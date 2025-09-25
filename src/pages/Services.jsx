import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
    { id: 1, title: t("carHireTitle"), img: cars, desc: t("carHireDesc"), link: "/services/service1" },
    { id: 2, title: t("customToursTitle"), img: park1, desc: t("customToursDesc"), link: "/service-details/2" },
    { id: 3, title: t("groupSafarisTitle"), img: tanzania1, desc: t("groupSafarisDesc"), link: "/service-details/3" },
    { id: 4, title: t("culturalToursTitle"), img: maasai, desc: t("culturalToursDesc"), link: "/service-details/4" },
    { id: 5, title: t("ecoToursTitle"), img: eco, desc: t("ecoToursDesc"), link: "/service-details/5" },
    { id: 6, title: t("adventureToursTitle"), img: boatracing, desc: t("adventureToursDesc"), link: "/service-details/6" },
    { id: 7, title: t("specialInterestTitle"), img: bird2, desc: t("specialInterestDesc"), link: "/service-details/7" },
    { id: 8, title: t("wellnessTitle"), img: massage, desc: t("wellnessDesc"), link: "/service-details/8" },
    { id: 9, title: t("luxuryTitle"), img: luxury, desc: t("luxuryDesc"), link: "/service-details/9" }
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
          <p className="text-xl md:text-4xl mt-4 font-bold">{t("servicesTitle")}</p>
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
        <h1 className="max-w-4xl text-center">{t("servicesDesc")}</h1>
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
