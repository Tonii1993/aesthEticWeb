import React from "react";

const Gallery = () => {
  return (
    <section className="py-6">
      <div className="container bg-gray-100 rounded-sm flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 sm:grid-cols-2">
          <img
            className="object-cover w-full aspect-square"
            src="https://source.unsplash.com/random/300x300/?1"
          />
          <img
            className="object-cover w-full  aspect-square"
            src="https://source.unsplash.com/random/300x300/?2"
          />
          <img
            className="object-cover w-full  aspect-square"
            src="https://source.unsplash.com/random/300x300/?3"
          />
          <img
            className="object-cover w-full  aspect-square"
            src="https://source.unsplash.com/random/300x300/?4"
          />
          <img
            className="object-cover w-full  aspect-square"
            src="https://source.unsplash.com/random/300x300/?5"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
