import React, { useState } from "react";
import Skils from "../utils/Skils";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import { Button, Typography } from "@mui/material";
import Typical from "react-typical";
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
        <h1>About Me</h1>
        <div className="animated_text">
          <h6>
            I am a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "full stack developer",
                3000,
                "React/React native developer",
                3000,
                "Bachelor of Computer Science",
                3000,
                "Freelancer",
                3000,
              ]}
            ></Typical>
          </h6>
        </div>
        <div className="about me">
          {Skils.aboutme.map((item) => {
            return (
              <div>
                {" "}
                <h6>{item.title}</h6>
                <p>{item.info}</p>{" "}
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <Navbar expand="lg" className="navbar">
              <Container>
                <p>Technical Skills:</p>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    {allCategories.map((item) => {
                      return (
                        <h6>
                          <Nav.Link
                            onClick={() => {
                              onCat(item);
                            }}
                          >
                            {item}
                          </Nav.Link>
                        </h6>
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
