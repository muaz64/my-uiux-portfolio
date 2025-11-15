import SectionTitle from '../Utilities/SectionTitle';

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-20 bg-slate-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="My Projects" subtitle="A selection of my work" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-700 rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:-translate-y-2 flex flex-col">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-48 object-cover" 
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }} 
            />
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
                  View Project 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;