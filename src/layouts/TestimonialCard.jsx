import React from "react";

const TestimonialCard = ({ name, img, text, country, age }) => {
  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-100 text-black">
      <div className="flex justify-between pb-4 border-b">
        <div className="flex items-center">
          <span className="mb-0 capitalize text-black">
            {name} {age} yo
          </span>
        </div>
        <span>{country}</span>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={img}
            alt={name}
            className="object-cover object-center w-full rounded-md h-4/6 md:h-64 lg:h-4/6"
          />
        </div>
        <div className="space-y-2">
          <div className="block">
            <h3 className="text-xl font-semibold text-black">
              How was your experience at WellCenter?
            </h3>
          </div>
          <p className="text-black">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
