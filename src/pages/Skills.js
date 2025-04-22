import React from 'react';

const skills = {
  'Technical Skills': [
    'Machine Learning',
    'Data Analysis',
    'Tableau',
    'MS Office (Proficient)',
    'SQL',
  ],
  'Programming Languages': ['Python', 'C++', 'R', 'HTML', 'JavaScript'],
  Tools: [
    'PostgreSQL',
    'Microsoft Azure',
    'Jupyter Notebook',
    'Docker',
    'GIT/GITHUB',
    'TensorFlow',
    'Selenium',
  ],
  'MS Excel': [
    'Pivot Tables and Charts',
    'Macro/VBA Automation',
    'Dashboard Creation and Reporting',
    'Power Query/Get and Transform',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                {category}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
