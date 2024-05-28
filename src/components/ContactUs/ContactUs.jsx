import React from "react";
import contacts from "../../assets/contacts.png";

const ContactUs = () => {
  return (
    <div className="bg-customBackground min-h-screen">
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
          className="absolute w-[100px] h-[31px] left-[35px] top-[105px] font-bold text-2xl leading-39 text-red"
          style={{ fontFamily: "Inika" }}
        >
          Email
        </div>
        <div
          className="absolute w-[100px] h-[31px] left-[315px] top-[105px] font-bold text-2xl leading-39 text-red"
          style={{ fontFamily: "Inika" }}
        >
          Telephone
        </div>
        <div
          className="absolute w-[100px] h-[31px] left-[635px] top-[105px] font-bold text-2xl leading-39 text-red"
          style={{ fontFamily: "Inika" }}
        >
          Email
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
