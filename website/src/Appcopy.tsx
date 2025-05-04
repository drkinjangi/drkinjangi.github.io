import React, { useState } from 'react';
import { Wind, Brain, Bot, BookOpen, User, Sun, Moon, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
{/*import { Waves } from "./components/Waves";*/}


function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubsection, setActiveSubsection] = useState(null);

  const navItems = [
    { name: 'Agents', icon: Bot, subitems: ['Overview', 'Building Blocks', 'Frameworks'] },
    { name: 'Learn', icon: BookOpen, subitems: ['Blog', 'Tutorials', 'Resource Library'] },
    { name: 'AI', icon: Brain, subitems: ['LLMs/SLMs', 'Data', 'Frameworks'] },
    { name: 'CFD', icon: Wind, subitems: ['PINNS', 'AI in CFD', 'Renewable Energy', 'Heat Transfer'] },
    { name: 'About Me', icon: User, subitems: ['Resume', 'Publications', 'Fitness'] },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
    {/* Waves Background */}
    {/*<Waves
      lineColor="rgba(255, 255, 255, 0.6)" // Light wave lines
      backgroundColor="linear-gradient(to bottom, #1e293b, #0f172a)" // Dark gradient background
      waveSpeedX={0.01}
      waveSpeedY={0.02}
      waveAmpX={24}
      waveAmpY={12}
      xGap={15}
      yGap={40}
      friction={0.9}
      tension={0.005}
      maxCursorMove={150}
    />*/}
    
    {/* Header */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex justify-between items-center h-16 px-6 w-full">
          {/* Left: FlowAgents */}
          <motion.h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => {
              setActiveSection(null);
              setActiveSubsection(null);
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            FlowAgents
          </motion.h1>

          {/* Right: Navigation */}
          <div className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => {
                    setActiveSection(activeSection === item.name ? null : item.name);
                    setActiveSubsection(null);
                  }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === item.name ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'
                  } hover:bg-gray-100 dark:hover:bg-gray-600`}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>

                {/* Dropdown */}
                {activeSection === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg"
                  >
                    <ul>
                      {item.subitems.map((subitem) => (
                        <li
                          key={subitem}
                          className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                            activeSubsection === subitem ? 'font-bold' : ''
                          }`}
                          onClick={() => setActiveSubsection(subitem)}
                        >
                          {subitem}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center space-y-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold">Welcome to FlowAgents</h2>
          <p>Explore the intersection of Computational Fluid Dynamics, Artificial Intelligence, and Agent Systems.</p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <Instagram size={24} />
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-gray-300 dark:border-gray-700">
        <p>© 2025 FlowAgents. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
