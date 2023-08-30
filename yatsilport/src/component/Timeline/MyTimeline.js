import React from "react";
import "./MyTimeline.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
const MyTimeline = () => {
  return (
    <div>
      <Timeline position="right" className={"timeline"}>
        <TimelineItem className={"timeline_firstitem"}>
          <TimelineSeparator className={"timeline_sep"}>
            <TimelineDot className={"timeline_dot_header"}>
              {<PermIdentityIcon className="icon_info" />}
            </TimelineDot>
            <TimelineConnector className="timeline_line" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={"timeline_header"}>
              <h6 className="timeline_h6">{resumeData.timelinetitle}</h6>
            </Typography>
            <h6></h6>
          </TimelineContent>
        </TimelineItem>

        {resumeData.timelinelist.map((item, index) => {
          return (
            <TimelineItem className={"timeline_item"}>
              <TimelineSeparator className={"timeline_sep"}>
                <TimelineDot className={"timeline_dot"} />
                {index !== resumeData.timelinelist.length - 1 && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Typography className={"timeline_header"}>
                  <h6 className="timeline_h6">{item.first}</h6>
                  <h6 className="timeline_h6"> {item.sec}</h6>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export const Costumetimeline = () => {
  <TimelineSeparator className={"timeline_sep"}>
    <TimelineDot className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>;
};

export default MyTimeline;
