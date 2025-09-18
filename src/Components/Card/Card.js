import React, { Component } from "react";
import { Container, Card} from "react-bootstrap";
import './Card.css'

export default class Cards extends Component {

  render() {
    const {img, title, info} = this.props
    return (
      <Container className="card-container mt-2">
        <Card style={{ width: "18rem", height: "21rem"}}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {info}
            </Card.Text>
            <hr/>
            <p className="price">3,000,000 تومان</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
