import { useState, useEffect } from 'react';
import { portfolioData, navLinks } from './data/portfolioData'; // New data file
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import ContactSection from './components/Sections/ContactSection';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Effect to handle scroll-based active section highlighting
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
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => observer.observe(section));

    return () => {
        sections.forEach(section => observer.unobserve(section));
        // Cleanup event listeners
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', () => {});
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header
        navLinks={navLinks}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        name={portfolioData.name}
      />
      
      <main className="pt-16">
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SkillsSection data={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <ExperienceSection data={portfolioData} />
        <ContactSection data={portfolioData} />
      </main>

      <Footer data={portfolioData} />
    </div>
  );
}