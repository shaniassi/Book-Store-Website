import React from "react";
import Banner from "../../../assets/Banner2.png";

const Hero = () => {
  return (
    <div>
      <a
        href="#"
        className="absolute w-[650px] h-[500px] left-[745px] top-[170px]"
      >
        <img src={Banner} alt="Banner" />
        <div
          className="absolute w-[256px] h-[31px] left-[-548px] top-[60px]"
        >
            <h2 className="font-bold text-3xl leading-[52px] text-red" style={{ fontFamily: "Inika" }}>SereneBooks</h2>
        </div>
        <div
          className="absolute w-[472px] h-[31px] left-[-550px] top-[110px]" style={{ fontFamily: "Inika" }}
        >
            <h1 className="font-bold text-5xl leading-[65px] text-brown">Discover Serenity</h1>
            <h1 className="top-[158px] font-bold text-5xl text-brown">Through Pages</h1>
        </div>
        <div
          className="absolute w-[472px] left-[-544px] top-[250px] text-brown"
          style={{ fontFamily: "Inika" }}
        >
          <p className="text-[20px] leading-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            dictum sit amet justo donec enim diam.
          </p>
        </div>
      </a>
      <div className="absolute w-[200px] h-[45px] left-[200px] top-[550px] bg-red rounded-[20px]">
        <div className="absolute w-[160px] h-[31px] left-[45px] top-[3px] font-bold text-[23px] leading-[39px] text-white hover:underline" style={{ fontFamily: "Inika" }}>
          Read More
        </div>
      </div>
    </div>
  );
};

export default Hero;
