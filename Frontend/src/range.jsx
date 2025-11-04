 import React from "react";
import r1 from "./assets/range/r1.png";
import r2 from "./assets/range/r2.png";
import r3 from "./assets/range/r3.png";

export default function RangeSection() {
  const images = [r1, r2, r3];
  const texts = ["Dining", "Living", "Bedroom"];

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-36 py-12 w-full">
      <h2
        className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 text-center"
        style={{ fontFamily: "Poppins, sans-serif", color: "#333333" }}
      >
        Browse The Range
      </h2>

      <p
        className="text-base sm:text-base md:text-lg lg:text-xl mb-10 text-center max-w-3xl mx-auto"
        style={{ fontFamily: "Poppins, sans-serif", color: "#333333" }}
      >
        Discover our wide range of furniture crafted to suit every style and
        space.
      </p>

      <div className="flex flex-wrap md:flex-nowrap w-full gap-6 items-center justify-center">
        {images.map((img, i) => (
          <div key={i} className="w-full sm:w-[41.6%] lg:w-1/3 flex flex-col items-center">
            <img
              src={img}
              alt={`range-${i + 1}`}
              className="w-full h-64 sm:h-72 md:h-[55vh] object-cover rounded-sm shadow-md mb-4"
            />
            <p
              className="text-lg sm:text-xl md:text-xl font-normal text-center"
              style={{ fontFamily: "Poppins, sans-serif", color: "#333333" }}
            >
              {texts[i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
