import React from "react";
import { Typography, Button } from "@mui/material";
import "./Profile.css";
import MyTimeline from "./Timeline/MyTimeline";
import resumeData from "../utils/resumeData";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <h1 className="name">{resumeData.name}</h1>
        <h1 className="title">{resumeData.title}</h1>
      </div>
      <figure className="profile_image">
        <img src="https://media.licdn.com/dms/image/C4D03AQHubi-djo7fIw/profile-displayphoto-shrink_800_800/0/1667900388879?e=1698278400&v=beta&t=axgq6LoIWeFpky1WXjMzToxaol7RiBViXXvQink3MOE" />
      </figure>
      <div className="profile_info ">
        <MyTimeline />
        <br />
        <a href={resumeData.LinkToCv} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudDownloadIcon />}
          >
            Download My CV
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
