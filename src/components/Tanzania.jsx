import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ✅ Import assets
import tz1 from "../assets/tz1.jpg";
import tz2 from "../assets/tz2.jpg";
import tz3 from "../assets/tz3.jpg";
import tz4 from "../assets/tz4.jpg";
import tz5 from "../assets/tz5.jpg";
import tz6 from "../assets/tz6.jpg";
import tz7 from "../assets/tz7.jpg";
import tz8 from "../assets/tz8.jpg";
import tz9 from "../assets/tz9.jpg";
import tz10 from "../assets/tz10.jpg";

export default function Tanzania() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const slides = [tz1, tz2, tz3, tz4, tz5, tz6, tz7, tz8, tz9, tz10];

  // ✅ Cards use translation keys
  const cards = [
    {
      img: tz7,
      title: t("serengetiTitle"),
      description: t("serengetiDesc"),
      link: "/destinations/nairobi",
    },
    {
      img: tz3,
      title: t("zanzibarTitle"),
      description: t("zanzibarDesc"),
      link: "/service-details/2",
    },
    {
      img: tz4,
      title: t("tarangireTitle"),
      description: t("tarangireDesc"),
      link: "/service-details/2",
    },
    {
      img: tz5,
      title: t("manyaraTitle"),
      description: t("manyaraDesc"),
      link: "/service-details/2",
    },
    {
      img: tz6,
      title: t("maasaiTitle"),
      description: t("maasaiDesc"),
      link: "/service-details/2",
    },
    {
      img: tz9,
      title: t("ngorongoroTitle"),
      description: t("ngorongoroDesc"),
      link: "/service-details/2",
    },
    {
      img: tz8,
      title: t("ndutuTitle"),
      description: t("ndutuDesc"),
      link: "/service-details/2",
    },
    {
      img: tz1,
      title: t("flyinTitle"),
      description: t("flyinDesc"),
      link: "/service-details/2",
    },
    {
      img: tz2,
      title: t("kilimanjaroTitle"),
      description: t("kilimanjaroDesc"),
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
      {/* ✅ Carousel */}
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

        {/* ✅ Carousel Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-center">
            <p className="text-xl md:text-4xl mt-4 font-bold">
              {t("tanzaTitle")}
            </p>
          </div>
        </div>

        {/* Prev Button */}
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

      {/* ✅ Description */}
      <div className="text-xl text-gray-800 flex justify-center bg-orange-200 mt-10 mb-10 w-full p-10">
        <h1>{t("tanzaDesc")}</h1>
      </div>

      {/* ✅ Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {t("tanzaniaExperiencesTitle")}
        </h2>
        <p className="text-gray-600 mt-2">{t("tanzaniaExperiencesDesc")}</p>
      </div>

      {/* ✅ Cards Section */}
      <div className="flex justify-center items-center w-full mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-orange-100 border border-gray-200 rounded-lg shadow h-[420px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link to={card.link}>
                <img
                  className="rounded-t-lg w-full h-[260px] object-cover"
                  src={card.img}
                  alt={card.title}
                />
                <div className="p-4">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
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
