import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoIosSearch } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

import "./Header.css";

function Header() {
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [showEstateDropdown, setShowEstateDropdown] = useState(false);
  const [showPersonalDropdown, setShowPersonalDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showRealStateDropdown, setShowRealStateDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand href="#home">legaltemplates.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Business"
              id="business-nav-dropdown"
              show={showBusinessDropdown}
              onMouseEnter={() => setShowBusinessDropdown(true)}
              onMouseLeave={() => setShowBusinessDropdown(false)}
            >
              <NavDropdown.Item href="">
                Non-Disclosure Agreement
              </NavDropdown.Item>
              <NavDropdown.Item href="">Employment Contract</NavDropdown.Item>
              <NavDropdown.Item href="">Release of Liability</NavDropdown.Item>
              <NavDropdown.Item href="">Purchase Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">Partnership Agreement</NavDropdown.Item>
              <NavDropdown.Item
                href=""
                style={{ display: "flex", alignItems: "center" }}
              >
                View all forms
                <GoArrowUpRight style={{ color: "blue", marginLeft: "5px" }} />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Real Estate"
              id="real-estate-nav-dropdown"
              show={showRealStateDropdown}
              onMouseEnter={() => setShowRealStateDropdown(true)}
              onMouseLeave={() => setShowRealStateDropdown(false)}
            >
              <NavDropdown.Item href="">Lease Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">Eviction Notice</NavDropdown.Item>
              <NavDropdown.Item href="">Lease Termination</NavDropdown.Item>
              <NavDropdown.Item href="">Quitclaim Deed</NavDropdown.Item>
              <NavDropdown.Item href="">Rental Application</NavDropdown.Item>
              <NavDropdown.Item
                href=""
                style={{ display: "flex", alignItems: "center" }}
              >
                View all forms
                <GoArrowUpRight style={{ color: "blue", marginLeft: "5px" }} />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Estate Planning"
              id="estate-nav-dropdown"
              show={showEstateDropdown}
              onMouseEnter={() => setShowEstateDropdown(true)}
              onMouseLeave={() => setShowEstateDropdown(false)}
            >
              <NavDropdown.Item href="">Power of Attorney</NavDropdown.Item>
              <NavDropdown.Item href="">
                Last Will and Testament
              </NavDropdown.Item>
              <NavDropdown.Item href="">Advance Directive</NavDropdown.Item>
              <NavDropdown.Item href="">Living Will</NavDropdown.Item>
              <NavDropdown.Item href="">Do not Resuscitate</NavDropdown.Item>
              <NavDropdown.Item
                href=""
                style={{ display: "flex", alignItems: "center" }}
              >
                View all forms
                <GoArrowUpRight style={{ color: "blue", marginLeft: "5px" }} />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Personal"
              id="personal-nav-dropdown"
              show={showPersonalDropdown}
              onMouseEnter={() => setShowPersonalDropdown(true)}
              onMouseLeave={() => setShowPersonalDropdown(false)}
            >
              <NavDropdown.Item href="">Bill of Sale</NavDropdown.Item>
              <NavDropdown.Item href="">Affidavit</NavDropdown.Item>
              <NavDropdown.Item href="">Promissory Note</NavDropdown.Item>
              <NavDropdown.Item href="">Divorce Agreement</NavDropdown.Item>
              <NavDropdown.Item href="">Child Travel Consent</NavDropdown.Item>
              <NavDropdown.Item href="">Loan Agreement</NavDropdown.Item>
              <NavDropdown.Item
                href=""
                style={{ display: "flex", alignItems: "center" }}
              >
                View all forms
                <GoArrowUpRight style={{ color: "blue", marginLeft: "5px" }} />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={toggleSearch}>
              <IoIosSearch size={24} />
            </Nav.Link>
            {showSearch && (
              <NavDropdown
                id="search-nav-dropdown"
                show={showSearch}
                align="end"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="search-box">
                  <div className="search-input">
                    <div className="icon-placeholder">
                      <IoIosSearch size={28} />
                    </div>
                    <input
                      type="text"
                      placeholder="Search Documents and Forms(e.g. lease agreement)"
                    />
                    <button className="w-1/6 mx-1 py-2 font-bold rounded-sm bg-violet-600 border-2 border-violet-600 hover:bg-white hover:text-violet-600 transition-all">
                      Search
                    </button>
                  </div>
                </div>
              </NavDropdown>
            )}
          </Nav>

          <Nav>
            <NavDropdown
              title="Support"
              id="basic-nav-dropdown"
              show={showSupportDropdown}
              onMouseEnter={() => setShowSupportDropdown(true)}
              onMouseLeave={() => setShowSupportDropdown(false)}
            >
              <NavDropdown.Item href="">About Us</NavDropdown.Item>
              <NavDropdown.Item href="">Chat Online</NavDropdown.Item>
              <NavDropdown.Item href="">Contact Us</NavDropdown.Item>
             
              <NavDropdown.Item disabled>
  <div style={{ fontSize: 'small' }}>
    Monday - Friday | 9AM - 7PM <br /> EDT
    (855) 335-9779
  </div>
</NavDropdown.Item>

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
