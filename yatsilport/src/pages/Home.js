import React, { useState } from "react";
import Skils from "../utils/Skils";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import { Button, Typography } from "@mui/material";
import "./Home.css";
const Home = () => {
  const allCategories = Skils.skils.map(
    (skillCategory) => skillCategory.category
  );
  const [mySlider, setmySlider] = useState("Programming");
  const category = Skils.skils.find(
    (category) => category.category === "Programming"
  );
  const [myiIthemList, setmyIthemList] = useState(category);

  const onCat = (e) => {
    setmySlider(e);
    const category = Skils.skils.find((category) => category.category === e);
    setmyIthemList(category);
  };

  return (
    <div>
      <div className="home-container">
        <h1>Hello and welcome to my page</h1>
        <h6>Learn more about me and my skills</h6>
        <div>
          <div>
            <Navbar expand="lg" className="navbar">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {allCategories.map((item) => {
                      return (
                        <Nav.Link
                          onClick={() => {
                            onCat(item);
                          }}
                        >
                          {item}
                        </Nav.Link>
                      );
                    })}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="carousel-container">
            <Carousel data-bs-theme="dark" className="my-carousel">
              {myiIthemList.items.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      src={item.image}
                      style={{
                        height: "300px",
                        width: "300px",
                        display: "block",
                        margin: "0 auto",
                      }}
                    ></img>
                    <Carousel.Caption>
                      <Typography className="item_name">{item.name}</Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
