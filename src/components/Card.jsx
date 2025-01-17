import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardP(props) {
  return (
        <div className="cardproject"> 
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}
        </Card.Text>
        <Button variant="primary">{props.link}</Button>
      </Card.Body>
      </Card>
        </div>

      
  );
}

export default CardP;