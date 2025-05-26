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
import squaay from "./assets/squaaypro.png"
import cineo from "./assets/cineopro.png"
import twae from "./assets/twae.png"
import lead from "./assets/lead.png";
import recipeep from "./assets/recipeep.png";
import cgpa from "./assets/cgpa.png";


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
    name: "Cineo",
    description: "Cineo is a personalized Movie Web app with filter feature built with NextJs and Typescript. It allows users to search for movies, view details, and filter. Powered by TMDB API.",
    repolink: "https://github.com/Dev-Elo-1505/Cineo---Movie-Recommendation-WebApp",
    src: cineo,
  },
  {
    id: 2,
    name: "The World According to Elo (TWAE)",
    description: "TWAE is a personal blog website where I will share my random thoughts and views on anything I find cool. It is built with ReactJs, Typescript, and TailwindCss and uses Firebase for backend services.",
    repolink: "https://github.com/Dev-Elo-1505/My-Blog-Site",
    livelink: "https://eloblog.vercel.app/",
    src: twae,
  },
  {
    id: 3,
    name: "Squaay",
    description: "Built the landing page for Squaay, a social food marketplace startup using ReactJs and TailwindCSS",
    livelink: "https://www.squaay.com/",
    src: squaay,
  },
  {
    id: 4,
    name: "Lead Tracker",
    description: "Lead Tracker is a lightweight chrome extension tool that allows users to gather and save leads by saving tab links. Built HTML, CSS, and JavaScript.",
    repolink: "https://github.com/Dev-Elo-1505/Lead-Tracker",
    src: lead,
  },
  {
    id: 5,
    name: "Recipeep",
    description: "Recipeep is a recipe app that allows users to search for recipes, view details, and watch related youtube videos. Built with ReactJs, Typescript, and TailwindCss. Powered by TheMealDB API.",
    repolink: "https://github.com/Dev-Elo-1505/recipeep",
    src: recipeep,
  },
  {
    id: 6,
    name: "TODO",
    description: "TODO is a todo application built with HTML, CSS and Javascript. It allows users to view, add and delete items on a todo list. It also has a light and dark theme to improve accessibility, readability and user experience",
    repolink: "https://github.com/Dev-Elo-1505/Todo-app.git",
    livelink: "https://todo-app-eight-zeta-90.vercel.app/",
    src: todo,
  },
  {
    id: 7,
    name: "5 point CGPA Calculator",
    description: "It helps students calculate their CGPA based on their courses, grades, and units. Built using ReactJs, Typescript, and Vanilla CSS.",
    repolink: "https://github.com/Dev-Elo-1505/cgpa-calculator",
    livelink: "https://cgpa-calculator-black.vercel.app/",
    src: cgpa,
  },
];
