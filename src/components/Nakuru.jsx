import { useState } from "react";

export default function Nairobi() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [openIndex, setOpenIndex] = useState(null); 

    const slides = [
        "../../public/lions.jpg",
        "../../public/antelope1.jpg",
        "../../public/birdie.jpg",
        "../../public/elephant1.jpg",
        "../../public/elephants2.jpg",
        "../../public/ghazal.jpg",
        "../../public/ghazal2.jpg",
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleToggle = (index) => {
        
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="bg-orange-200 min-h-screen">
                {/* Carousel */}
                <div className="relative w-full h-[900px] overflow-hidden bg-orange-400">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                        style={{
                            backgroundImage: `url(${slides[currentSlide]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="text-center">
                            <p className="text-xl md:text-4xl mt-4">NAIROBI CITY DAY TRIP</p>
                        </div>
                    </div>
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

<div className="max-w-7xl mx-auto bg-orange-200 shadow-lg rounded-lg p-6 space-y-9">

{/*Overview*/}
                <div>
                    <h1 className="text-4xl text-gray-800 mb-4 flex items-center justify-center mt-4">OVERVIEW</h1>
                </div>
                <div className="flex justify-center mt-8">
    <div className="max-w-4xl w-full p-6 bg-transparent  rounded-lg shadow-lg">
        <p className="text-gray-700 text-xl text-center">
            Discover the vibrant heart of Kenya with our expertly curated Nairobi day tour. Whether you’re a first-timer visitor or a seasoned traveler, Nairobi offers a blend of culture, wildlife, and history that’s sure to captivate you.
        </p>
    </div>
</div>

                <div className="border-t-2 border-gray-900 my-4"></div>

{/*About this activity*/}






<div className="mb-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">About this Activity</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <span className="text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" fill="black" className="bi bi-calendar-minus" viewBox="0 0 16 16">
  <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold">Free Cancellation</h3>
            <p className="text-sm text-gray-600">Cancel up to 24 hours in advance for a full refund.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <span className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold">Duration 8 Hours</h3>
            <p className="text-sm text-gray-600">Check availability to see starting times.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <span className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" fill="currentColor" className="bi bi-car-front-fill" viewBox="0 0 16 16">
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold">Pickup Optional</h3>
            <p className="text-sm text-gray-600">
              Pickup outside Nairobi CBD and airport will incur additional charges.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t-2 border-gray-900 my-4"></div>





{/*Why you'll love this safari*/}
    <div>
         <div className="mb-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-black mb-4">Why you'll love this safari</h2>
      <ul className="list-disc list-inside space-y-3 text-black text-m">
        <li>Experience the thrill of spotting lions, rhinos, and zebras just a short drive from the city center.</li>
        <li>
          Feed endangered giraffes, marvel at baby elephants, and gain a deeper understanding of
          Kenya’s incredible conservation efforts.
        </li>
        <li>
          With a well-paced itinerary and expert guides, you'll enjoy a seamless journey tailored
          for comfort and discovery.
        </li>
      </ul>
    </div>
    </div>















{/* Itinerary */}
               
                <div className="mb-6 ">
                    <h2 className="text-4xl font-semibold text-black">Itinerary</h2>
                    <div className="p-6">
                        {/* Card Item */}
                        
                        {/* Card 1 */}
<div className="mb-4 flex justify-center">
    <div className="w-full ">
        <button
            onClick={() => handleToggle(0)} 
            className="w-full flex justify-between items-center p-5 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
        >
            <span>7:00 AM : Pickup from your Hotel/Residence</span>
            <svg
                className="h-5 w-60vh center"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
        {openIndex === 0 && (
            <div className="p-4 bg-yellow-100 rounded-b-lg">
                <p>Start your day with a thrilling game drive in the only national park located within a city. Spot lions, giraffes, rhinos, and more against the backdrop of Nairobi’s skyline.</p>
            </div>
        )}
    </div>
</div>



                {/* Card Item 2 */}
                <div className="mb-4">
                    <button
                        onClick={() => handleToggle(1)} 
                        className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
                    >
                        <span>7:30 AM : Nairobi National Park Safari</span>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 rounded-b-lg">
                            <p>Witness the heartwarming rescue and rehabilitation of orphaned elephants. Learn about their conservation efforts and enjoy an up-close view of these gentle giants.</p>
                        </div>
                    )}
                </div>

                {/* Card Item 3 */}
                <div className="mb-4">
                    <button
                        onClick={() => handleToggle(2)} 
                        className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
                    >
                        <span>10:00 AM : Visit David Sheldrick Wildlife Trust</span>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 rounded-b-lg">
                            <p>Visit the David Sheldrick Wildlife Trust to learn about their conservation efforts to protect elephants and other endangered species.</p>
                        </div>
                    )}
                </div>

                {/* Card Item 4 */}
                <div className="mb-4">
                    <button
                        onClick={() => handleToggle(3)} 
                        className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
                    >
                        <span>12:00 PM : Experience at Giraffe Centre</span>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 rounded-b-lg">
                            <p>Dive into Nairobi’s artistic side at Kazuri Beads. Watch local artisans create beautiful, handmade jewelry while supporting sustainable practices.</p>
                        </div>
                    )}
                </div>

                {/* Card Item 5 */}
                <div className="mb-4">
                    <button
                        onClick={() => handleToggle(4)} 
                        className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
                    >
                        <span>2:00 PM : Karen Blixen Museum</span>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 rounded-b-lg">
                            <p>Explore the former home of the famous author Karen Blixen, the setting for her book "Out of Africa," and learn about her life and legacy.</p>
                        </div>
                    )}
                </div>

                {/* Card Item 6 */}
                <div className="mb-4">
                    <button
                        onClick={() => handleToggle(5)} 
                        className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
                    >
                        <span>4:00 PM : Nairobi Railway Museum</span>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 rounded-b-lg">
                            <p>Conclude your day with a visit to the Nairobi Railway Museum, which showcases the history of the railway system in Kenya and its role in the development of East Africa.</p>
                        </div>
                    )}
                </div>
                      
                    </div>
                </div>
                <div className="border-t-2 border-gray-900 my-4"></div>

                <div className="mb-6 flex flex-col items-center ">
                    <h1 className="font-bold text-3xl mb-3">Includes</h1>


                    <div>

                

        <div className="flex items-start space-x-4">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" fill="green" className="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold">Driver/ guide</h3>
          </div>
        </div>



        <div className="flex items-start space-x-4">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" fill="green" className="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold">Hotel pickup and drop-off</h3>
          </div>
        </div>


        <div className="flex items-start space-x-4">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" fill="green" className="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold">Safari van with open roof</h3>
          </div>
        </div>



        <div className="flex items-start space-x-4">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="red" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold"> Entry fees</h3>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="red" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
          </span>
          <div>
            <h3 className="font-semibold">Food/ drinks</h3>
          </div>
        </div>









                    </div>





                    </div>

                </div>
                </div>
        </div>
    );
}
