import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
export default {
  name: "yatsil Mattok",
  title: "Freelancer",
  LinkToCv: "",
  timelinetitle: "Bachelor of Computer Science",
  timelinelist: [
    { first: "Occupation:", sec: "Developer" },
    { first: "Email:", sec: "Yatsilmatt@gmail.com" },
  ],
  socials: [
    {
      link: "https://www.linkedin.com/in/yatsil-mattok/",
      text: "Linkedin",
      icon: <LinkedInIcon />,
    },
    {
      link: "https://github.com/yatsmatt",
      text: "Github",
      icon: <GitHubIcon />,
    },
    {
      link: "https://gitlab.com/yatsilmatt",
      text: "Gitlab",
      icon: <CodeIcon />,
    },
  ],
};
