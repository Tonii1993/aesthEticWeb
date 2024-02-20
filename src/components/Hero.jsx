import React from "react";
import Button from "../layouts/Button";

const img =
  "https://images.pexels.com/photos/5327864/pexels-photo-5327864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor">
      {/* content section  */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-ExtraDarkColor">
          Discovering and Defining Your Own Beauty!
        </h1>
        <p className="text-DarkColor font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          assumenda corrupti, voluptate commodi pariatur impedit obcaecati
          incidunt ducimus adipisci expedita officiis totam eaque!
        </p>

        <Button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium mt-4">
          Contact Us
        </Button>
      </div>

      {/* img section */}
      <div className="hidden lg:block lg:w-1/2 bg-DarkColor p-5 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl mt-10">
        <img
          className="w-full h-full object-cover rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl"
          src={img}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Hero;
