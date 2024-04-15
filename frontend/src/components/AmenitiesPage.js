import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'; // Make sure to install axios if you haven't

function AmenitiesPage() {
  // Step 1: Create a state variable to store the cards data
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
		  const response = await axios.get('http://localhost:3000/cards');
		  console.log(response.data);
        setCards(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Failed to fetch cards:', error);
      }
    };

    fetchCards();
  }, []); // The empty array ensures this effect runs only once after the initial render

  // Render the fetched cards dynamically
  return (
    <Row>
      {cards.map((card, index) => (
        <Col md={3} key={card._id || index}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.imageUrl || 'path/to/default/image.jpg'} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>
                {card.detail}
              </Card.Text>
              <Button variant="primary">Request</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AmenitiesPage;
