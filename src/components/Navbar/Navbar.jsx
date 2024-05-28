import React from "react";
import Logo from "../../assets/logo.png";

const PromoHeader = () => {
  return (
    <>
      <div className="bg-customBackground h-screen">
        <div className="w-[1440] h-[105px] left-[0px] top-0 bg-white border-black">
          <a href="#" className="absolute w-[110px] left-[18px] top-[0px]">
            <img src={Logo} alt="Logo" />
            <div
              className="absolute w-[300px] left-[115px] top-[20px]"
              style={{ fontFamily: "Inika" }}
            >
              <h1 className="font-bold text-[35px] leading-[65px] text-brown" >SereneBooks</h1>
            </div>
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a
                href="#"
                className="absolute w-[98px] h-[31px] left-[680px] top-[35px] font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="absolute w-[98px] h-[31px] left-[820px] top-[35px] font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="absolute w-[98px] h-[31px] left-[1010px] top-[35px] font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="absolute w-[98px] h-[31px] left-[1140px] top-[35px] font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="absolute w-[150px] h-[31px] left-[1275px] top-[35px] font-bold text-[25px] leading-[33px] text-red hover:underline"
                style={{ fontFamily: "Inika" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div
          className="absolute w-[1440px] h-0 left-[0px] top-[105px] border border-black"
          style={{ transform: "rotate(180deg)" }}
        ></div>
      </div>
    </>
  );
};

export default PromoHeader;
