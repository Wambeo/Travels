import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import animal2 from "../assets/animal2.jpg";
import antelope1 from "../assets/antelope1.jpg";
import baboon1 from "../assets/baboon1.jpg";
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
import zebra1 from "../assets/zebra1.jpg";
import twolions from "../assets/twolions.jpg";
import room1 from "../assets/room1.jpg";
import big5 from "../assets/big5.png";
import migrations from "../assets/migrations.jpg";

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogLoading, setBlogLoading] = useState(true);

  // ✅ Carousel slides
  const slides = [
    animal2,
    migrations,
    antelope1,
    baboon1,
    bird2,
    birdie,
    twolions,
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
  ];

  // ✅ Popular Destinations
  const destinations = [
    {
      title: "Tanzania Safaris",
      description:
        "Experience the Great Migration, vast Serengeti plains, and the majestic Ngorongoro Crater. Our Tanzania itineraries are designed to immerse you in both wild beauty and cultural depth.",
      image: zebra1,
      link: "/destinations/tanzania",
    },
    {
      title: "Uganda Safaris",
      description:
        "Track endangered mountain gorillas through misty forests and cruise along the Nile in Murchison Falls. Discover Uganda’s untamed heart through our curated journeys or personalize your adventure with us.",
      image: chimpanzee,
      link: "/destinations/uganda",
    },
    {
      title: "Kenya Safaris",
      description:
        "From the iconic Masai Mara to the slopes of Mount Kenya, witness wildlife in its rawest form. Explore sample itineraries or let us craft your custom safari through Kenya’s rich and varied landscapes.",
      image: room1,
      link: "/destinations",
    },
  ];

  // ✅ Blogs
  const blogs = [
    {
      title: "Top 10 Must-See Destinations in Africa for Wildlife Enthusiasts",
      image: migrations,
      link: "/blog/2",
    },
    {
      title: "A Beginner's Guide to Choosing the Perfect Safari Experience",
      image: leopard,
      link: "/blog/1",
    },
    {
      title:
        "The Big Five and Beyond: Fascinating Wildlife You’ll Encounter on Safari",
      image: big5,
      link: "/blog/3",
    },
  ];

  // ✅ Auto-slide every 5s
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

  // ✅ Preload blog images
  useEffect(() => {
    let loaded = 0;
    blogs.forEach((blog) => {
      const img = new Image();
      img.src = blog.image;
      img.onload = () => {
        loaded++;
        if (loaded === blogs.length) {
          setBlogLoading(false);
        }
      };
    });
  }, [blogs]);

  return (
    <div>
      {/* ✅ Carousel */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-orange-100">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Africkson Safaris</h1>
          <p className="text-xl md:text-2xl mt-4">A Home Away From Home</p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 z-30 -translate-y-1/2 px-4 py-2 bg-transparent rounded-full hover:bg-gray-800/90"
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

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 z-30 -translate-y-1/2 px-4 py-2 bg-transparent rounded-full hover:bg-gray-800/90"
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

      {/* ✅ Popular Destinations */}
      <div className="py-16 bg-orange-200 text-center">
        <h2 className="text-4xl text-gray-800 mb-6">POPULAR DESTINATIONS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {destinations.map((dest, idx) => (
            <Link
              key={idx}
              to={dest.link}
              className="bg-white border border-gray-200 rounded-lg shadow h-[547px]"
            >
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={dest.image}
                alt={dest.title}
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  {dest.title}
                </h5>
                <p className="text-sm text-gray-700">{dest.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ About */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-orange-200">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={twolions}
            alt="Two lions"
            className="w-full h-[70vh] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-8">
          <h1 className="text-3xl text-gray-800 mb-4">ABOUT</h1>
          <p className="text-gray-700 text-lg mb-4">
            Founded in 2018, Africkson Safaris had a vision to share the vibrant
            essence of Africa with the rest of the world. Our passion is rooted
            in creating meaningful connections by welcoming you into our
            cultures with warmth and authenticity, ensuring you feel at home, a
            home away from home.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our tours are more than just adventures; they are opportunities to
            immerse yourself in Africa's rich culture. We will indulge you in
            the traditions and stories of our communities, savor the flavors of
            local cuisine, and discover Africa through the eyes of its people.
            As you journey with us, you'll also explore the continent's
            landscapes, from breathtaking wildlife safaris to caves, forests,
            the Great Migration, and so much more.
          </p>
          <p className="text-gray-700 text-lg">
            Our goal is to ensure your experience is unforgettable, heartfelt,
            and filled with wonder, where every moment tells a story, and every
            journey feels like coming home.
          </p>
        </div>
      </div>

      {/* ✅ Blog */}
      <div>
        <h1 className="text-5xl text-gray-800 mb-6 flex justify-center">Blog</h1>
        <div className="bg-orange-200 w-full px-4 py-8 flex justify-center">
          {blogLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {blogs.map((blog, idx) => (
                <Link
                  key={idx}
                  to={blog.link}
                  className="group relative bg-white border border-gray-200 rounded-lg shadow h-[400px] w-full overflow-hidden"
                >
                  {/* Blog image */}
                  <img
                    className="rounded-t-lg w-full h-[300px] object-cover transition duration-500 group-hover:opacity-60"
                    src={blog.image}
                    alt={blog.title}
                  />

                  {/* Common hover background */}
                  <div
                    className="absolute top-0 left-0 w-full h-[400px] opacity-0 group-hover:opacity-100 transition duration-500 -z-10"
                    style={{
                      backgroundImage: `url('/hover-bg.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Circle overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="bg-orange-600 text-white font-bold rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                      See More
                    </div>
                  </div>

                  {/* Blog title */}
                  <div className="p-3 relative z-10">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                      {blog.title}
                    </h5>
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
