import React from 'react';
import zebras2 from "../assets/zebras2.jpg"

export default function Blog() {
  return (
    <div className="bg-orange-200">
      <div
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{ backgroundImage: 'url(/giraffes.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
      </div>
      <div className="text-center text-xl my-8 px-4">
        <p>
          From the savannas of the Maasai Mara to the sparkling waters of the Indian Ocean, Kenya offers an unforgettable journey of discovery.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {/* Card1*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src= { zebras2}
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Nairobi City Day Trip
                </h5>
                <p className="text-sm text-gray-700">
                From bustling markets to wildlife adventures, Explore the only city with a national park, where urban energy meets natural beauty.
                
                </p>
              </div>
            
          </div>

          {/* Card2*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://images.pexels.com/photos/3998185/pexels-photo-3998185.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Maasai Mara National Reserve
                </h5>
                <p className="text-sm text-gray-700">
                Witness the awe-inspiring Great migration, a breathtaking spectacle of nature’s drama amidst stunning landscapes and iconic wildlife
                
                </p>
              </div>
            
          </div>


          {/* Top Posts Section */}
          <div className="bg-orange-200 shadow p-5 rounded">
            <h2 className="text-2xl font-semibold mb-4 ">Top Posts</h2>
            <ul className="space-y-2 text-lg">
              <li>1. TOP POSTS</li>
              <li>2. TOP POSTS</li>
              <li>3. TOP POSTS</li>
              <li>4. TOP POSTS</li>
              <li>5. TOP POSTS</li>
              <li>6. TOP POSTS</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/82/bd/e8/82bde84878480d5ab9109da8a7c1d47a.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Lake Nakuru National Park
                </h5>
                <p className="text-sm text-gray-700">
                Marvel at The Beauty Of Lake Nakuru National Park, Home To FLamingoes, Rhinos, And Diverse Wildlife In A Stunning, Serene Setting
                </p>
              </div>
            
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/1200x/ad/76/48/ad7648f8c6f2921ed8912f828f7a9b63.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Mount Kenya
                </h5>
                <p className="text-sm text-gray-700">
                Ascend Africa's Second-Highest Peak With Stunning Alpine Landscapes, Glacial Lakes, And Unique Flora Like Giant Lobelias.
                
                </p>
              </div>
            
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/1200x/a3/57/84/a3578433c64b76ae5142e1d0001d20c5.jpg"
                alt="Zebra"
              />
              <div className="p-4">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  Tanzania Safaris 
                </h5>
                <p className="text-sm text-gray-700">
                Experience The Great Migration, Vast Serengeti Plains, And The Majestic Ngorongoro Crater. Our Tanzania Itineraries Are Designed To Immerse You In Both Wild Beauty And Cultural Depth.
                
                </p>
              </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}