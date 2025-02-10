import { Link } from 'react-router-dom';
import { useState } from 'react';
import animal2 from "../assets/animal2.jpg"
import antelope1 from "../assets/antelope1.jpg"
import baboon1 from "../assets/baboon1.jpg"
import big5 from "../assets/big5.png"
import bird2 from "../assets/bird2.jpg"
import birdie from "../assets/birdie.jpg"
import boatracing from "../assets/boatracing.jpg"
import cheetah from "../assets/cheetah.jpg"
import cheetah2 from "../assets/cheetah2.jpg"
import chimpanzee from "../assets/chimpanzee.jpg"
import diani from "../assets/diani.jpg"
import elephant1 from "../assets/elephant1.jpg"
import elephants2 from "../assets/elephants2.jpg"
import flamingoes from "../assets/flamingoes.jpg"
import ghazal from "../assets/ghazal.jpg"
import leopard from "../assets/leopard.jpg"
import luxury from "../assets/luxury.jpg"
import maasai from "../assets/maasai.jpg"
import eco from "../assets/eco.png"
import park1 from "../assets/park1.jpg"
import twolions from "../assets/twolions.jpg"
import cars from "../assets/cars.jpg"
import massage from "../assets/massage.jpg"
import tanzania1 from "../assets/tanzania1.jpg"


export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    twolions
  
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
            <p className="text-xl md:text-4xl mt-4 font-bold">OUR SERVICES</p>
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
          With a team of our professional tour guides, drivers, and cook, we are
          dedicated to providing you the best service and experience that
          matches the money-value.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center  items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          
          {/* Card1*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/services/service1">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={cars}
                alt="cars"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  CAR HIRE
                </h5>
                <p className="text-sm text-gray-700">
                Explore Africa at your own pace. Whether you need a rugged 4x4 for safari adventures, a comfortable sedan for city tours, or a spacious van for group travel we’ve got you covered.
                  Explore 
                </p>
                <a href="#" class="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
              </div>
            </Link>
          </div>

          {/* Card2*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={park1}
                alt="park1"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Custom Tours
                </h5>
                <p className="text-sm text-gray-700">
                design your dream adventure and Explore Africa your way, with every detail planned just for you to ensure your journey is as extraordinary as you envision.
                Explore 
                </p>
              </div>
            </Link>
          </div>

          {/* Card3*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={tanzania1}
                alt="Tanzania"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                Group Safaris
                </h5>
                <p className="text-sm text-gray-700">
                Enjoy the camaraderie of exploring africa’s iconic landscapes, abundant wildlife, and hidden gems with like-minded travelers on our expertly curated group safaris.

                 Explore 
                </p>
              </div>
            </Link>
          </div>

          {/* Card4*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={maasai}
                alt="maasai"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                Cultural & Heritage Tours
                </h5>
                <p className="text-sm text-gray-700">
                From visiting ancient archaeological sites and iconic landmarks to engaging with local communities, these tours offer an authentic journey into the heart of africa’s heritage
                Explore 
                </p>
              </div>
            </Link>
          </div>

          {/* Card5*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={eco}
                alt="eco"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                Eco & Sustainable Tours
                </h5>
                <p className="text-sm text-gray-700">
                Engage in Eco-friendly Tour, learn about local conservation efforts, and support communities that rely on sustainable resources.

                 Explore 
                </p>
              </div>
            </Link>
          </div>

          {/* Card6*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={boatracing}
                alt="boatracing"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Adventure Sports & Expeditions
                </h5>
                <p className="text-sm text-gray-700">
                Explore Africa’s rugged terrain and push your limits from scaling mountains, white-water rafting on wild rivers, to skydiving and dune bashing in vast deserts, we offer experiences for adrenaline seekers of all kinds.
                Explore 
                </p>
              </div>
            </Link>
          </div>

          {/* Card7*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={bird2}
                alt="bird"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Special Interest Tours
                </h5>
                <p className="text-sm text-gray-700">
                we craft personalized itineraries to match your passions. We focus on unique themes whether you are a photography enthusiast, a birdwatcher, a culinary explorer, or a history buff, our experts guides are always on your side.
                Explore 
                </p>
              </div>
            </Link>
          </div>

          {/* Card8*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={massage}
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Wellness & Retreats
                </h5>
                <p className="text-sm text-gray-700">
                Reconnect with your mind, body, and spirit. Our packages offer a perfect blend of relaxation and rejuvenation, featuring yoga sessions, meditation, spa treatment, and holistic therapies.
                Explore 
                </p>
              </div>
            </Link>
          </div>

          {/* Card9*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={luxury}
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Luxury Travel
                </h5>
                <p className="text-sm text-gray-700">
                Experience Africa in unparalleled style and comfort with our bespoke packages. Stay in opulent lodges, exclusive resorts, or private villas, gourmet dining, scenic helicopter rides, seclude beach escapes, and tailor-made itineraries.
                Explore 
                </p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
