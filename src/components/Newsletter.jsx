import React from "react";
import Button from "../layouts/Button";

const Newsletter = () => {
  return (
    <section className="mt-10 p-10">
      <div className="container mx-auto flex flex-col items-center justify-center rounded-2xl bg-PrimaryColor px-6 py-16 max-w-6xl">
        <h2 className="text-black text-2xl font-bold md:text-3xl mb-3">
          Be the first who sees the news
        </h2>
        <p className="text-black text-center text-base md:w-7/12 mb-6">
          Your company may not be in the software business, but eventually, a
          software company will be in your business.
        </p>
        <div className="flex flex-col gap-3 w-full md:flex-row justify-center">
          <input
            type="email"
            placeholder="Email"
            className="form-input text-black bg-backgroundColor border-2 border-gray-600 px-4 py-2 w-full md:w-auto rounded-md"
          />
          <Button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
