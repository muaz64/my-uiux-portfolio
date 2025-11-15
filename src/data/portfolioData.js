import myDp from "../assets/muaz dp.jpg"
import foodapp from "../assets/food-app.png"
import ecommerce from "../assets/ecommerce.png"
import saas from "../assets/saas.png"
import webxpro from "../assets/webxpro.png"
import ott from "../assets/ott.png"
import tm from "../assets/tm.png"

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const portfolioData = {
  name: "Muaz Muhammad",
  title: "UI/UX Designer & Frontend Developer",
  location: "Patiya, Chittagong, Bangladesh",
  email: "muazmuhammad21@gmail.com",
  phone: "01788397864",
  dp: myDp,
  social: {
    linkedin: "https://linkedin.com/in/muaz-muhammad",
    github: "https://github.com/muaz-muhammad",
    figma: "https://www.figma.com/@muazmuhammad",
  },
  summary: "Creative and detail-oriented UI/UX Designer with a strong foundation in front-end development and user-centered design principles. Experienced in designing engaging, intuitive digital experiences with Figma, and building responsive, accessible interfaces using HTML, CSS (Bootstrap, Tailwind), and JavaScript (React.js, jQuery). Adept at wireframing, prototyping, and translating user needs into seamless web experiences.",
  skills: {
    design: ["Figma", "Adobe XD (basic)", "Canva", "Wireframing", "Prototyping", "Responsive Design", "User Flows", "Accessibility", "Design Systems"],
    frontend: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "jQuery", "React.js"],
    other: ["Git", "Microsoft Office"]
  },
  projects: [
    { 
      name: "E-commerce Website", 
      description: "Bevy Commerce is a responsive product page UI designed for a luxury skincare brand — Luméra. This concept showcases a seamless and elegant eCommerce experience, crafted to boost engagement, improve usability, and communicate product value with clarity and style.", 
      image: ecommerce, 
      link: "https://www.figma.com/community/file/1501111316484833480/bevy-commerce-demo-project" 
    },
    { 
      name: "Food Order App", 
      description: "Jhotpot is designed to simplify food delivery for users who crave quick and convenient access to their favorite meals. Whether you're in the mood for burgers, pizza, or chicken, this app delivers it all with just a few taps!", 
      image: foodapp, 
      link: "https://www.figma.com/community/file/1456671089008909048/jhotpot-app-project" 
    },
    { 
      name: "SaaS Landing Page", 
      description: "SaaS Landing Page UI Design - a sleek, conversion-focused layout built for modern software, tech, and digital product companies.", 
      image: saas, 
      link: "https://www.figma.com/community/file/1497491039637715044/saas-landing-page" 
    },
    { 
      name: "WebXpro Landing Page", 
      description: "A clean and modern landing page UI design tailored for web and software development companies. This design is built to help startups and tech businesses promote their services and convert visitors into clients with strong visual storytelling and structured CTAs.", 
      image: webxpro, 
      link: "https://www.figma.com/community/file/1496896087247224480/webxpro-landing-page" 
    },
    { 
      name: " Marvel OTT UI Concept ", 
      description: "This UI/UX concept is a Marvel-themed OTT (Over-The-Top) streaming platform designed to deliver a sleek, cinematic, and user-friendly experience for superhero fans. The layout is clean, highly visual, and responsive, making it ideal for desktop and smart TV screens.", 
      image: ott, 
      link: "https://www.figma.com/community/file/1494752200040659323/ott-project" 
    },
    { 
      name: "TaskBolt-Modern Task Management UI(Web App)", 
      description: "TaskBolt is a sleek and modern task management interface designed and developed to make productivity effortless.This UI combines a clean dark theme, intuitive navigation, and neatly organized task lists with features like search, priority selection, and tag categorization.", 
      image: tm, 
      link: "https://www.figma.com/community/file/1536636654993025741/taskbolt-design" 
    },
  ], 
  experience: [
    {
      role: "Professional Training",
      organization: "45-Day Training in Product Design & Development | Taf Technology",
      duration: "Oct, 2025",
      responsibilities: [
        "Completed intensive training focused on full-cycle project management and design-to-development workflow.",
        "Gained practical knowledge in UX research application, advanced UI principles, and frontend-to-backend process understanding.",
        "Focused heavily on cross-functional collaboration between design and engineering teams through project case studies.",
      ]
    },
    {
      role: "Press & Publicity Secretary",
      organization: "EEE Club, IIUC",
      duration: "Jan 2023 - Jun 2023",
      responsibilities: [
        "Creating and distributing press releases to announce news or events.",
        "Building relationships with members of the media to secure coverage.",
        "Managing social media accounts and other communication channels.",
      ]
    },
    {
      role: "Assistant Organizing Secretary",
      organization: "EEE Club, IIUC",
      duration: "Aug 2022 - Dec 2022",
      responsibilities: [
        "Assisted in planning and coordinating events, meetings, and activities.",
        "Managed schedules and calendars to ensure timely execution of tasks.",
        "Collaborated with team members to delegate tasks for successful event execution.",
      ]
    }
  ],
  education: [
      { degree: "Bachelor of Science in EEE", institution: "International Islamic University Chittagong (IIUC)", year: "2024" },
      { degree: "HSC", institution: "South Asian College Chattogram", year: "2018" },
      { degree: "SSC", institution: "Hazi Mohammad Mohsin Govt. High School Chattogram", year: "2016" },
  ]
};