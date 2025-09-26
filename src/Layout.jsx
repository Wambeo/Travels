import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../src/assets/LOGO.jpeg";
import { useTranslation } from "react-i18next";

// ✅ Custom floating button for multiple WhatsApp numbers
function MultiWhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const numbers = [
    { name: "Kenya Office", phone: "254712110958" },
    { name: "Barcelona Office", phone: "34646242132" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating main button */}
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
  const { t, i18n } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Language toggle EN → ES → CA
  const changeLanguage = () => {
    const nextLang =
      i18n.language === "en" ? "es" : i18n.language === "es" ? "ca" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <nav className="bg-transparent fixed w-full z-20 top-0 start-0 border-b border-transparent ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Africkson
            </span>
          </a>

          {/* Right side (Language toggle + hamburger) */}
          <div className="flex items-center gap-4 md:order-2">
            {/* ✅ Language Toggle */}
            <button
              onClick={changeLanguage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
            >
              {(i18n.language || "en").toUpperCase()}
            </button>

            {/* ✅ Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* ✅ Navbar links */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white rounded-lg md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/"
                  className="block text-white py-2 px-3 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {t("home")}
                </Link>
              </li>

              {/* ✅ Destinations dropdown */}
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-white py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  {t("destinations")}
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
                </button>

                {isOpen && (
                  <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-gray-300 border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <a
                        href="/destinations"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Kenya
                      </a>
                      <a
                        href="/destinations/uganda"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Uganda
                      </a>
                      <a
                        href="/destinations/tanzania"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Tanzania
                      </a>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/blog"
                  className="block text-white py-2 px-3 hover:text-blue-700"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-white py-2 px-3 hover:text-blue-700"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-white py-2 px-3 hover:text-blue-700"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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

      {/* ✅ Footer with translations */}
    <footer className="bg-[#D6A800] mt-1">
  <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Logo */}
      <div>
        <a href="/" className="flex items-center mb-4">
          <img src={logo} className="h-8 me-3" alt="Africkson Logo" />
          <span className="self-center text-2xl font-semibold text-white">
            Africkson
          </span>
        </a>
      </div>

      {/* About */}
      <div>
        <h2 className="mb-4 text-sm font-semibold text-black uppercase">
          {t("about")}
        </h2>
        <ul className="text-black font-medium space-y-2">
          <li>
            <a href="#" className="hover:underline">
              {t("contactUs")}
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              {t("privacyPolicy")}
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              {t("termsOfService")}
            </a>
          </li>
        </ul>
      </div>

      {/* Contact + Newsletter */}
      <div>
        <h2 className="mb-4 text-sm font-semibold text-black uppercase">
          {t("contactHeader")}
        </h2>
        <ul className="text-black font-medium space-y-2">
          <li>{t("location")}</li>
          <li className="break-words">africksonsafarisbarcelona@gmail.com</li>
          <li>+254 711 477 574</li>
          <li>+254 724 647 982</li>
        </ul>

        {/* Newsletter */}
        <div className="mt-6">
          <h2 className="mb-2 text-sm font-semibold text-black">
            {t("newsletter")}
          </h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              className="flex-1 p-2 text-gray-900 bg-white rounded-lg shadow-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#12486B] rounded-lg shadow-md hover:bg-blue-700"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* ✅ Copyright moved to bottom */}
    <div className="mt-8 border-t border-yellow-300 pt-4">
      <p className="text-center text-sm text-black">
        © 2023 Africkson™. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>


      {/* ✅ Floating WhatsApp with multiple numbers */}
      <MultiWhatsAppButton />
    </div>
  );
}
