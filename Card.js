import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard() {
  return (
    <Card>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/14/05/26/children-1822701_960_720.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;

