import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "Nadia F.",
    review: "Zartaaj has completely transformed my skin! It feels softer, smoother, and has a beautiful glow. Absolutely love it!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Zainab L.",
    review: "This cream is lightweight and absorbs quickly. My skin stays fresh and hydrated all day. Highly recommended!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Hina R.",
    review: "The texture is rich, yet non-greasy. My skin looks radiant and feels so soft. Zartaaj is now my go-to!",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Aisha M.",
    review: "I have sensitive skin, and this cream is perfect! No irritation, just smooth and healthy skin. Absolutely love it!",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sarah K.",
    review: "Great for dry skin! It keeps my face moisturized all day. I just wish it had a fragrance-free option.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white mx-4 h-[250px] my-4 shadow-lg shadow-purple-800 rounded-2xl p-6 flex flex-col items-center text-center">
      <img
        src={review.image}
        alt={review.name}
        className="w-16 h-16 rounded-full mb-4 border-2 border-gray-300"
      />
      <h3 className="text-lg font-semibold">{review.name}</h3>
      <p className="text-gray-600 text-sm mt-2">{review.review}</p>
      <div className="flex mt-3">
        {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="max-w-5xl mx-auto py-14">
       <h1 className="text-center xl:text-5xl lg:text-[3rem] md:text-5xl text-4xl font-semibold ">
        Customer Reviews
      </h1>
      <h1 className="text-center uppercase text-purple-800 xl:text-3xl lg:text-[1.9rem] md:text-3xl text-2xl font-semibold mb-10">
        OUR priorities
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
