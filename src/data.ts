import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import github from "./assets/GitHub_Invertocat_Dark.svg";
import gmail from "./assets/gmail.png";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import nextjs from "./assets/nextjs.svg";
import tailwind from "./assets/tailwind.svg";
import firebase from "./assets/firebase.svg"
import prisma from "./assets/prisma.svg"
import mysql from "./assets/mysql.svg"
import todo from "./assets/todo.png";


export const navData = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Elo", href: "#about" },
  { id: 3, name: "Projects", href: "#project" },
  { id: 4, name: "Contact", href: "#contact" },
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

export const stacks = [
  {
    id: 1,
    src: html,
    name: "HTML",
  },
  {
    id: 2,
    src: css,
    name: "CSS",
  },
  {
    id: 3,
    src: js,
    name: "JavaScript",
  },
  {
    id: 4,
    src: react,
    name: "ReactJs",
  },
  {
    id: 5,
    src: nextjs,
    name: "NextJs",
  },
  {
    id: 6,
    src: tailwind,
    name: "TailwindCss",
  },
  {
    id: 7,
    src: github,
    name: "Github",
  },
  {
    id: 8,
    src: prisma,
    name: "Prisma",
  },
  {
    id: 9,
    src: firebase,
    name: "Firebase",
  },
  {
    id: 10,
    src: mysql,
    name: "MySql",
  },
];

export const projects = [
  {
    id: 1,
    name: "Todo",
    description: "Todo App ",
    repolink: "https://github.com/Dev-Elo-1505/Todo-app.git",
    livelink: "https://todo-app-eight-zeta-90.vercel.app/",
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
