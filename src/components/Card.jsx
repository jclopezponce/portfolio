import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardP(props) {
  return (
        <div className="cardproject"> 
      <Card style={{ width: '100%', border : "none" }}>
      <Card.Img variant="top" src={props.image} style={{maxHeight : "200px"}}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}
        </Card.Text>
        <Button variant="primary">{props.link}</Button>
      </Card.Body>
      </Card>
        </div>

/* <Card className="bg-dark text-white" style={{maxHeight : "300px"}}>
<Card.Img src={props.image} alt="Card image" style={{height : "30%"}}/>
<Card.ImgOverlay>
  <div>
  <Card.Title>{props.name}</Card.Title>
  <Card.Text>
  {props.description}
  </Card.Text>
  <Card.Text>{props.link}</Card.Text>
  </div>
</Card.ImgOverlay>
</Card> */

      
  );
}

export default CardP;