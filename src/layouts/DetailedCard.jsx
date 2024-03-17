import React from "react";
import Seperator from "../components/Seperator";
import Newsletter from "../components/Newsletter";

const DetailedCard = ({ imgUrl, title, discover, description }) => {
  return (
    <>
      <div className="max-h-screen px-5 pt-24 lg:pt-18 lg:mb-8">
        <h2 className="flex justify-center lg:text-4xl text-2xl font-bold">
          News Details
        </h2>
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 lg:py-8 xl:max-w-6xl">
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              className="h-full w-full object-cover"
              src={imgUrl}
              alt={title}
            />
          </div>
          <div className="bg-white max-w-lg md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex flex-col p-12 md:px-16">
              <h2 className="text-xl font-medium uppercase text-green-800 lg:text-4xl">
                {title}
              </h2>
              <p className=" mt-4">{discover}</p>
            </div>
          </div>
        </div>
      </div>
      <Seperator
        className="flex flex-col justify-center lg:my-5 md:mt-20 md:pt-20 sm:mt-10 sm:pt-18"
        heading={title}
        paragraph={description}
      />
      <Newsletter />
    </>
  );
};

export default DetailedCard;
