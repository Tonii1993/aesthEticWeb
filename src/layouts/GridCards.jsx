import React from "react";
import Card from "./Card";

const cardsData = [
  {
    id: 1,
    title: "CORRECT WITH DERMAL FILLERS",
    description:
      "Hyaluronic acid gels can be injected into the dermis to fill wrinkles and give volume to the face.",
    imageUrl:
      "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "REVITALIZE WITH NCTF",
    description:
      "NCTF® products combine hyaluronic acid and different active ingredients vitamins, amino acids etc) for revitalized and perfected skin..",
    imageUrl:
      "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "ENHANCE WITH COSMETICS",
    description:
      "The SKIN PERFUSION skincare range is designed to enhance the results of aesthetic procedures and to offer a complete solution for in-office and daily home use.",
    imageUrl:
      "https://images.pexels.com/photos/163186/globuli-medical-bless-you-homeopathy-163186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "RENEW WITH SUPERFICIAL PEELS",
    description:
      "Superficial chemical peels formulated with gluconolactone help stimulate the renewal of the epidermis.",
    imageUrl:
      "https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function GridCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 p-5">
      {cardsData.map((card) => (
        <div key={card.id}>
          <Card
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}

export default GridCards;
