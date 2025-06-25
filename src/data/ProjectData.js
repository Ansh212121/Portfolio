import ThoughtHub from "../assets/thoughthub.png";
import sorting from "../assets/weatherApp.png";
import codeforge from "../assets/codeforge.png";
import dailylog from "../assets/dailylog.png";
import FinSync2 from "../assets/FinSync2.png";
import QuizVerse from  "../assets/QuizVerse.png";

const ProjectData = [
  {
    id: 1,
    title: "QuizVerse",
    imgPath: QuizVerse,
    description:"QuizVerse is an interactive AI-powered quiz application designed to enhance learning through personalized and engaging experiences. Built using the MERN stack (MongoDB, Express, React, Node.js), it allows users to sign up, log in, and take quizzes tailored to their selected topics and difficulty levels. With secure authentication and validation, user data is protected and sessions are managed via local storage. QuizVerse tracks performance, offering insightful feedback to help learners improve. The UI is fully responsive, supports dark mode, and ensures a smooth user experience. Its mission is to make learning accessible, effective, and enjoyable for students and lifelong learners alike.",
    technologies: [
      "Reactjs",
      "JavaScript",
      "Tailwand CSS",
      "Nodejs",
      "Express",
      "MongoDB",
      "Google Gemini",
    ],
    link: "https://github.com/Ansh212121/QuizVerse_Client",
    demo: "https://quiz-verse-client.vercel.app/",
  },
  {
     id: 2,
    title: "FinSync",
    imgPath: FinSync2,
    description:"FinSync is a full-stack personal finance management application built using the MERN stack (MongoDB, Express.js, React, Node.js). It enables users to track their income, expenses, and budgets seamlessly through a clean and responsive interface. Users can register, securely log in, and view categorized transactions, visual expense charts, and monthly summaries. The backend manages data storage and authentication, while the frontend offers real-time updates and interactive dashboards. FinSync helps users gain better control over their spending habits, set financial goals, and make informed decisions. It’s an ideal solution for individuals seeking a smart, secure, and user-friendly financial planning tool.",
    technologies: ["React", "Express", "MongoDB", "Bootstrap", "Nodejs"],
    link: "https://github.com/Ansh212121/FinSync-Frontend",
    demo: "https://fin-sync-frontend.vercel.app/",
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
 
];

export default ProjectData;
