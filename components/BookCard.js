import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookCard = ({ image, title, author, price, description }) => (
  <Card style={{ width: '18rem' }}>
  
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Author: {author}</Card.Text>
      <Card.Text>Price: ${price}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <span><Button variant="primary" href="/book-details">View Details</Button></span>
     <span> <Button variant="secondary" className="ml-2">Add to Cart</Button></span>
    </Card.Body>
  </Card>
);

export default BookCard;
