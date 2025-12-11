import myDp from "../assets/muaz dp.jpg"
import { projects } from "./projectData";


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
    dribbble: "https://dribbble.com/muaz2024",
  },
  summary: "I am a versatile professional with a strong foundation in UI/UX Design, specializing in creating engaging and intuitive digital products using tools like Figma for wireframing, prototyping, and design systems, complemented by hands-on Frontend Development expertise in React.js, Tailwind CSS, and JavaScript. My portfolio features six diverse projects—from e-commerce and SaaS landing pages to mobile applications—demonstr highlighting my ability to translate user needs into seamless experiences. Beyond technical execution, my background includes official roles in event organization and publicity at IIUC, alongside recent, intensive Product Design & Development training from Taf Technology, demonstrating my commitment to full-cycle project management and effective cross-functional collaboration between design and engineering teams.",
  skills: {
    design: ["Figma", "Adobe XD (basic)", "Canva", "Wireframing", "Prototyping", "Responsive Design", "User Flows", "Accessibility", "Design Systems"],
    frontend: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "jQuery", "React.js"],
    other: ["Git", "Microsoft Office"]
  },

  projects: projects,

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