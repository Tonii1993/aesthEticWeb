import React from "react";
import { useParams } from "react-router-dom";

import DetailedCard from "./DetailedCard";

const items = [
  {
    id: 1,
    title: "DO’S AND DON’TS OF DERMAL FILLERS",
    discover:
      "Discover essential tips for radiant skin with cleansing, exfoliation, and vitamin insights. Click to uncover your ultimate skincare guide now!",
    imgUrl:
      "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Ready to take the plunge into dermal fillers? Well done! And rest assured, when performed by aesthetic medicine professionals, the results are stunning, both for your skin and your self-confidence. To make this experience even better, let us guide you through a few best practices. Let’s discover together the dos and don’ts before and after dermal fillers. Here we go!",
  },
  {
    id: 2,
    title: "WHAT TO EXPECT DURING A LIP FILLER PROCEDURE?",
    discover:
      "Discover essential tips for radiant skin with cleansing, exfoliation, and vitamin insights. Click to uncover your ultimate skincare guide now!",
    imgUrl:
      "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Ready to take the plunge into dermal fillers? Well done! And rest assured, when performed by aesthetic medicine professionals, the results are stunning, both for your skin and your self-confidence. To make this experience even better, let us guide you through a few best practices. Let’s discover together the dos and don’ts before and after dermal fillers. Here we go!",
  },
  {
    id: 3,
    title: "HOW TO GET GLOWY SKIN? A GUIDE FOR BEAUTIFUL RADIANT SKIN",
    discover:
      "Discover essential tips for radiant skin with cleansing, exfoliation, and vitamin insights. Click to uncover your ultimate skincare guide now!",
    imgUrl:
      "https://images.pexels.com/photos/459971/pexels-photo-459971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Ready to take the plunge into dermal fillers? Well done! And rest assured, when performed by aesthetic medicine professionals, the results are stunning, both for your skin and your self-confidence. To make this experience even better, let us guide you through a few best practices. Let’s discover together the dos and don’ts before and after dermal fillers. Here we go!",
  },
  {
    id: 4,
    title: "News 4",
    discover:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, magni tempore sunt quos reiciendis numquam alias aliquam maxime quod nostrum neque reprehenderit autem quibusdam esse consequuntur accusamus unde incidunt dolor temporibus quia vitae atque.",
    imgUrl:
      "https://images.pexels.com/photos/9489935/pexels-photo-9489935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Ready to take the plunge into dermal fillers? Well done! And rest assured, when performed by aesthetic medicine professionals, the results are stunning, both for your skin and your self-confidence. To make this experience even better, let us guide you through a few best practices. Let’s discover together the dos and don’ts before and after dermal fillers. Here we go!",
  },
  {
    id: 5,
    title: "News 5",
    discover:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, magni tempore sunt quos reiciendis numquam alias aliquam maxime quod nostrum neque reprehenderit autem quibusdam esse consequuntur accusamus unde incidunt dolor temporibus quia vitae atque.",
    imgUrl:
      "https://images.pexels.com/photos/8667949/pexels-photo-8667949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Ready to take the plunge into dermal fillers? Well done! And rest assured, when performed by aesthetic medicine professionals, the results are stunning, both for your skin and your self-confidence. To make this experience even better, let us guide you through a few best practices. Let’s discover together the dos and don’ts before and after dermal fillers. Here we go!",
  },
];

const DetailedNewsPage = () => {
  const { id } = useParams();

  const newsId = parseInt(id);

  const selectedItem = items.find((item) => item.id === newsId);

  return (
    <>
      {selectedItem.id === 1 && (
        <DetailedCard
          imgUrl={selectedItem.imgUrl}
          discover={selectedItem.discover}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
      {selectedItem.id === 2 && (
        <DetailedCard
          imgUrl={selectedItem.imgUrl}
          discover={selectedItem.discover}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
      {selectedItem.id === 3 && (
        <DetailedCard
          imgUrl={selectedItem.imgUrl}
          discover={selectedItem.discover}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
      {selectedItem.id === 4 && (
        <DetailedCard
          imgUrl={selectedItem.imgUrl}
          discover={selectedItem.discover}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
      {selectedItem.id === 5 && (
        <DetailedCard
          imgUrl={selectedItem.imgUrl}
          discover={selectedItem.discover}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
    </>
  );
};

export default DetailedNewsPage;
