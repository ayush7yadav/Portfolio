import React, { useState } from 'react';

const projects = [
  {
    title: 'Sales Dashboard',
    image: '/images/sales-dashboard.png',
    link: 'https://github.com/yourusername/sales-dashboard',
  },
  {
    title: 'Customer Segmentation',
    image: '/images/customer-segmentation.png',
    link: 'https://github.com/yourusername/customer-segmentation',
  },
  {
    title: 'Stock Price Prediction',
    image: '/images/stock-prediction.png',
    link: 'https://github.com/yourusername/stock-prediction',
  },
  {
    title: 'Web Scraper with Selenium',
    image: '/images/web-scraper.png',
    link: 'https://github.com/yourusername/web-scraper',
  },
  {
    title: 'Covid-19 Dashboard',
    image: '/images/covid-dashboard.png',
    link: 'https://github.com/yourusername/covid-dashboard',
  },
  {
    title: 'Movie Recommendation System',
    image: '/images/movie-recommendation.png',
    link: 'https://github.com/yourusername/movie-recommendation',
  },
];

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getProjectsForTab = (index) => {
    return projects.slice(index * 2, index * 2 + 2);
  };

  return (
    <section id="projects" className="bg-gray-800 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-2 font-semibold rounded-full transition ${
                activeTab === index
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-pink-500 hover:text-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {getProjectsForTab(activeTab).map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold group-hover:text-pink-500 transition">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
