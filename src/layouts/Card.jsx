import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-lg mx-auto bg-PrimaryColor shadow-md rounded-md overflow-hidden">
      <div className="p-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {description && (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 md:h-64 object-cover"
      />
    </div>
  );
};

export default Card;
