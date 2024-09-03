import React, { useState } from "react";
import { TrustedByCurvedline } from "../Components/Svg";
import CoccaCollaImg from "../assets/Cola.png";
import twitterImg from "../assets/Twitter.png";
import microsoftImg from "../assets/microsoft.png";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const logos = [
  { name: "Cocca Colla", src: CoccaCollaImg },
  { name: "Twitter Logo", src: twitterImg },
  { name: "Microsoft Logo", src: microsoftImg },
];

function Slider() {
  const [visibleLogos, setVisibleLogos] = useState([0, 1, 2]);

  const nextSlide = () => {
    setVisibleLogos((prevLogos) => {
      const lastIndex = prevLogos[2];
      const newLastIndex = (lastIndex + 1) % logos.length;
      return [prevLogos[1], prevLogos[2], newLastIndex];
    });
  };

  const prevSlide = () => {
    setVisibleLogos((prevLogos) => {
      const firstIndex = prevLogos[0];
      const newFirstIndex = (firstIndex - 1 + logos.length) % logos.length;
      return [newFirstIndex, prevLogos[0], prevLogos[1]];
    });
  };

  return (
    <div className="mt-12 md:mt-24">
      <div className="app-container flex flex-col justify-center items-center gap-5">
        <p className="text-3xl text-center md:text-4xl font-bold">
          <span className="text-black relative inline-block">
            Trusted by
            <TrustedByCurvedline className="absolute -bottom-3 left-0 w-full" />
          </span>
        </p>
        <p className="text-center text-secondaryColor max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden mt-10">
        <div className="flex items-center justify-center h-40 bg-transparent">
          <button
            onClick={prevSlide}
            className="absolute left-2 z-10 p-2 rounded-full"
            aria-label="Previous slide"
          >
            <SlArrowLeft className="text-blue-600" />
          </button>
          <div className="flex transition-transform duration-300 ease-in-out">
            {visibleLogos.map((index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4">
                <img
                  src={logos[index].src}
                  alt={logos[index].name}
                  className="h-16 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-2 z-10 p-2"
            aria-label="Next slide"
          >
            <SlArrowRight className="text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
