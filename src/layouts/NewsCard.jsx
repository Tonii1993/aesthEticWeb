// NewsCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import TextExpander from "../components/TextExpander";
import { Link } from "react-router-dom";

const NewsCard = ({ id, title, review, img }) => {
  const descriptionMaxLength = 100;

  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Link to={`/news/${id}`}>
          <Card.Title className="text-base">{title}</Card.Title>
          <TextExpander text={review} maxLength={descriptionMaxLength} />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
