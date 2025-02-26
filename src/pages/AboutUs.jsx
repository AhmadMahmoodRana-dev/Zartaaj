import React from "react";
import header from "../assets/img.png"
import ceo from "../assets/ceo.jpg"

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

      {/* Founder Section */}
<div className="bg-white py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Meet The Founder
    </h2>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Profile Image */}
      <div className="md:w-2/3">
        <img
          src={ceo}
          alt="Company Founder"
          className="w-80 h-80 rounded-full mx-auto object-cover border-4 border-gray-100"
        />
      </div>

      {/* Profile Details */}
      <div className="md:w-2/3 text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
         Daniyal
        </h3>
        <p className="text-lg text-gray-600 mb-4 font-semibold">
          Founder, CEO & Operations Manager
        </p>
        <p className="text-gray-600 mb-4">
          Visionary leader and hands-on operator managing all aspects of our company. 
          With expertise in strategic management, marketing, and product development, 
          Sarah oversees daily operations while driving innovation in the beauty industry.
        </p>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
          <ul className="text-gray-600 list-disc list-inside space-y-1 mx-auto md:mx-0">
            <li>Business Strategy & Development</li>
            <li>Marketing & Brand Management</li>
            <li>Operations & Finance Oversight</li>
            <li>Product Innovation & Research</li>
          </ul>
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
