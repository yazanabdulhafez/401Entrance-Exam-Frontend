import React, { Component } from 'react';
import { Card, Col ,Button, Row} from 'react-bootstrap';

export class Fruit extends Component {
  render() {
    return (
      <div>
        <Row>
      { this.props.apiData.map((element,index)=>{
        return <Col key={index} style={{margin:'10px'}}>
        <Card style={{ width: '18rem',height:'400px' }}>
  <Card.Img variant="top" src={element.image} />
  <Card.Body style={{overflow:'auto'}}>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
    price: {element.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button onClick={()=>this.props.addNewFavFruit(element)} variant="primary">Add To Fav List</Button>
  </Card.Footer>
</Card>
        </Col>
      }
      ) 
  }
  </Row>
      </div>
    )
  }
}

export default Fruit;
