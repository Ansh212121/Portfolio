import ThoughtHub from "../assets/thoughthub.png";
import sorting from "../assets/weatherApp.png";
import codeforge from "../assets/codeforge.png";
import dailylog from "../assets/dailylog.png";

const ProjectData = [
  {
    id: 1,
    title: "DailyLog",
    imgPath: dailylog,
    description:
      "DailyLog is a MERN stack-based web application that allows users to write, manage, and organize their daily logs efficiently. Users can securely sign up, log in, and create personal entries with the ability to edit or delete them anytime. Each log can optionally include a mood tag, adding a personal touch without being the main focus. With a clean and responsive interface built in React, a robust backend powered by Node.js and Express, and MongoDB for seamless data storage, DailyLog offers a smooth and intuitive journaling experience for everyday use.",
    technologies: [
      "Reactjs",
      "JavaScript",
      "Tailwand CSS",
      "Nodejs",
      "Express",
      "MongoDB",
    ],
    link: "https://github.com/Ansh212121/DailyLog",
    demo: "https://daily-log-smoky.vercel.app/",
  },
  {
    id: 2,
    title: "ThoughtHub",
    imgPath: ThoughtHub,
    description:"ThoughtHub is a blog application built using Node.js for the backend and EJS for the frontend templating. It allows users to create, view, edit, and delete blog posts with ease. The platform offers a clean and minimal interface for writing and reading blogs, focusing on simplicity and functionality. With server-side rendering using EJS, ThoughtHub delivers fast and dynamic page updates, making it a smooth experience for both content creators and readers. ",
    technologies: ["React", "Express", "MongoDB", "Bootstrap", "Nodejs"],
    link: "https://github.com/Ansh212121/ThoughtHub",
    demo: "https://thoughthub-bg5m.onrender.com/",
  },
   {
    id: 3,
    title: "CodeForge",
    imgPath: codeforge,
    description:"CodeForge is a cutting-edge platform that empowers interviewers to conduct seamless, efficient interviews with features like instant calls, scheduled meetings, and interview recordings. It simplifies the hiring process through real-time collaboration, intuitive scheduling, and a sleek, user-friendly interface. From technical assessments to candidate evaluations, CodeForge offers smart, reliable tools that help teams hire faster, smarter, and more effectively — all in one place.",
    technologies: ["HTML", "CSS", "JavaScript", "Nodejs", "Express"],
    link: "https://github.com/Ansh212121/CODEFORGE",
    demo: "https://codeforge-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Sorting visualizer",
    imgPath: sorting,
    description:
      "The Sorting Visualizer is a web page designed to visualize various sorting algorithms in action. .",
    technologies: ["HTML", "CSS", "JavaScript", "Algorithms", "Data Structure"],
    link: "https://github.com/Ansh212121",
    demo: "/",
  },
 
];

export default ProjectData;
