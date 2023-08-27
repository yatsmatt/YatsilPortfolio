import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
export default {
  name: "yatsil is coding",
  title: "Full stack developer",
  timelinetitle: "Bachelor of Computer Science",
  timelinelist: [
    { first: "Name:", sec: "Yatsil Mattok" },
    { first: "Occupation:", sec: "Web developer" },
    { first: "Email:", sec: "Yatsilmatt@gmail.com" },
  ],
  socials: {
    Linkedin: {
      link: "https://www.linkedin.com/in/yatsil-mattok/",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/yatsmatt",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
    Gitlab: {
      link: "https://gitlab.com/yatsilmatt",
      text: "MyGitlab",
      icon: <CodeIcon />,
    },
    LinkToCv:
      "https://drive.google.com/u/0/uc?id=1rgwqqONwFt7jBoGjBpo7UiRQ9VhhN-vl&export=download",
  },
};
