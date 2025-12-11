import SectionTitle from '../Utilities/SectionTitle';

const SkillsSection = ({ data: skills }) => (
  <section id="skills" className="py-20 bg-slate-900 my-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="My Skills" subtitle="Technologies and tools I work with" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Design</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.design.map(skill => <span key={skill} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">{skill}</span>)}
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Frontend</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.frontend.map(skill => <span key={skill} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">{skill}</span>)}
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Other Tools</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.other.map(skill => <span key={skill} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">{skill}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;