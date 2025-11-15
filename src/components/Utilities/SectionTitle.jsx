const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    <p className="text-md md:text-lg text-gray-400 mt-2">{subtitle}</p>
    <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded"></div>
  </div>
);

export default SectionTitle;