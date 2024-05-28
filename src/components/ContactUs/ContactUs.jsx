import React from "react";
import contacts from "../../assets/contacts.png";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="bg-customBackground h-screen"
      style={{ height: "630px" }}
    >
      <div className="absolute w-full h-[360px] top-[3000px] bg-white opacity-50"></div>
      <div className="absolute left-[625px] top-[3040px] z-10">
        <h1
          className="font-bold text-4xl leading-31 text-red"
          style={{ fontFamily: "Inika", display: "inline-block" }}
        >
          Contact Us
        </h1>
      </div>
      <div className="absolute w-[729px] h-[130px] left-[355px] top-[3125px] bg-cover bg-center">
        <img src={contacts} alt="" />
        <div
          className="absolute h-[31px] top-[105px] font-normal text-base leading-39 text-red"
          style={{ fontFamily: "Inika" }}
        >
          Brgy 45, Sta Mesa, Manila
        </div>
        <div
          className="absolute h-[31px] left-[315px] top-[105px] font-normal text-base leading-39 text-red"
          style={{ fontFamily: "Inika" }}
        >
          +(09)245618273
        </div>
        <div
          className="absolute h-[31px] left-[590px] top-[105px] font-normal text-base leading-39 text-red"
          style={{ fontFamily: "Inika" }}
        >
          serenepages@gmail.com
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
