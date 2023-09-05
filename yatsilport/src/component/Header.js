import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import "./Header.css";
import resumeData from "../utils/resumeData";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import "bootstrap/dist/css/bootstrap.min.css";
import { element } from "prop-types";
const Header = ({ props }) => {
  const path = window.location.pathname;
  const headerpages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Porfolio",
      path: "/porfolio",
    },
  ];

  return (
    <div>
      <Navbar sticky="top" className="header" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <HomeIcon className="home_icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {headerpages.map((page, index) => (
                <Nav.Link
                  key={index}
                  href={page.path}
                  className={
                    path === page.path ? "header_link_active" : "header_link"
                  }
                >
                  {page.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <div className="social-icons">
            {resumeData.socials.map((social, index) => (
              <Tooltip key={index} title={social.text}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {social.icon}
                </a>
              </Tooltip>
            ))}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
