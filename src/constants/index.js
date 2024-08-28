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
  nizzChain,
  nizzFit,
  googleclone,
  threejs,
  github,
  Google,
  pricingtag,
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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: " Digital marketing",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "META Front-End Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Completed the Meta Front-End Developer course, mastering React.js and other essential web technologies.",
      "Participated in webathons, solving real-world web development challenges and collaborating with peers to create innovative solutions.",
      "Gained hands-on experience in implementing responsive designs and ensuring cross-browser compatibility through various course projects.",
      "Engaged in code reviews and peer feedback sessions to improve code quality and development practices during the course.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adeel proved me wrong.",
    name: "Genevieve",
    designation: "CFO",
    company: "SMM store",
    image:
      "https://th.bing.com/th/id/R.74760693646c701efeded01334dee357?rik=pJk9zY2UtYFYcA&pid=ImgRaw&r=0",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adeel does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image:
      "https://th.bing.com/th/id/R.74760693646c701efeded01334dee357?rik=pJk9zY2UtYFYcA&pid=ImgRaw&r=0",
  },
  {
    testimonial:
      "After Adeel optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ethan",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://th.bing.com/th/id/R.74760693646c701efeded01334dee357?rik=pJk9zY2UtYFYcA&pid=ImgRaw&r=0",
  },
];

const projects = [
  {
    name: "Pricing tag",
    description:
      "Choose the plan that best fits your needs: the Basic Plan offers essential features at a budget-friendly price for individuals just starting out. The Favorite Plan adds extra flexibility and priority support, making it ideal for those seeking more functionality. For those who need advanced tools and premium support, the Pro Plan delivers top-tier performance and comprehensive features for power users and teams.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "apiintegration",
        color: "orange-text-gradient",
      },
    ],
    image: pricingtag,
  },
  {
    name: "Google Search Clone",
    description:
      "This project is a pixel-perfect replica of Google's to align every element with precision. It was developed to understand Google's indexing and display mechanisms while efficiently handling limited API calls for images and pagination.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: googleclone,
  },
  {
    name: "NizzFit",
    description:
      "NizzFit is a fitness platform developed to provide an all-in-one solution for workout routines. Inspired by the need for seamless access to exercise information at the gym, NizzFit allows users to quickly search and find comprehensive workout guides, eliminating the hassle of searching through multiple sources.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "exercisedb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nizzFit,
  },
];

export { services, technologies, experiences, testimonials, projects };
