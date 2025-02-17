import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  nextJs,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  Social_Media_App,
  Memories_App,
  Youtube_clone,
  User_Panel,
  Admin_Dashboard1,
  Admin_Dashboard2,
  tripguide,
  express,
  firebase,
  GbLogo,
  SpLogo,
  Pdlogo,
  high,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: web,
  },
  {
    title: "Next.Js Developer",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "ScanProperly",
    icon: SpLogo,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Developed a firm comparison platform with an admin panel using Next.js, TypeScript, MongoDB, AWS, and Express, improving data processing speed for company comparisons by 30%.",
      "Built CRUD functionality for companies and blogs, enhancing content management efficiency and reducing data entry time by 40%.",
      "Implemented user registration and advanced company filtering with Redux, increasing user engagement by 25%, while designing a fully responsive UI that boosted mobile user traffic by 20%.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "GazetBot",
    icon: GbLogo,
    iconBg: "#383E56",
    date: "July 2024 - Aug 2024",
    points: [
      "Architected a dynamic and responsive user interface with the Next.js and firebase which has Wishlist and product comparison functionalities, directly leading to a 15% increase in customer retention.",
      "Created a multi-layered user authentication system using Firebase, integrating OAuth to facilitate Google sign-ins, which reduced user onboarding time by 25% and improved overall user retention rates.",
      "Developed an advanced search and filter system allowing users to find products based on categories and price 25% increase in user interactions on the site.",
    ],
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
];

const testimonials = [
  {
    testimonial:
      "It was great working with Kunal Aage,Web developer who truly cares about their clients success ",
    name: "Dr.Chandrashekar",
    designation: "Ex-Director",
    company: "DRDO",
    image: "",
  },
  {
    testimonial:
      "Working with Kunal was a game-changer. His expertise in React.js and Next.js, coupled with his attention to detail, resulted in a highly responsive and user-friendly interface is great.",
    name: "Mohd Moiz",
    designation: "Co-Founder",
    company: "GazetBot",
    image: "",
  },
  {
    testimonial:
      "Khan exceeded expectations with ScanProperly! He built an efficient, feature-rich platform with a responsive design, showcasing great professionalism and technical expertise. Excellent communication and timely delivery—highly recommend for any project!",
    name: "Pratham Surani",
    designation: "Founder",
    company: "Scanproperly",
    image: "",
  },
  // {
  //   testimonial:
  //     "I've never met  like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Social Media App",
    description:
      "This project is a feature-rich social platform designed to enhance user engagement and personalization. It includes secure authentication with JWT, account management through sign-up and password recovery, and profile updates. Users can interact via likes, comments, and real-time chats, with privacy ensured through block functionality. Additional features include theme customization, a 7-day activity timeline, bookmarking, and Instagram-style stories with close friends sharing and archiving options. Together, these features deliver a dynamic and user-friendly experience.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: Social_Media_App,
    source_code_link: "https://github.com/kunalBari5557/sociolmedia_app",
  },
  {
    name: "Memories App",
    description:
      "The Memories App is a user-friendly platform where individuals can capture, share, and engage with their cherished moments. It features a secure login and signup system, allowing users to create accounts and manage their personal profiles. Users can post their memories by adding titles, descriptions, and images, preserving meaningful moments in a visually appealing way. The app includes an efficient pagination system for seamless browsing of posts, ensuring smooth performance even with large volumes of data. A powerful search functionality enables users to quickly find specific memories by using keywords, while the commenting feature fosters engagement by allowing users to leave feedback and share perspectives on each post.",
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
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: Memories_App,
    source_code_link: "https://github.com/kunalBari5557/memories_mern_app",
  },
  {
    name: "Youtube Clone",
    description:
      "This YouTube clone project leverages third-party APIs to provide core functionalities of a video-sharing platform. Users can browse and search for videos, view trending content, and access video details such as titles, descriptions, and comments. With a focus on simplicity and integration, the platform offers a seamless video consumption experience without the need for direct content uploads or hosting. Additional features like a user-friendly interface and dark mode enhance the overall user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML | CSS",
        color: "orange-text-gradient",
      },
    ],
    image: Youtube_clone,
    source_code_link: "https://github.com/kunalBari5557/Youtube-clone",
  },
  {
    name: "User Panel",
    description:
      "This project utilizes the FakeStore API to create a feature-rich dashboard for managing users and products. The platform provides an intuitive interface for performing CRUD operations on products, allowing users to add, edit, view, and delete product details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: User_Panel,
    source_code_link: "https://github.com/kunalBari5557/Admin_Panel",
  },
  {
    name: "Admin Dashboard",
    description:
      "This project is a modern, responsive dashboard UI built using React and Tailwind CSS. It features a clean, minimalistic design and includes interactive components such as a sidebar navigation, header, and scrollable main content. The dashboard is fully responsive, ensuring seamless performance across different devices and screen sizes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind | Html | CSS",
        color: "orange-text-gradient",
      },
    ],
    image: Admin_Dashboard1,
    source_code_link: "https://github.com/kunalBari5557/React-Dashboard",
  },
  {
    name: "Admin Dashboard",
    description:
      "This is a modern and visually appealing Admin Panel interface designed to provide users with key insights into financial transactions, budgets, and savings. The dashboard features a sleek, dark-themed UI with vibrant orange accents to highlight important data points and actions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind | Html | CSS",
        color: "orange-text-gradient",
      },
    ],
    image: Admin_Dashboard2,
    source_code_link:
      "https://github.com/kunalBari5557/React_Vite_Theme_Dasboard",
  },
];

export { services, technologies, testimonials, projects, experiences };
