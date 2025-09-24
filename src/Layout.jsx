import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../public/LOGO.jpeg";
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';


// ✅ Custom floating button for multiple WhatsApp numbers
function MultiWhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);


  const numbers = [
    { name: "Kenya Office", phone: "254712110958" },
    { name: "Barcelona Office", phone: "34646242132" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating main button with tooltip */}
      <div className="relative flex flex-col items-end">
        <button
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg focus:outline-none"
        >
          💬
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <span className="absolute right-16 bottom-4 bg-black text-white text-xs rounded-md px-2 py-1 shadow-lg whitespace-nowrap">
            Need help? Click to chat!
          </span>
        )}
      </div>

      {/* Dropdown with multiple numbers */}
      {open && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 space-y-2 w-44">
          {numbers.map((n, idx) => (
            <a
              key={idx}
              href={`https://wa.me/${n.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-gray-800 hover:text-green-600"
            >
              {n.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>        
      <nav className="bg-transparent fixed w-full z-20 top-0 start-0 border-b border-transparent ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Africkson</span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div>
              <div className="flex gap-x-4 items-center">
                {/* ✅ Social icons (Instagram, X, Facebook, TikTok) */}
                {/* ... keep your SVGs here ... */}
              </div>
            </div>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-3 w-10 h-3 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 " aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white rounded-lg md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link to="/" className="block text-white py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 text-blue-500" aria-current="page">Home</Link>
              </li>

              {/* ✅ Destinations dropdown */}
              <div className="relative inline-block text-left">
                <Link to="/destinations"
                  onClick={toggleDropdown}
                  className="flex items-center text-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Destinations
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {isOpen && (
                  <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-gray-300 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <a href="/destinations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kenya</a>
                      <a href="/destinations/uganda" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Uganda</a>
                      <a href="/destinations/tanzania" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tanzania</a>
                    </div>
                  </div>
                )}
              </div>

              <li>
                <Link to="/blog" className="block text-white py-2 px-3 hover:text-blue-700">Blog</Link>
              </li>
              <li>
                <Link to="/services" className="block text-white py-2 px-3 hover:text-blue-700">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="block text-white py-2 px-3 hover:text-blue-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='bg-transparent text-lg pt- container mx-auto'></div>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />      

      {/* ✅ Page content */}
      <Outlet />

      {/* ✅ Footer */}
      <footer className="bg-[#D6A800] mt-1">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                  <img src={logo} className="h-8 me-3" alt="Africkson Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Africkson</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">About</h2>
                  <ul className="text-gray-500 dark:text-black font-medium">
                      <li className="mb-2">
                          <a href="#" className="hover:underline">Contact Us</a>
                      </li>
                      <li className="mb-2">
                          <a href="#" className="hover:underline">Privacy policy</a>
                      </li>
                      <li className="mb-2">
                          <a href="#" className="hover:underline">Terms of Service</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Contact us</h2>
                  <ul className="text-gray-500 dark:text-black font-medium">
                      <li className="mb-4">
                          <p className="hover:underline ">Nairobi, Kenya</p>
                      </li>
                      <li className="mb-4  md:flex md:justify-between md:items-center">
                          <p className="hover:underline">africksonsafaris@gmail.com</p>
                      </li>
                      <li className="mb-4">
                          <p className="hover:underline">+254 711 477 574</p>
                      </li>
                      <li className="mb-4">
                          <p className="hover:underline">+254 724 647 982</p>
                      </li>
                      <li className="mb-4">
                           {/* Newsletter */}
            <div className="mt-8">
                <h2 className="mb-6 text-sm font-semibold text-black">Subscribe to our Newsletter</h2>
                <form className="flex items-center">
                    <input
                        type="email"
                        className="p-2 w-full text-gray-900 bg-[#D6A800] rounded-lg shadow-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        placeholder="Enter your email"
                    />
                </form>
            </div>
                      </li>
                      <li>
                      <button
                        type="submit"
                        className="ml-2 px-4 py-2 text-white bg-[#12486B] rounded-lg shadow-md hover:bg-blue-700"
                    >
                        Subscribe
                    </button>
                      </li>
                  </ul>
              </div>             
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
      <div className="sm:flex sm:items-center sm:justify-between bg-">
          <span className="text-sm text-gray-500 sm:text-center dark:text-black ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Africkson™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
            
          </div>
      </div>
    </div>
</footer>

      {/* ✅ Floating WhatsApp with multiple numbers */}
      <MultiWhatsAppButton />
    </div>
  )
}
