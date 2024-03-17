import React from "react";

const img =
  "https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const ResponsiveCard = () => {
  return (
    <div className="flex flex-col lg:flex-row border border-gray-100 rounded overflow-hidden m-2">
      <img
        src={img}
        alt="Random"
        className="w-full lg:w-1/2 h-48 lg:h-auto object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center text-center lg:w-1/2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">The History of Lorem Ipsum</h3>
          <p className="text-sm">
            It was originally taken from a Latin text written by a Roman
            Scholar, Sceptic and Philosopher by the name of Marcus Tullius
            Cicero, who influenced the Latin language greatly.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            The History of Lorem Ipsum 2
          </h3>
          <p className="text-sm">
            The filler text we know today has been altered over the years in
            fact. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium sequi, magnam vitae fugiat similique corporis a commodi
            nesciunt voluptas is not actually a Latin word. It is suggested that
            the reason that the text starts with Lorem is because there was a
            page break spanning the word Do-lorem. If you are looking for a
            translation of the text, it is meaningless. The original text talks
            about the pain and love involved in the pursuit of pleasure or
            something like that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
