import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import animal2 from "../assets/animal2.jpg";
import migrations from "../assets/migrations.jpg";
import antelope1 from "../assets/antelope1.jpg";
import baboon1 from "../assets/baboon1.jpg";
import bird2 from "../assets/bird2.jpg";
import birdie from "../assets/birdie.jpg";
import twolions from "../assets/twolions.jpg";
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
import zebra1 from "../assets/zebra1.jpg";
import room1 from "../assets/room1.jpg";
import big5 from "../assets/big5.png";

export default function Landing() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogLoading, setBlogLoading] = useState(true);

  const slides = [
    animal2, migrations, antelope1, baboon1, bird2, birdie,
    twolions, boatracing, cheetah, cheetah2, chimpanzee, diani,
    elephant1, elephants2, flamingoes, ghazal, leopard
  ];

  const destinations = [
    {
      title: t("tanzaniaTitle", { defaultValue: "Tanzania Safaris" }),
      description: t("tanzaniaDesc", { defaultValue: "Experience the Great Migration..." }),
      image: zebra1,
      link: "/destinations/tanzania",
    },
    {
      title: t("ugandaTitle", { defaultValue: "Uganda Safaris" }),
      description: t("ugandaDesc", { defaultValue: "Track endangered mountain gorillas..." }),
      image: chimpanzee,
      link: "/destinations/uganda",
    },
    {
      title: t("kenyaTitle", { defaultValue: "Kenya Safaris" }),
      description: t("kenyaDesc", { defaultValue: "From the iconic Masai Mara..." }),
      image: room1,
      link: "/destinations",
    },
  ];

  const blogs = [
    { title: t("blog1", { defaultValue: "Top 10 Must-See Destinations for Wildlife Enthusiasts" }), image: migrations, link: "/blog/2" },
    { title: t("blog2", { defaultValue: "A Beginner's Guide to choosing the Perfect Safari Experience" }), image: leopard, link: "/blog/1" },
    { title: t("blog3", { defaultValue: "The Big Five and Beyond: Fascinating Wildlife You'll Encounter on Safari" }), image: big5, link: "/blog/3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    let loaded = 0;
    blogs.forEach((blog) => {
      const img = new Image();
      img.src = blog.image;
      img.onload = () => {
        loaded++;
        if (loaded === blogs.length) setBlogLoading(false);
      };
    });
  }, [blogs]);

  return (
    <div>
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-orange-100">
        <div className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slides[currentSlide]})` }} />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">{t("heroTitle")}</h1>
          <p className="text-xl md:text-2xl mt-4">{t("heroSubtitle")}</p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
            >
              {t("bookNow")}
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Popular Destinations */}
      <div className="py-16 bg-orange-200 text-center">
        <h2 className="text-4xl text-gray-800 mb-6">{t("popularDestinations")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {destinations.map((dest, idx) => (
            <Link key={idx} to={dest.link} className="bg-white border border-gray-200 rounded-lg shadow h-[480px]">
              <img className="rounded-t-lg w-full h-[300px] object-cover" src={dest.image} alt={dest.title} />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{dest.title}</h5>
                <p className="text-sm text-gray-700">{dest.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ About */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-orange-200">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={twolions} alt="Two lions" className="w-full h-[70vh] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-8">
          <h1 className="text-3xl text-gray-800 mb-4">{t("aboutTitle")}</h1>
          <p className="text-gray-700 text-lg mb-4">{t("about1")}</p>
          <p className="text-gray-700 text-lg mb-4">{t("about2")}</p>
          <p className="text-gray-700 text-lg">{t("about3")}</p>
        </div>
      </div>

      {/* ✅ Blog */}
      <div>
        <h1 className="text-5xl text-gray-800 mb-6 flex justify-center">{t("blog")}</h1>
        <div className="bg-orange-200 w-full px-4 py-8 flex justify-center">
          {blogLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {blogs.map((blog, idx) => (
                <Link key={idx} to={blog.link} className="bg-white border border-gray-200 rounded-lg shadow h-[400px] w-full relative group">
                  <img className="rounded-t-lg w-full h-[300px] object-cover group-hover:opacity-70 transition" src={blog.image} alt={blog.title} />
                  <div className="p-3">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{blog.title}</h5>
                  </div>
                  {/* ✅ Hover circle */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-orange-500 text-white w-24 h-24 flex items-center justify-center rounded-full shadow-lg">
                      {t("seeMore")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
