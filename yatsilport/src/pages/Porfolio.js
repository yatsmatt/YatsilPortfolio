import React from "react";
import Project from "../utils/Project";
import "./Porfolio.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const Porfolio = () => {
  return (
    <>
      <div className="main_div_cart">
        <div className="text_div">
          <h5>{Project.title}</h5>
          <p>{Project.content}</p>
        </div>
        <div className="project-cards">
          {Project.Projects.map((item, index) => (
            <Card sx={{ maxWidth: 345 }} className="my-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.sum}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small">
                  <a className="my_link" href={item.link}>
                    Visit
                  </a>
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Porfolio;
