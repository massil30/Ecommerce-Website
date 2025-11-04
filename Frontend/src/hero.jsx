import React from "react";
import heroImage from "./assets/hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* left spacer */}
      <div className="hidden md:block md:flex-1" />

      {/* right content box */}
      <div
        className="mt-1 flex-1 p-8 rounded-xl shadow-lg max-w-lg mx-4 sm:mx-8"
        style={{ backgroundColor: "rgba(255,243,227,0.95)" }}
      >
        <div className="flex flex-col items-start gap-4">
          {/* New arrival: Poppins 1rem #333333 semi-bold */}
          <span
            className="text-base font-medium text-[#333333]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            New Arrival
          </span>

          {/* Title: bold two lines, Poppins, color #B88E2F */}
          <h1
            className="text-4xl font-bold leading-snug text-left"
            style={{ color: "#B88E2F", fontFamily: "Poppins, sans-serif" }}
          >
            Discover Our
            <br />
            New Collection
          </h1>

          {/* Body text: #333333 18px (1.125rem) medium, responsive using rem */}
          <p
            className="text-[1.125rem] font-normal text-[#333333]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Explore the latest trends in fashion and find the perfect piece
            that suits your style.
          </p>

          {/* BUY NOW: bold 1rem button, bg #BE973F */}
          <button
            className="mt-4 px-6 py-3 text-base font-semibold text-white "
            style={{ backgroundColor: "#BE973F", fontFamily: "Poppins, sans-serif" }}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
