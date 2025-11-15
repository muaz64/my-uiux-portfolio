import { Linkedin, Github } from 'lucide-react';

const Footer = ({ data }) => (
  <footer className="bg-slate-900 text-gray-400 py-6">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Linkedin size={24} /></a>
            <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Github size={24} /></a>
            <a href={data.social.figma} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
                <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm4-4a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
              </svg>
            </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {data.name}. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;