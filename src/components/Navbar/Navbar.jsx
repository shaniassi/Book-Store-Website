import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const PromoHeader = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  let hoverTimeout;

  const handleMouseEnter = (menu) => {
    clearTimeout(hoverTimeout);
    setVisibleDropdown(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setVisibleDropdown(null);
    }, 300); // Delay of 300ms before hiding the dropdown
  };
  
  
  return (
    <>
      <div className="bg-customBackground h-screen">
        <div className="w-full h-[105px] bg-white border-b border-black flex items-center relative">
          <a href="#" className="flex items-center ml-4">
            <img src={Logo} alt="Logo" className="w-[110px]" />
            <div className="ml-4" style={{ fontFamily: "Inika" }}>
              <h1 className="font-bold text-[35px] leading-[65px] text-brown">
                SereneBooks
              </h1>
            </div>
          </a>
          <ul className="flex space-x-8 absolute right-10">
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Home
              </a>
              {/* Home dropdown content if needed */}
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("categories")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Categories
              </a>
              <ul
                className={`absolute bg-white border border-gray-200 mt-2 left-0 top-full w-72 p-4 grid grid-cols-2 gap-2 transition-opacity duration-300 ${
                  visibleDropdown === "categories"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:underline hover:font-bold"
                  >
                    Fiction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:underline hover:font-bold"
                  >
                    Non-Fiction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:underline hover:font-bold"
                  >
                    Children
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:underline hover:font-bold"
                  >
                    Mystery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:underline hover:font-bold"
                  >
                    Horror
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:underline hover:font-bold"
                  >
                    Romance
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Blog
              </a>
              <ul
                className={`absolute bg-white border border-gray-200 mt-2 left-0 top-full transition-opacity duration-300 ${
                  visibleDropdown === "blog"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Latest Posts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Popular Posts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Archives
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                About
              </a>
              <ul
                className={`absolute bg-white border border-gray-200 mt-2 left-0 top-full transition-opacity duration-300 ${
                  visibleDropdown === "about"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Contact Us
              </a>
              <ul
                className={`absolute bg-white border border-gray-200 mt-2 left-0 top-full transition-opacity duration-300 ${
                  visibleDropdown === "contact"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Customer Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:underline hover:font-bold"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-full border-t border-black"></div>
      </div>
    </>
  );
};

export default PromoHeader;
