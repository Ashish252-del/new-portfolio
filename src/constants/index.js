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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  digitalCrew,
  imocha,
  rc
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
    title: "Nodejs  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Board Game Developer",
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
  {
    title: "Node.js Developer",
    company_name: "Digital Crew",
    icon: digitalCrew,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing scalabe backends of board games like poker , ludo , rummy and teen-patti",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Problem Setter",
    company_name: "Imocha",
    icon: imocha,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - June 2023",
    points: [
      "Designed problems exclusively using the Java programming language, showcasing a high level of proficiency in the Java language",
      "Generated problems covering a wide range of algorithmic topics, including arrays, strings, hashing, searching algorithms,trees, and priority queues",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created engaging and challenging problems to test participants' knowledge and problem-solving skills in various domains.",
    ],
  },
  {
    title: " Joint Secretory",
    company_name: "Robotics Club MMMUT",
    icon: rc,
    iconBg: "#383E56",
    date: "July 2021 - April 2024",
    points: [
      "Superwised event web-quest and guided juniors ",
      "Successfully Conducted fest Robomania",
      "Review Project Submitted in web-quest by the participants ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Ludo",
    description:
      "Real Ludo is an engaging multiplayer game offering Classic, Rush, and Bolt variants, with an intelligent bot system ensuring seamless gameplay anytime.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://drive.google.com/file/d/1XmvKMMDiZa8B2ST-NDmdKRYBIJxeLmNs/view",
  },
  {
    name: "Pocket Seven",
    description:
      "Pocket Seven is a dynamic multiplayer poker game featuring clubs with lobby games like PLO, PLO4, PLO5, PLO6, Texas, and exciting tournaments for players.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Socket-io",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://drive.google.com/file/d/1-NRTtq32hOD3X78zA3FQ0Vpvw5k5jQHP/view",
  },
  {
    name: "Teen Patti",
    description:
      "Teen Patti Pro is a thrilling multiplayer card game offering seamless real-time gameplay, featuring advanced caching, smooth task handling, and optimized performance for players.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://drive.google.com/file/d/1FIcnAKws9MYyQ3GG6vmQ93eo9nLcFQdK/view",
  },
];

export { services, technologies, experiences, testimonials, projects };
