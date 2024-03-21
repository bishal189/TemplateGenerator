import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoIosSearch } from "react-icons/io";
import "./Header.css"

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">legaltemplates.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Business" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Non-Disclosure Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">Employment Contract</NavDropdown.Item>
              <NavDropdown.Item href="">Release of Liability</NavDropdown.Item>
              <NavDropdown.Item href="">Purchase Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">Partnership Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">View all forms</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Real Estate" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Lease Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">Eviction Notice</NavDropdown.Item>
              <NavDropdown.Item href="">Lease Termination</NavDropdown.Item>
              <NavDropdown.Item href="">Quitclaim Deed</NavDropdown.Item>
              <NavDropdown.Item href="">Rental Application</NavDropdown.Item>
              <NavDropdown.Item href="">View all forms</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Estate Planning" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Power of Attorney</NavDropdown.Item>
              <NavDropdown.Item href="">Last Will and Testament</NavDropdown.Item>
              <NavDropdown.Item href="">Advance Directive</NavDropdown.Item>
              <NavDropdown.Item href="">Living Will</NavDropdown.Item>
              <NavDropdown.Item href="">Do not Resuscitate</NavDropdown.Item>
              <NavDropdown.Item href="">View all forms</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Personal" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Bill of Sale</NavDropdown.Item>
              <NavDropdown.Item href="">Affidavit</NavDropdown.Item>
              <NavDropdown.Item href="">Promissory Note</NavDropdown.Item>
              <NavDropdown.Item href="">Divorce Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">Child Travel Consent</NavDropdown.Item>
              <NavDropdown.Item href="">Loan Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">View all forms</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Nav>
            <Nav.Link href="#"><IoIosSearch /></Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="">About Us</NavDropdown.Item>
              <NavDropdown.Item href="">Chat Online</NavDropdown.Item>
              <NavDropdown.Item href="">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
