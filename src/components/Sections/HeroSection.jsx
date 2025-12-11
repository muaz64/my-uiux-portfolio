import { Linkedin, Github, Figma, Dribbble } from 'lucide-react'; 
import BlobBackground from '../Layout/BlobBackground';

const HeroSection = ({ data }) => (
  <section id="home" className="min-h-screen bg-slate-900 text-white flex items-center justify-center relative overflow-hidden">
    <BlobBackground />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Hi, I'm <span className="text-cyan-400">{data.name}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
          {data.title}
        </p>
        <div className="flex justify-center space-x-6 mb-8">
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><Linkedin size={28} /></a>
            <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><Github size={28} /></a>
            
           
            <a href={data.social.figma} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Figma size={28} />
            </a>

            {data.social.dribbble && (
                <a href={data.social.dribbble} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Dribbble size={28} />
                </a>
            )}

        </div>
        <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 inline-block">
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;