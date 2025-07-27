import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../public/LOGO.jpeg"





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
  {/* Instagram */}
  <a href="https://www.instagram.com/africksonsafaris_/?hl=en" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="23"
      fill="white"
      className="bi bi-instagram"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </svg>
  </a>

  {/* X (Twitter) */}
  <a href="https://x.com/Africkson_" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="23"
      fill="white"
      className="bi bi-twitter-x"
      viewBox="0 0 16 16"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="28"
      fill="white"
      className="bi bi-facebook"
      viewBox="0 0 16 16"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
    </svg>
  </a>

  {/*tiktok */}
  <a href="https://www.tiktok.com/@africksonsafaris_" target="_blank" rel="noopener noreferrer">
  <svg 
     xmlns="http://www.w3.org/2000/svg" 
     width="20" 
     height="28" 
     fill="white" 
     className="bi bi-tiktok" 
     viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>
</a>
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
                <Link to="/" className="block text-white py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 text-blue-500" aria-current="page">Home</Link>
            </li>
            




            <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <Link to="/destinations"
  onClick={toggleDropdown}
  className="flex items-center text-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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


      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-gray-300 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              href="/destinations/kenya"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black "
            >
              Kenya
            </a>
            <a
              href="/destinations/uganda"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Uganda
            </a>
            <a
              href="/destinations/tanzania"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Tanzania
            </a>
           
          </div>
          
        </div>
      )}
    </div>













        
             <li>
                <Link to="/blog" className="block text-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
            </li>
            <li>
                <Link to="/services" className="block text-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
            </li>
            <li>
                <Link to="/contact" className="block text-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        <div className='bg-transparent text-lg pt- container mx-auto'>
               
      </div>
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
        <Outlet />
          
       

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


    </div>
  )
}
