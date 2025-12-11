import { useState, useMemo } from 'react';
import SectionTitle from '../Utilities/SectionTitle';

const ProjectsSection = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);

  // Use useMemo to filter and interleave projects only when the projects prop changes
  const { initialSixProjects, remainingCount } = useMemo(() => {
    // 1. Separate projects by type
    const websiteProjects = projects.filter(p => p.type === 'website');
    const mobileProjects = projects.filter(p => p.type === 'mobile');

    // 2. Select initial 3 of each category (taking the newest ones first based on array order)
    const initialWebsites = websiteProjects.slice(0, 3);
    const initialMobile = mobileProjects.slice(0, 3);

    // 3. Interleave the initial 6 projects for a balanced presentation (max 6)
    const initialProjects = [];
    for (let i = 0; i < Math.max(initialWebsites.length, initialMobile.length); i++) {
      // Add website project if it exists
      if (initialWebsites[i]) initialProjects.push(initialWebsites[i]);
      // Add mobile project if it exists
      if (initialMobile[i]) initialProjects.push(initialMobile[i]);
    }
    
    // Ensure we only use the first 6 projects
    const curatedSixProjects = initialProjects.slice(0, 6);
    
    // 4. Calculate remaining projects
    const totalDisplayedInCurated = curatedSixProjects.length;
    const totalProjects = projects.length;
    const remaining = totalProjects - totalDisplayedInCurated;

    return {
      initialSixProjects: curatedSixProjects,
      remainingCount: remaining,
    };
  }, [projects]);
  
  // 5. Determine which projects to display
  const displayedProjects = showAll
    ? projects // show all if the button has been clicked
    : initialSixProjects; // show only the curated 6 initially

  // Toggle function
  const handleShowMore = () => {
    setShowAll(true);
  };
  
  // Determine if the button should be visible
  const isShowMoreButtonVisible = !showAll && remainingCount > 0;

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Projects" subtitle="A selection of my work" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-700 rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:-translate-y-2 flex flex-col"
            >
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
                    View Project ↗️
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {isShowMoreButtonVisible && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              Show More Projects ({remainingCount})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;