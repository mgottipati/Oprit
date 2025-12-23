import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Shop.css';

export default function JewelryShop() {
    /*some products*/
  const products = [
    { id: 1, name: "Eco-Bead Bracelet", price: 15, points: 150, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Nature Leaf Pendant", price: 25, points: 250, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Ocean Wave Ring", price: 20, points: 200, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Tree of Life Earrings", price: 30, points: 300, img: "https://via.placeholder.com/200" },
  ];

  const handlePurchase = (product) => {
    alert(`Thank you for buying the ${product.name}! You just earned ${product.points} points.`);
  };

  return (
    <div className="shop-page-bg">
      <Container className="py-5">
        <header className="shop-header text-center mb-5">
          <h1 className="nav-style-font text-white">OPRIT STORE</h1>
          <p className="text-light">Every purchase supports our environmental missions and earns you points!</p>
        </header>

        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 shop-card">
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                  <Card.Text className="text-muted">${product.price}</Card.Text>
                  <Card.Text className="text-success fw-bold">EARN {product.points} PTS</Card.Text>
                  <Button 
                    variant="success" 
                    className="mt-auto fw-bold"
                    onClick={() => handlePurchase(product)}
                  >
                    COMING SOON
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}