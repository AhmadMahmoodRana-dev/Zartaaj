import React from "react";
import { GiThreeLeaves } from "react-icons/gi";
const Advantages = () => {
  return (
    <section class="body-font">
      <h1 className="text-center xl:text-5xl lg:text-[3rem] md:text-5xl text-4xl font-semibold mt-10">
        THE ADVANTAGES
      </h1>
      <h1 className="text-center text-purple-800 xl:text-3xl lg:text-[1.9rem] md:text-3xl text-2xl font-semibold">
        OUR COSMETRICS
      </h1>
      <div class="container md:px-16 px-4 py-20 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="xl:w-1/3 md:w-1/2 w-full 2xl:px-14 xl:px-8 lg:px-8 px-4">
            <div class="flex flex-col justify-center items-center">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <GiThreeLeaves />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Only Natural Ingredients
              </h2>
              <p class="leading-relaxed text-base text-center">
                At Zartaaj, we harness the power of nature to nourish your skin.
                Our beauty cream is made with pure, natural ingredients, free
                from harsh chemicals and artificial additives. Experience
                skincare that’s safe, effective, and inspired by nature.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 w-full md:mt-0 mt-6">
            <div class="flex flex-col justify-center items-center 2xl:px-14 xl:px-8 lg:px-8 px-4">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <GiThreeLeaves />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Olutin Free
              </h2>
              <p class="leading-relaxed text-base text-center">
                Your skin deserves the best, which is why Zartaaj is completely
                Olutin-free. We use only skin-friendly ingredients, ensuring a
                luxurious and safe skincare experience. Enjoy a formula that’s
                as pure and gentle as it is effective.
              </p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 w-full md:mt-0 mt-6">
            <div class="flex flex-col justify-center items-center 2xl:px-14 xl:px-8 lg:px-8 px-4">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <GiThreeLeaves />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                For All Skin Types
              </h2>
              <p class="leading-relaxed text-base text-center">
                No matter your skin type, Zartaaj is made for you. Our
                lightweight, non-greasy formula hydrates, balances, and
                revitalizes your skin. Whether dry, oily, or sensitive, achieve
                a healthy, radiant glow every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
