import React from "react";
import { serviceData } from "../utils/data";

function Feedback() {
  return (
    <div className="app-container grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5 p-5 mt-20 rounded-lg">
      {serviceData.map((item, index) => (
        <div
          className="flex items-center gap-2 p-3 md:gap-5 md:p-7 bg-white"
          key={index}
        >
          <img
            className="h-16 w-16"
            src={item.img}
            alt={item.heading}
            loading="lazy"
          />
          <div>
            <h3 className="text-customeOrange font-medium">{item.heading}</h3>
            <p className="text-secondaryColor font-normal">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feedback;
