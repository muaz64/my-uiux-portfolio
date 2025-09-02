import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X, Briefcase, Star, Phone, MapPin, Download } from 'lucide-react';
import myDp from "./assets/muaz dp.jpg"

// Starry Blob Background Component
const BlobBackground = () => {
  const blobs = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    size: Math.random() * (150 - 80) + 80, // Blob size between 80px and 150px
    top: Math.random() * 100, // Random top position
    left: Math.random() * 100, // Random left position
    duration: Math.random() * (20 - 10) + 10, // Animation duration between 10s and 20s
    delay: Math.random() * 5, // Animation delay up to 5s
    color: `hsl(${Math.random() * 30 + 190}, 70%, 50%)`, // Shades of cyan/blue
    opacity: Math.random() * (0.4 - 0.2) + 0.2, // Opacity between 0.2 and 0.4
  }));

  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * (2 - 0.5) + 0.5, // Star size between 0.5px and 2px
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map(blob => (
        <div
          key={blob.id}
          className="absolute rounded-full filter blur-xl opacity-40 animate-blob-move"
          style={{
            width: blob.size,
            height: blob.size,
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            backgroundColor: blob.color,
            animationDuration: `${blob.duration}s`,
            animationDelay: `${blob.delay}s`,
            opacity: blob.opacity,
          }}
        ></div>
      ))}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-star-blink"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
       {/* CSS for animations */}
      <style>{`
        @keyframes blob-move {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(calc(50vw - 100%), calc(50vh - 100%)) scale(1.1);
          }
          66% {
            transform: translate(calc(20vw - 100%), calc(20vh - 100%)) scale(0.9);
          }
        }

        @keyframes star-blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Adjust blob-move for smaller screens to prevent overflow */
        @media (max-width: 768px) {
          @keyframes blob-move {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(calc(20vw - 100%), calc(20vh - 100%)) scale(1.1);
            }
            66% {
              transform: translate(calc(10vw - 100%), calc(10vh - 100%)) scale(0.9);
            }
          }
        }
      `}</style>
    </div>
  );
};


// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Data from resume
  const portfolioData = {
    name: "Muaz Muhammad",
    title: "UI/UX Designer & Frontend Developer",
    location: "Patiya, Chittagong, Bangladesh",
    email: "muazmuhammad21@gmail.com",
    phone: "01788397864",
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
      image: "/images/ecommerce.jpg", 
      link: "https://www.figma.com/community/file/1501111316484833480/bevy-commerce-demo-project" 
    },
    { 
      name: "Food Order App", 
      description: "Jhotpot is designed to simplify food delivery for users who crave quick and convenient access to their favorite meals. Whether you're in the mood for burgers, pizza, or chicken, this app delivers it all with just a few taps!", 
      image: "/images/food-app.png", 
      link: "https://www.figma.com/community/file/1456671089008909048/jhotpot-app-project" 
    },
    { 
      name: "SaaS Landing Page", 
      description: "SaaS Landing Page UI Design - a sleek, conversion-focused layout built for modern software, tech, and digital product companies.", 
      image: "/images/saas.jpg", 
      link: "https://www.figma.com/community/file/1497491039637715044/saas-landing-page" 
    },
    { 
      name: "WebXpro Landing Page", 
      description: "A clean and modern landing page UI design tailored for web and software development companies. This design is built to help startups and tech businesses promote their services and convert visitors into clients with strong visual storytelling and structured CTAs.", 
      image: "/images/webxpro.jpg", 
      link: "https://www.figma.com/community/file/1496896087247224480/webxpro-landing-page" 
    },
    { 
      name: " Marvel OTT UI Concept ", 
      description: "This UI/UX concept is a Marvel-themed OTT (Over-The-Top) streaming platform designed to deliver a sleek, cinematic, and user-friendly experience for superhero fans. The layout is clean, highly visual, and responsive, making it ideal for desktop and smart TV screens.", 
      image: "/images/js-projects.png", 
      link: "https://www.figma.com/community/file/1494752200040659323/ott-project" 
    },
    { 
      name: "TaskBolt-Modern Task Management UI(Web App)", 
      description: "TaskBolt is a sleek and modern task management interface designed and developed to make productivity effortless.This UI combines a clean dark theme, intuitive navigation, and neatly organized task lists with features like search, priority selection, and tag categorization.", 
      image: "/images/js-projects.png", 
      link: "https://www.figma.com/community/file/1536636654993025741/taskbolt-design" 
    },
  ], 

    experience: [
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

  // Effect to handle scroll-based active section highlighting and smooth scrolling
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for active section highlighting
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" }); // Triggers when the middle of the section is in the middle of the viewport

    sections.forEach(section => observer.observe(section));

    return () => {
        sections.forEach(section => observer.unobserve(section));
        // Cleanup event listeners if component unmounts
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', () => {});
        });
    }
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Header Component
  const Header = () => (
    <header className="bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-white text-2xl font-bold tracking-wider">
              {portfolioData.name.split(' ')[0]}<span className="text-cyan-400">.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );

  // Hero Section
  const Hero = () => (
    <section id="home" className="min-h-screen bg-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Starry Blob Background */}
      <BlobBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10"> {/* Added z-10 to keep content above blobs */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Hi, I'm <span className="text-cyan-400">{portfolioData.name}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
            {portfolioData.title}
          </p>
          <div className="flex justify-center space-x-6 mb-8">
              <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><Linkedin size={28} /></a>
              <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><Github size={28} /></a>
              <a href={portfolioData.social.figma} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Figma"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm4-4a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>
              </a>
          </div>
          <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 inline-block">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );

  // Section Title Component
  const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <p className="text-md md:text-lg text-gray-400 mt-2">{subtitle}</p>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded"></div>
    </div>
  );

  // About Section
  const About = () => (
    <section id="about" className="py-20 bg-slate-800 my-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="A little bit about my journey" />
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
             <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-slate-700 border-4 border-cyan-500 flex items-center justify-center shadow-lg">
                <img src={myDp} className="w-45 h-45 sm:w-54 sm:h-54 text-cyan-400 rounded-full" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-gray-300 text-lg text-center md:text-left">
            <p>{portfolioData.summary}</p>
            <div className="mt-6">
                <a href="/Muaz_Resume_UiUX.pdf" download="Muaz_Muhammad_Resume.pdf" className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 inline-flex items-center">
                    <Download className="mr-2" size={20} />
                    Download Resume
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Skills Section
  const Skills = () => (
    <section id="skills" className="py-20 bg-slate-900 my-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Skills" subtitle="Technologies and tools I work with" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Design</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {portfolioData.skills.design.map(skill => <span key={skill} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">{skill}</span>)}
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Frontend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {portfolioData.skills.frontend.map(skill => <span key={skill} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">{skill}</span>)}
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Other Tools</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {portfolioData.skills.other.map(skill => <span key={skill} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

// Projects Section
  const Projects = () => (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Projects" subtitle="A selection of my work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-slate-700 rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:-translate-y-2 flex flex-col">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mt-auto text-center pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-sky-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-sky-600 transition-colors"
                  >
                    View Project ↗️
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );


  // Experience & Education Section
  const Experience = () => (
    <section id="experience" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="My Journey" subtitle="Experience & Education" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Experience Column */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                        <Briefcase className="text-cyan-400" />
                        INVOLVEMENT
                    </h3>
                    <div className="relative border-l-2 border-cyan-500 pl-6 sm:pl-8 space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[39px] sm:-left-[42px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                                <p className="text-sm font-semibold text-cyan-400">{exp.duration}</p>
                                <h4 className="text-xl font-bold text-white mt-1">{exp.role}</h4>
                                <p className="text-gray-400 mb-2">{exp.organization}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {exp.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                        <Star className="text-cyan-400" />
                        Education
                    </h3>
                    <div className="relative border-l-2 border-cyan-500 pl-6 sm:pl-8 space-y-12">
                        {portfolioData.education.map((edu, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[39px] sm:-left-[42px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                                <p className="text-sm font-semibold text-cyan-400">{edu.year}</p>
                                <h4 className="text-xl font-bold text-white mt-1">{edu.degree}</h4>
                                <p className="text-gray-400">{edu.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );

  // Contact Section
  const Contact = () => (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Me" subtitle="Let's build something amazing together" />
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white mb-12">
                <div className="bg-slate-700 p-6 rounded-lg">
                    <MapPin className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-gray-400">{portfolioData.location}</p>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg">
                    <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                    <h4 className="font-bold text-lg">Email</h4>
                    <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-cyan-400 break-all">{portfolioData.email}</a>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg">
                    <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-gray-400">{portfolioData.phone}</p>
                </div>
            </div>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                <input type="email" placeholder="Your Email" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <input type="text" placeholder="Subject" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
              <div className="text-center">
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300">
                  Send Message
                </button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-slate-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
              <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Linkedin size={24} /></a>
              <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Github size={24} /></a>
              <a href={portfolioData.social.figma} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Figma"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm4-4a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>
              </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
