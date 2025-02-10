import { useState } from "react";
import { Link } from "react-router-dom";
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
import outdoor1 from "../assets/outdoor1.jpg"
import giraffe2 from "../assets/giraffe2.jpg"
import lion2 from "../assets/lion2.jpg"
import ghazal2 from "../assets/ghazal2.jpg"
import tourists from "../assets/tourists.jpg"

export default function Destination() {
  const [currentSlide, setCurrentSlide] = useState(0);

   const slides = [
     
     animal2,
     giraffe2,
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
     ghazal2
   
 ]

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
            <p className="text-xl md:text-4xl mt-4 ">KENYA</p>
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
        From the savannas of the Maasai Mara to the sparkling waters of the Indian Ocean, Kenya offers an unforgettable journey of discovery.
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
                src={giraffe2}
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Nairobi City Day Trip
                </h5>
                <p className="text-sm text-gray-700">
                From bustling markets to wildlife adventures, Explore the only city with a national park, where urban energy meets natural beauty.
                
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
                src={lion2}
                alt="lion"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Maasai Mara National Reserve
                </h5>
                <p className="text-sm text-gray-700">
                Witness the awe-inspiring Great migration, a breathtaking spectacle of nature’s drama amidst stunning landscapes and iconic wildlife
                
                </p>
              </div>
            </Link>
          </div>

          {/* Card3*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={flamingoes}
                alt="flamingoes"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  Lake Nakuru National Park
                </h5>
                <p className="text-sm text-gray-700">
                Marvel at the beauty of lake nakuru national park, home to flamingos, rhinos, and diverse wildlife in a stunning, serene setting.
                
                </p>
              </div>
            </Link>
          </div>

          {/* Card4*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={elephants2}
                alt="elephants"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Amboseli National Park
                </h5>
                <p className="text-sm text-gray-700">
                Stand in awe of vast herds of elephants roaming freely beneath the towering Mount kilimanjaro. a perfect safari dreamscape.

                </p>
              </div>
            </Link>
          </div>

          {/* Card5*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={ghazal2}
                alt="tourists"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                Tsavo National Parks (East and West)
                </h5>
                <p className="text-sm text-gray-700">
                From the striking Yatta plateau to the crystal clear waters of mzima springs, explore the largest park in Kenya where red dusted elephants roam.
              
                </p>
              </div>
            </Link>
          </div>

          {/* Card6*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={tourists}
                alt="tourists"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                Mount Kenya
                </h5>
                <p className="text-sm text-gray-700">
                Ascend Africa’s second-highest peak with stunning alpine landscapes, glacial lakes, and unique flora like giant lobelias.

                </p>
              </div>
            </Link>
          </div>

          {/* Card7*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src= {diani}
                alt="diani"
              />
              <div className="p-4">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Diani Beach
                </h5>
                <p className="text-sm text-gray-700">
                Sink your toes into powdery white sands. From vibrant coral reefs for snorkeling to thrilling water sports, diani beach is perfect for relaxation or adventure.
               
                </p>
              </div>
            </Link>
          </div>

          {/* Card8*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src= {animal2}
                alt="Naivasha"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Aberdare National Park
                </h5>
                <p className="text-sm text-gray-700">
                A haven for nature lovers, thrilling game drives, breathtaking hiking trails, and relaxing at tree-top lodges overlooking waterholes frequented by wildlife.

                </p>              
              </div>
            </Link>
          </div>

          {/* Card9*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <Link to="/service-details/2">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src={outdoor1}
                alt="outdoor"
              />
              <div className="p-4">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Lake Naivasha
                </h5>
                <p className="text-sm text-gray-700">
                Lake Naivasha offers a serene escape for nature walks, peaceful boat rides among hippos and vibrant birdlife, enjoy stunning views of the Great rift valley. 
                </p>
              </div>
            </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
}