import React from "react";
import heroImage from "./assets/hero.jpg";
const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover  flex items-center"
 style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
  }}    >
      {/* Spacer for left side (hidden on mobile) */}
      <div className="hidden md:flex flex-[0.8]"></div>

      {/* Right content box */}
      <div className="mt-1 flex-[1.2]  p-8 rounded-xl md:rounded-xl shadow-lg max-w-lg mx-4"
        style={{ backgroundColor: "#FFF3E3" }}
>
     <div className="flex flex-col items-start gap-4">
  <span className="text-sm uppercase text-gray-600">New Arrival</span>
  <h1 className="text-3xl md:text-4xl font-bold leading-snug text-left">
    Discover Our <br /> New Collection
  </h1>
  <p className="text-gray-700 text-left">
    Explore the latest trends in fashion and find the perfect piece
    that suits your style.
  </p>
  <button
    className="mt-4 px-6 py-3 font-bold text-white rounded"
    style={{ backgroundColor: "#BE973F" }}
  >
    BUY NOW
  </button>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
