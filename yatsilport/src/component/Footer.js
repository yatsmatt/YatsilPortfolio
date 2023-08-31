import React from "react";
import { Typography } from "@mui/material";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography> Yatsil Mattok personal website</Typography>
      </div>
      <div className="footer_right">
        <Typography className="me">
          Desinged and Developed by{" "}
          <a href="/" target="_blank">
            Yatsil Mattok
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
