import React from "react";
import Button from "../layouts/Button";
import { BsCollectionPlay } from "react-icons/bs";

const BeautyHero = () => {
  const handleClickButton = () => {
    window.open("https://www.youtube.com/hashtag/doktorplastik", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-8 text-white bg-[url('https://images.pexels.com/photos/4266946/pexels-photo-4266946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat">
      <div className="text-center lg:text-left sm:text-left sm:w-1/2 lg:w-1/2">
        <h3 className="text-lg lg:text-2xl font-semibold leading-tight text-SecondaryColor">
          MY BEAUTY SOLUTIONS!
        </h3>
        <p className="text-SecondaryColor font-medium text-sm lg:text-base mt-2 lg:mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          assumenda corrupti, voluptate commodi pariatur impedit obcaecati
          incidunt ducimus adipisci expedita officiis totam eaque!
        </p>

        <Button
          onClick={handleClickButton}
          className="bg-ExtraDarkColor text-white py-2 px-4 font-medium mt-3"
        >
          <span className="flex flex-row items-center">
            <BsCollectionPlay className="mr-1" /> Watch Episodes
          </span>
        </Button>
      </div>
    </div>
  );
};

export default BeautyHero;
