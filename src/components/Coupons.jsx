import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge, Modal } from 'react-bootstrap';
import './Coupons.css';

export default function Coupons() {
  const [userProfile, setUserProfile] = useState({ name: '', points: 0 });
  const [showModal, setShowModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);



useEffect(() => {
  const savedData = localStorage.getItem('userProfile');
  
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    setUserProfile({
      name: parsedData.name || 'User',
      points: parsedData.points || 0
    });
  } else {
    const newProfile = { name: 'User', points: 0 };
    setUserProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile));
  }
}, []);

  // Fake coupon data
  const [fakeCoupons, setFakeCoupons] = useState([
    { id: 1, shop: "Green Bean Cafe", offer: "Free Oat Milk Latte", cost: 100, category: "Food", qty: 5 },
    { id: 2, shop: "Urban Roots", offer: "20% Off Native Plants", cost: 250, category: "Retail", qty: 2 },
    { id: 3, shop: "Eco-Cinema", offer: "BOGO Ticket", cost: 500, category: "Experience", qty: 0 },
    { id: 4, shop: "Sprouts Deli", offer: "$5 Off Any Sandwich", cost: 150, category: "Food", qty: 10 },
  ]);

  const handleRedeemClick = (coupon) => {
    if (userProfile.points >= coupon.cost && coupon.qty > 0) {
      setSelectedCoupon(coupon);
      setShowModal(true);
    }
  };

const confirmRedemption = () => {
  const newPoints = userProfile.points - selectedCoupon.cost;
  const claimCode = "OPRIT-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  const updatedProfile = { ...userProfile, points: newPoints };
  setUserProfile(updatedProfile);
  localStorage.setItem('userProfile', JSON.stringify(updatedProfile));

  const history = JSON.parse(localStorage.getItem('redemptionHistory')) || [];
  const newEntry = {
    offer: selectedCoupon.offer,
    shop: selectedCoupon.shop,
    cost: selectedCoupon.cost,
    code: claimCode,
    date: new Date().toLocaleDateString()
  };
  localStorage.setItem('redemptionHistory', JSON.stringify([newEntry, ...history]));

  setFakeCoupons(prev => prev.map(c => 
    c.id === selectedCoupon.id ? { ...c, qty: c.qty - 1 } : c
  ));

  setShowModal(false);
  alert(`Success! Code: ${claimCode}`);
};

  return (
    <div className="coupon-page-bg">
      <Container className="py-5">
        <header className="text-center mb-5">
          <h1 className="nav-style-font text-dark">REWARDS TREASURY</h1>
          <div className="points-status">
            YOUR BALANCE: <span className="text-success fw-bold">{userProfile.points} PTS</span>
          </div>
        </header>

        <Row xs={1} md={2} lg={3} className="g-4">
          {fakeCoupons.map((coupon) => {
            const canAfford = userProfile.points >= coupon.cost;
            const isSoldOut = coupon.qty === 0;

            return (
              <Col key={coupon.id}>
                <div className={`coupon-card ${isSoldOut ? 'sold-out' : ''} ${!canAfford ? 'locked' : ''}`}>
                  <div className="coupon-left">
                    <Badge bg={canAfford && !isSoldOut ? "success" : "secondary"} className="mb-2">
                      {coupon.category}
                    </Badge>
                    <h4 className="nav-style-font">{coupon.shop}</h4>
                    <p className="offer-text">{coupon.offer}</p>
                    <small className="text-muted">{isSoldOut ? "NONE LEFT" : `${coupon.qty} REMAINING`}</small>
                  </div>
                  
                  <div className="coupon-right">
                    <div className="price-tag">{coupon.cost}</div>
                    <div className="pts-label">PTS</div>
                    <Button 
                      variant={canAfford && !isSoldOut ? "dark" : "secondary"}
                      className="redeem-btn"
                      onClick={() => handleRedeemClick(coupon)}
                      disabled={!canAfford || isSoldOut}
                    >
                      {isSoldOut ? "OUT" : !canAfford ? "LOCKED" : "REDEEM"}
                    </Button>
                  </div>

                  <div className="punch-hole top"></div>
                  <div className="punch-hole bottom"></div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* --- Redemption Confirmation Modal --- */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title className="nav-style-font">Confirm Redemption</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to spend <strong>{selectedCoupon?.cost} points</strong> for the 
            "<strong>{selectedCoupon?.offer}</strong>" at {selectedCoupon?.shop}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="success" onClick={confirmRedemption}>Yes, Spend My Points!</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}