import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // This is imported as 'logo'

export default function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#d9ebd3' }} className="py-3 px-4 shadow-sm">
      <Container fluid className="d-flex justify-content-between align-items-center">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1">
          <Nav className="w-100 d-flex justify-content-around">
            <Nav.Link as={Link} to="/" className="fw-bold text-success">HOME</Nav.Link>
            <Nav.Link as={Link} to="/findOpportunities" className="fw-bold text-success">FIND OPPORTUNITIES</Nav.Link>
            <Nav.Link as={Link} to="/submissions" className="fw-bold text-success">SUBMISSIONS</Nav.Link>
            <Nav.Link as={Link} to="/coupons" className="fw-bold text-success">COUPONS</Nav.Link>
            <Nav.Link as={Link} to="/myProfile" className="fw-bold text-success">MY PROFILE</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand as={Link} to="/" className="ms-4 p-0 d-flex align-items-center">
           <img src={logo} alt="Oprit" style={{ height: '80px' }} />
        </Navbar.Brand>
        
      </Container>
    </Navbar>
  );
}