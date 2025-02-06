import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/GitHub_Invertocat_Dark.svg";
import gmail from "../assets/gmail.png";
import todo from "../assets/todo.png";

export const navData = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Elo", href: "/about" },
  { id: 3, name: "Projects", href: "/project" },
  { id: 4, name: "Contact", href: "/contact" },
];

export const socials = [
  {
    id: 1,
    name: "Gmail",
    src: gmail,
    href: "mailto:elooghenejoy@gmail.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    src: linkedin,
    href: "https://www.linkedin.com/in/addisijoy/",
  },
  {
    id: 3,
    name: "Twitter",
    src: twitter,
    href: "https://x.com/Elooghene__",
  },
  {
    id: 4,
    name: "Github",
    src: github,
    href: "https://github.com/Dev-Elo-1505",
  },
];



export const projects = [
  {
    id: 1,
    name: "Todo",
    description: "Todo App ",
    repolink: "https://github.com",
    livelink: "www.google.com",
    src: todo,
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description 2",
    repolink: "https://github.com",
    livelink: "www.google.com",
    src: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description 1",
    repolink: "https://github.com",
    livelink: "www.google.com",
    src: "https://via.placeholder.com/150",
  },
];
