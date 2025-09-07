import { useState} from "react";
import { Link } from 'react-router-dom';
import animal2 from "../assets/animal2.jpg"
import antelope1 from "../assets/antelope1.jpg"
import baboon1 from "../assets/baboon1.jpg"
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
import zebra1 from "../assets/zebra1.jpg"
import twolions from "../assets/twolions.jpg"
import room1 from "../assets/room1.jpg"
import big5 from "../assets/big5.png"
import migrations from "../assets/migrations.jpg"


export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Carousel */}
      <div className="relative w-full h-[1000px] overflow-hidden bg-orange-100">
        {/* Carousel Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Carousel Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold">Africkson Safaris</h1>
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mt-4">A Home Away From Home</p>
            
            <div className="mt-8">
              <Link to = "/contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </Link>
            </div>
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

      {/* Popular destinations */}
      <div className="py-16 bg-orange-200 text-center">
        <h2 className="text-4xl text-gray-800 mb-6">POPULAR DESTINATIONS</h2>

         {/*Cards*/ }
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 px-4 sm:px-8 lg:px-20">
  {/* Small Card 1 */}
  <Link to ="/destinations/tanzania" className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-[547px]">
    <a href="#">
      <img
        className="rounded-t-lg w-full h-[400px] object-cover"
        src={ zebra1 }
        alt="Zebra"
      />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Tanzania Safaris
        </h5>
      </a>
      <p className="text-sm text-gray-700">
      Experience the Great Migration, vast Serengeti plains, and the majestic Ngorongoro Crater. Our Tanzania itineraries are designed to immerse you in both wild beauty and cultural depth.
      </p>
    </div>
  </Link>

  {/* Small Card 2 */}
  <Link to ="/destinations/uganda" className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-[547px]">
    <a href="#">
      <img
        className="rounded-t-lg w-full h-[400px] object-cover"
        src= { chimpanzee }
        alt="Chimpanzee"
      />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Uganda Safaris
        </h5>
      </a>
      <p className="text-sm text-gray-700">
      Track endangered mountain gorillas through misty forests and cruise along the Nile in Murchison Falls. Discover Uganda’s untamed heart through our curated journeys or personalize your adventure with us.
      </p>
    </div>
  </Link>

  {/* Small Card 3 */}
  <Link to ="/destinations" className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-[547px]">
    <a href="#">
      <img
        className="rounded-t-lg w-full h-[400px] object-cover"
        src={room1}
        alt="Room"
      />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Kenya Safaris
        </h5>
      </a>
      <p className="text-sm text-gray-700">
      From the iconic Masai Mara to the slopes of Mount Kenya, witness wildlife in its rawest form. Explore sample itineraries or let us craft your custom safari through Kenya’s rich and varied landscapes.
      </p>
    </div>
  </Link>
</div>


      </div>

      {/*ABOUT*/}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-orange-200">
      
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img 
          src= { twolions} 
          alt="Kaaba with people surrounding it" 
          className="w-full h-[800px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-8">
        <h1 className="text-3xl  text-gray-800 mb-4">ABOUT</h1>
        <p className="text-gray-700 text-lg mb-4">
          Founded in 2018, Africkson Safaris had a vision to share the vibrant essence of Africa with the rest of the world. Our passion is rooted in creating meaningful connections by welcoming you into our cultures with warmth and authenticity, ensuring you feel at home, a home away from home.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our tours are more than just adventures; they are opportunities to immerse yourself in Africa's rich culture. We will indulge you in the traditions and stories of our communities, savor the flavors of local cuisine, and discover Africa through the eyes of its people. As you journey with us, you'll also explore the continent's landscapes, from breathtaking wildlife safaris to caves, forests, the Great Migration, and so much more.
        </p>
        <p className="text-gray-700 text-lg">
          Our goal is to ensure your experience is unforgettable, heartfelt, and filled with wonder, where every moment tells a story, and every journey feels like coming home.
        </p>
      </div>
    </div>
           


{/* BLOG */}
<div>
  <h1 className="text-5xl text-gray-800 mb-6 flex justify-center">Blog</h1>
  <div className="bg-orange-200 w-full px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Image 1 */}
      <Link  to ="/blog/1"className="bg-white border border-gray-200 rounded-lg shadow h-[500px] w-full">
       
          <img
            className="rounded-t-lg w-full h-[400px] object-cover"
            src={migrations}
            alt="migrations"
          
          />
        
        <div className="p-3">
          
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            Top 10 Must-See Destinations in Africa for Wildlife Enthusiasts
            </h5>
          
        </div>
      </Link>

      {/* Image 2 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow h-[500px] w-full">
        
          <img
            className="rounded-t-lg w-full h-[400px] object-cover"
            src={leopard}
            alt="leopard"
          />
      
        <div className="p-3">
          
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            A Beginner's Guide to Choosing the Perfect Safari Experience
            </h5>
         
        </div>
      </div>

      {/* Image 3 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow h-[500px] w-full">
        
          <img
            className="rounded-t-lg w-full h-[400px] object-cover"
            src={big5}
            alt="big5"
          />
        
        <div className="p-3">
          
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            The Big Five and Beyond: Fascinating Wildlife You’ll Encounter on Safari
            </h5>
          
        </div>
      </div>
    </div>
  </div>
</div>







    </div>
  );
}