import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  //meta,
  //starbucks,
  //tesla,
  //shopify,
  //carrent,
  //jobit,
  //tripguide,
  threejs,
  
  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];


const experiences = [
  /*{
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/

  {
    title: "System  Developer",
    company_name: "Surway Department Sri Lanka",
    icon: "../public/surway.jpeg",
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Technologies: Laravel, MySQL Database",
      "Developing a comprehensive store management system for the Survey Department, enhancing inventory  tracking and operational efficiency",
       "Utilizing Laravel to build secure, scalable backend functionality for inventory, procurement, and reporting.",
      "Implementing database management solutions with MySQL to ensure accurate data storage and retrieval.",
      "Collaborating with department stakeholders to tailor the system to specific operational requirements",
      

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sachin Uthpala",
    designation: "Software Engineering",
    company: "Eastlink",
    image: "../public/img1.jpeg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sucharitha",
    designation: "Product Development Executive ",
    company: "LAUGFS Corporation",
    image: "../public/img2.jpeg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Chathura",
    designation: " Technical Analyst",
    company: "IFS",
    image: "../public/img3.jpeg",
  },
];

const projects = [
  {
    name: "Virtual Dressing Room",
    description:
      "Created a customizable T-shirt feature for color, text, and image selection. Worked on UI for a smooth user experience and used Redux Toolkit for real-time customization updates. Collaborated on feature integration and received positive feedback in presentations."
     ,
    tags: [
      {
        name: "Mern Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "../public/img4.jpg",
    source_code_link: "https://github.com/aselamadhumal/Virtual-Dressing-Room-Project-3rd-Year-Project-",
  },

  {
    name: "Online Hotel & Tourism Management System",
    description:
      " Developed a financial management page to track income and expenses, integrating a user-friendly dashboard key financial metrics. Ensured secure server-side functionality for transactions and presented the project, receiving positive feedback",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "../public/img5.jpg",
    source_code_link: "https://github.com/aselamadhumal/Online-Hotel-and-Tourism-Management-System",
  },
  {
    name: "Online Food Ordering System",
    description:
      "Developed a Java-based Admin Panel with CRUD operations for managing food items, orders, and user data, using MySQL for secure data handling. Collaborated on full integration and wireframe design to enhance user flow",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql Workbench",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Html",
        color: "blue-text-gradient",
      },
    ],
    image: "../public/img6.png",
    source_code_link: "https://github.com/aselamadhumal/Online-Food-Ordering-System",
  },
  {
    name: "Social Media Clone",
    description:
      " Developed a social networking platform for health and wellness, enabling users to connect, share fitness ls, healthy recipes, and wellness tips. Integrated discussion forums, expert content, personalized recommendations, and challenges to support users’ wellness journeys.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "../public/img7.jpg",
    source_code_link: "https://github.com/aselamadhumal/Social-Media-Clone",
  },

  {
    name: "MERN Blog App",
    description:
      " The Blogger Platform is a modern, user-friendly web application designed for creating, sharing, and managing blog posts. Built with React.js and styled using Tailwind CSS, it features a responsive design with dark mode, secure authentication using JWT and Google OAuth, and advanced functionalities like a protected admin dashboard for managing posts, comments, and users. Users can easily search, filter, and sort blogs, and interact through adding, editing, and deleting comments. Powered by MongoDB for data management and Redux Toolkit for state management, this platform showcases a seamless and engaging blogging experience across all devices.",
    tags: [
      {
        name: "Mern Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Readux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "../public/img10.png",
    source_code_link: "https://github.com/aselamadhumal/Blog-Application",
  },


  {
    name: "Online Shopping Store",
    description:
      " Developed essential features for an online shopping platform, including cart, payment processing, and secre user authentication, while assisting with wireframe design to streamline user flow. Managed CRUD operations for cart and payment functionalities and collaborated with the team to integrate front-end and back-end seamlessly.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "../public/img11.png",
    source_code_link: "https://github.com/aselamadhumal/Online-Shopping-Store",
  },
];

export { services, technologies, experiences, testimonials, projects };
