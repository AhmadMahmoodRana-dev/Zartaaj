import React from "react";
import header from "../assets/img.png";
import ceo from "../assets/ceo.jpg";
import marketting from "../assets/marketting.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Zartaaj</h1>
          <p className="text-xl">
            Elevating beauty naturally with premium skincare solutions
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto md:px-20 px-6 py-16">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 lg:pr-12">
            <h2 className="text-3xl font-bold md:text-left text-center text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 md:text-lg mb-6 md:text-left text-center">
              At Zartaaj, we are dedicated to empowering individuals with
              high-quality, natural, and effective skincare solutions. Our
              mission is to enhance your beauty while nurturing your skin with
              the finest, carefully selected ingredients. We believe in bringing
              out your natural radiance, ensuring that your skin remains
              healthy, glowing, and full of life. Experience skincare that truly
              cares – because your beauty deserves the best!
            </p>
          </div>
          <div className="w-full md:w-1/2  flex-col justify-center items-center md:flex hidden">
            <img
              src={header}
              className="w-[60%]"
              alt="Our Mission"
              // className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative  after:bg-purple-500 after:absolute after:left-1/2 after:-translate-x-1/2 after:mt-6">
            Leadership Team
          </h2>

          {/* CEO Section */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-24">
            {/* Profile Image */}
            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-purple-100 rounded-full transform group-hover:rotate-6 transition duration-500"></div>
              <img
                src={ceo}
                alt="CEO"
                className="relative w-96 h-96 rounded-full mx-auto object-cover border-8 border-white shadow-xl transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Profile Details */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full mb-4 text-sm font-semibold">
                Founder & CEO
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Daniyal
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                Visionary leader driving innovation in the beauty industry. With
                12+ years of experience, Daniyal combines strategic insight with
                hands-on execution to deliver exceptional results while
                maintaining our core values of sustainability and inclusivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-gray-800">
                    Featured in:
                  </span>
                  <span className="text-gray-600">
                    Forbes, BeautyInc, Vogue
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Manager Section */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Profile Image */}
            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-blue-100 rounded-full transform group-hover:-rotate-6 transition duration-500"></div>
              <img
                src={marketting}
                alt="Marketing Manager"
                className="relative w-96 h-96 rounded-full mx-auto object-cover border-8 border-white shadow-xl transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Profile Details */}
            <div className="md:w-1/2 text-center md:text-right">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4 text-sm font-semibold">
                Marketing Manager
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Zohaib Ali
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                Creative force behind our brand's digital presence. With a
                passion for storytelling and data-driven strategies, Alex has
                successfully launched campaigns that increased our social
                engagement by 300% and customer acquisition by 150%.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-end space-x-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-1a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">
                    Specialties:
                  </span>
                  <span className="text-gray-600">
                    Digital Strategy, Brand Development
                  </span>
                </div>
                <h1 className="text-black font-bold flex gap-4 justify-end">
                  Contact:
                  <span className="text-purple-600 font-medium">
                    03121411749
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">
              Harnessing the power of nature to nourish and rejuvenate skin.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Skin Health</h3>
            <p className="text-gray-600">
              Committed to promoting long-term skin wellness and beauty.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12l5 5L20 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Blending tradition with science for exceptional skincare results.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience the Zartaaj Glow
          </h2>
          <p className="text-lg mb-6">
            Join us on a journey to radiant, healthy skin with our premium
            beauty solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
