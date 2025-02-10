import React from 'react';
import animal2 from '../assets/animal2.jpg';

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-gray-100">
      
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img 
          // src="https://images.pexels.com/photos/18274181/pexels-photo-18274181/free-photo-of-crowd-around-kaaba-in-mecca-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600" 
          src={animal2}
          alt="Kaaba with people surrounding it" 
          className="w-full h-[800px] object-cover rounded-lg shadow-lg"
        />
      </div>

      
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">ABOUT</h1>
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
  );
}