import React from "react";
import "./MyTimeline.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import resumeData from "../../utils/resumeData";

const MyTimeline = () => {
  return (
    <div>
      <Timeline position="right" className={"timeline"}>
        <TimelineItem className={"timeline_firstitem"}>
          <TimelineSeparator className={"timeline_sep"}>
            <TimelineDot className={"timeline_dot_header"}>
              {<CodeIcon className="icon_info" />}
            </TimelineDot>
            <TimelineConnector className="timeline_line" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={"timeline_header"}>
              {resumeData.timelinetitle}
            </Typography>
            <h6></h6>
          </TimelineContent>
        </TimelineItem>

        {resumeData.timelinelist.map((item) => {
          return (
            <TimelineItem className={"timeline_item"}>
              <TimelineSeparator className={"timeline_sep"}>
                <TimelineDot className={"timeline_dot"} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" className={"timeline_header"}>
                  {item.first}
                </Typography>
                <Typography variant="subtitle2">{item.sec}</Typography>
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
