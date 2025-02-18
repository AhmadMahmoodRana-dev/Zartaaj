import React from "react";
import header from "../assets/header.png"
const Header = () => {
  return (
    <div className="relative isolate px-6 lg:px-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="w-full h-[90vh] md:flex md:mt-0 mt-28 md:text-left text-center">
        <div className="content md:w-[50%] md:h-full w-full flex flex-col justify-center">
          <h1 className="xl:text-7xl lg:text-[3.3rem] md:text-4xl text-4xl font-semibold xl:leading-[4.7rem] lg:leading-[3.5rem] tracking-wider text-purple-800">
            Unveil <br /> <span className="text-black">Your Royal Glow</span>{" "}
            <br /> with Zartaaj
          </h1>
          <p className="text-gray-600 xl:text-xl lg:text-[.95rem] md:text-sm text-sm mt-8">
            At Zartaaj, we believe that beauty is more than just skin deep—it's
            an experience of pure elegance and confidence. Our premium beauty
            creams are crafted with the finest ingredients to nourish, hydrate,
            and rejuvenate your skin, giving you a radiant glow that lasts.
            Embrace the luxury of self-care with Zartaaj, because you deserve
            nothing but the best.
          </p>
        </div>
        <div className="md:w-[50%] w-full image flex justify-center items-center md:mt-0 mt-10">
          <img
            className=" object-cover w-full"
            src={header}
            alt="Zartaaj Royal Glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
