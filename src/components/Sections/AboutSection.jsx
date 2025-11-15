import { Download } from 'lucide-react';
import SectionTitle from '../Utilities/SectionTitle';

const AboutSection = ({ data }) => (
  <section id="about" className="py-20 bg-slate-800 my-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="About Me" subtitle="A little bit about my journey" />
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full md:w-1/3 flex justify-center">
           <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-slate-700 border-4 border-cyan-500 flex items-center justify-center shadow-lg">
              {/* Data includes 'dp' for the image source */}
              <img src={data.dp} alt={`${data.name} profile`} className="w-45 h-45 sm:w-54 sm:h-54 text-cyan-400 rounded-full" />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-gray-300 text-lg text-center md:text-left">
          <p>{data.summary}</p>
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

export default AboutSection;