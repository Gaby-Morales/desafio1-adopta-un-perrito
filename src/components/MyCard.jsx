import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function MyCard({ data }) {
  const { description, image, name, tags } = data;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>
          {tags.map((tag, index) => (
            <Tags key={index} text={tag.name} backgroundColor={tag.color} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
