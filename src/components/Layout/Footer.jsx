import { Linkedin, Github, Figma, Dribbble } from 'lucide-react'; 

const Footer = ({ data }) => (
  <footer className="bg-slate-900 text-gray-400 py-6">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Linkedin size={24} /></a>
            <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><Github size={24} /></a>
            <a href={data.social.figma} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
              <Figma size={24} />
            </a>
            {data.social.dribbble && (
                <a href={data.social.dribbble} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                    <Dribbble size={24} />
                </a>
            )}
            
      </div>
      <p>&copy; {new Date().getFullYear()} {data.name}. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;