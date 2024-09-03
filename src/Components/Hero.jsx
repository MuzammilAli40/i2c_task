import React from "react";
import { CurvedUnderline } from "../Components/Svg";
import { userData } from "../utils/data";
import bitcoin from "../assets/bitcoin.png";
import bubbles from "../assets/small-bubbles.png";

const Hero = () => {
  return (
    <div className="app-container px-4 mt-12 md:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <div class="w-28 h-28 bg-[#FFDF7C] blur-2xl rounded-full absolute bottom-32 -left-8 z-10 hidden xl:block"></div>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Lorem ipsum{" "}
            <span className="text-[#46b0e6] relative inline-block">
              dolor
              <CurvedUnderline className="absolute -bottom-2 left-0 w-full" />
            </span>{" "}
            sit
            <br />
            amet yo <span className="text-2xl">👋</span>
          </h1>
          <div className="flex flex-col gap-4 mt-12 z-50">
            {userData.map((user, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <img
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  src={user.img}
                  alt={user.name}
                />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-secondaryColor">{user.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div class="w-28 h-28 bg-[#FFDF7C] blur-2xl rounded-full absolute top-16 left-16"></div>
          <img
            src={bitcoin}
            alt="Bitcoin character"
            className="w-full max-w-md mx-auto z-10 relative"
          />
          <img
            src={bubbles}
            alt="Bubbles"
            className="absolute inset-0 w-full h-full object-contain z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
