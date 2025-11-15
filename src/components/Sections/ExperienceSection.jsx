import { Briefcase, Star } from 'lucide-react';
import SectionTitle from '../Utilities/SectionTitle';

const ExperienceSection = ({ data }) => (
  <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="My Journey" subtitle="Experience, Training & Education" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Experience Column */}
              <div>
                  <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                      <Briefcase className="text-cyan-400" />
                      EXPERIENCE & TRAINING
                  </h3>
                  <div className="relative border-l-2 border-cyan-500 pl-6 sm:pl-8 space-y-12">
                      {/* This map will now correctly include the new TRAINING entry */}
                      {data.experience.map((exp, index) => (
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
              {/* Education Column (Remains unchanged) */}
              <div>
                  <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                      <Star className="text-cyan-400" />
                      Education
                  </h3>
                  <div className="relative border-l-2 border-cyan-500 pl-6 sm:pl-8 space-y-12">
                      {data.education.map((edu, index) => (
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

export default ExperienceSection;