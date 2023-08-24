import React from "react";
import { Typography } from "@mui/material";
import "./Profile.css";
import MyTimeline from "./Timeline/MyTimeline";
import resumeData from "../utils/resumeData";
const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src="https://media.licdn.com/dms/image/C4D03AQHubi-djo7fIw/profile-displayphoto-shrink_800_800/0/1667900388879?e=1698278400&v=beta&t=axgq6LoIWeFpky1WXjMzToxaol7RiBViXXvQink3MOE" />
      </figure>
      <div className="profile_info">
        <MyTimeline />
        <br />
        <button>my button</button>
      </div>
    </div>
  );
};

export default Profile;
