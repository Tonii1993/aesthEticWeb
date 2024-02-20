import Card from "react-bootstrap/Card";
import Button from "./Button";

const NewsCard = ({ title, review, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{review}</Card.Text>
        <Button className="nav-btn bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
