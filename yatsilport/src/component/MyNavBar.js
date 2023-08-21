import { React, useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQEzFNhr_CP7Zg/profile-framedphoto-shrink_200_200/0/1667900391641?e=1692874800&v=beta&t=R08Lp90Wzfim8lgmZjQldPzTLCC1RXFHgerHD3QlvRY"
              height={100}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <span className="text_navbar">
              <div className="social_icon">
                <a>
                  <img />
                </a>
                <a>
                  <img />
                </a>
                <a>
                  <img />
                </a>
              </div>
              <button
                onClick={() => {
                  console.log("connect");
                }}
              >
                <span>Lets connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
