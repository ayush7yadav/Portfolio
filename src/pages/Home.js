import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SlideText = ({ words, interval = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className="h-14 overflow-hidden inline-block relative">
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${index * 3.5}rem)` }}
      >
        {words.map((word, i) => (
          <div key={i} className="h-14 text-pink-500 text-6xl font-bold">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const textArray = ['AYUSH YADAV', 'A Data Geek'];

  return (
    <section className="bg-gray-900 text-white py-24 px-4" id="home">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Hello, it's me <br />
            <SlideText words={textArray} />
          </h1>
          <p className="text-gray-300 text-lg">
            I’m a passionate data geek who turns raw numbers into impactful insights.
            Skilled in data analysis, Python, and visualization — aiming to solve real-world problems through data.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-3xl hover:text-pink-500 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-3xl hover:text-pink-500 transition" />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope className="text-3xl hover:text-pink-500 transition" />
            </a>
          </div>
          <div className="mt-6">
            <a
              href="/Ayush_Yadav_CV.pdf"
              download
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative mt-12 md:mt-0 p-1 bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 rounded-full animate-border bg-[length:400%_400%] w-72 h-72 md:w-[26rem] md:h-[26rem] hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full bg-gray-900 rounded-full p-1">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
