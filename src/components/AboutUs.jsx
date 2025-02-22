import React from "react";
import header from "../assets/img.png"
const AboutUs = () => {
  return (
    <>
      <div className="w-full lg:min-h-[68vh] h-auto  md:flex justify-center items-center  px-6  lg:px-16 bg-[#ededed]">
        <div className="md:w-[50%] w-full image flex justify-center items-center md:mt-0 mt-10">
          <img
            className=" object-cover w-[60%] h-[90%]"
            src={header}
            alt="Zartaaj Royal Glow"
          />
        </div>
        <div className="Content md:w-[50%] h-full xl:pl-14 lg:pl-6 py-4 md:mt-0 mt-6 md:text-left text-center">
          <h1 className="xl:text-2xl lg:text-xl text-purple-800 font-bold mb-4">
            ABOUT US
          </h1>
          <h1 className="uppercase xl:text-6xl lg:text-5xl md:text-4xl text-4xl font-semibold xl:leading-[4.4rem] lg:leading-[3.4rem] tracking-wider text-black">
            <span className="text-purple-800">day & night</span>
            <br />
            premium cream
          </h1>
          <p className="text-gray-600 xl:text-xl lg:text-[1rem] text-sm lg:mt-8 mt-5 xl:pr-0 lg:pr-8 md:pr-2 pr-0">
            Beauty isn’t just a routine—it’s a statement. At Zartaaj, we
            redefine skincare with scientifically crafted formulas that enhance
            your natural glow. Infused with premium ingredients, our beauty
            creams work to nourish, repair, and revitalize your skin. Step into
            a world where luxury meets self-care, and let your skin shine with
            confidence
          </p>
          <button className="bg-purple-800 px-4 py-2 mt-6 rounded-md text-white font-semibold">
            About More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
