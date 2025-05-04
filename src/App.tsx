import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sun, Moon, Bot, BookOpen, Brain, Wind, User } from "lucide-react";
import LoadingSpinner from "./lib/LoadingSpinner";

// Eagerly loaded components
import LandingPage from "./sections/LandingPage";
import Overview from "./sections/agents/Overview";

// Lazy loaded components
const BuildingBlocks = lazy(() => import("./sections/agents/BuildingBlocks"));
const Frameworks = lazy(() => import("./sections/agents/Frameworks"));
const Blog = lazy(() => import("./sections/Blog"));
const Tutorials = lazy(() => import("./sections/Tutorials"));
const ResourceLibrary = lazy(() => import("./sections/ResourceLibrary"));
const LLMsSLMs = lazy(() => import("./sections/genai/LLMsSLMs"));
const Data = lazy(() => import("./sections/genai/Data"));
const AIFrameworks = lazy(() => import("./sections/AIFrameworks"));
const Glossary = lazy(() => import("./sections/learn/Glossary"));
const Updates = lazy(() => import("./sections/learn/Updates"));

// CFD Section - Lazy loaded
const LandingPageCFD = lazy(() => import("./sections/cfd/LandingPageCFD"));
const PINNs = lazy(() => import("./sections/cfd/PINNs"));
const AIInCFD = lazy(() => import("./sections/cfd/AIInCFD"));
const HeatTransfer = lazy(() => import("./sections/cfd/HeatTransfer"));
const RenewableEnergy = lazy(() => import("./sections/cfd/RenewableEnergy"));

// About Me Section - Lazy loaded
const Resume = lazy(() => import("./sections/Resume"));
const Publications = lazy(() => import("./sections/Publications"));
const Fitness = lazy(() => import("./sections/Fitness"));

const App = () => {
  const [isDark, setIsDark] = useState(false); // Dark mode state
  const [activeSection, setActiveSection] = useState(null); // Tracks which dropdown is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state

  const navItems = [
    {
      name: "Agents",
      icon: Bot,
      subitems: [
        { name: "Overview", path: "/agents/overview" },
        { name: "Building Blocks", path: "/agents/building-blocks" },
        { name: "Frameworks", path: "/agents/frameworks" },
      ],
    },
    {
      name: "Learn",
      icon: BookOpen,
      subitems: [
        { name: "Blog", path: "/learn/blog" },
        { name: "Tutorials", path: "/learn/tutorials" },
        { name: "Resource Library", path: "/learn/resource-library" },
        { name: "Glossary", path: "/learn/glossary" },
        { name: "Updates", path: "/learn/updates" },
      ],
    },
    {
      name: "AI",
      icon: Brain,
      subitems: [
        { name: "LLMs/SLMs", path: "/ai/llms-slms" },
        { name: "Data", path: "/ai/data" },
        { name: "Frameworks", path: "/ai/frameworks" },
      ],
    },
    {
      name: "CFD",
      icon: Wind,
      subitems: [
        { name: "Overview", path: "/cfd" },
        { name: "PINNs", path: "/cfd/pinns" },
        { name: "AI in CFD", path: "/cfd/ai-in-cfd" },
        { name: "Heat Transfer", path: "/cfd/heat-transfer" },
        { name: "Renewable Energy", path: "/cfd/renewable-energy" },
      ],
    },
    {
      name: "About Me",
      icon: User,
      subitems: [
        { name: "Resume", path: "/about-me/resume" },
        { name: "Publications", path: "/about-me/publications" },
        { name: "Fitness", path: "/about-me/fitness" },
      ],
    },
  ];

  const handleSubsectionClick = () => {
    setActiveSection(null); // Close dropdown when a subsection is clicked
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          isDark ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        {/* Header */}
        <nav className="bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex justify-between items-center h-16 px-4 sm:px-6">
            {/* FlowAgents Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 dark:text-white"
              onClick={() => {
                setActiveSection(null);
                setMobileMenuOpen(false);
              }}
            >
              FlowAgents
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ☰
            </button>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6 items-center">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {/* Main Dropdown Button */}
                  <button
                    onClick={() =>
                      setActiveSection(
                        activeSection === item.name ? null : item.name
                      )
                    }
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeSection === item.name
                        ? "bg-gray-200 dark:bg-gray-700"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <item.icon className="mr-2" />
                    {item.name}
                  </button>
                  {/* Dropdown Menu */}
                  {activeSection === item.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-lg py-2 z-10">
                      {item.subitems.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          onClick={handleSubsectionClick}
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="px-4 py-2 rounded-lg transition-colors"
              >
                {isDark ? <Sun className="text-yellow-400 w-6 h-6" /> : <Moon className="text-gray-500 w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden flex flex-col bg-white dark:bg-gray-800 shadow-lg py-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative px-4">
                  <button
                    onClick={() =>
                      setActiveSection(
                        activeSection === item.name ? null : item.name
                      )
                    }
                    className="flex items-center w-full py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <item.icon className="mr-2" />
                    {item.name}
                  </button>
                  {activeSection === item.name && (
                    <div className="flex flex-col px-4">
                      {item.subitems.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          onClick={handleSubsectionClick}
                          className="block py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="mt-4 mx-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded transition-colors"
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Agent Routes */}
          <Route path="/agents/overview" element={<Overview isDark={isDark} />} />
          <Route path="/agents/building-blocks" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <BuildingBlocks />
            </Suspense>
          } />
          <Route path="/agents/frameworks" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Frameworks />
            </Suspense>
          } />
          
          {/* Learn Routes */}
          <Route path="/learn/blog" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Blog />
            </Suspense>
          } />
          <Route path="/learn/tutorials" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Tutorials />
            </Suspense>
          } />
          <Route path="/learn/resource-library" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <ResourceLibrary />
            </Suspense>
          } />
          <Route path="/learn/glossary" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Glossary />
            </Suspense>
          } />
          <Route path="/learn/updates" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Updates />
            </Suspense>
          } />
          
          {/* AI Routes */}
          <Route path="/ai/llms-slms" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <LLMsSLMs />
            </Suspense>
          } />
          <Route path="/ai/data" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Data />
            </Suspense>
          } />
          <Route path="/ai/frameworks" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <AIFrameworks />
            </Suspense>
          } />
          
          {/* CFD Routes */}
          <Route path="/cfd" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <LandingPageCFD />
            </Suspense>
          } />
          <Route path="/cfd/pinns" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <PINNs />
            </Suspense>
          } />
          <Route path="/cfd/ai-in-cfd" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <AIInCFD />
            </Suspense>
          } />
          <Route path="/cfd/heat-transfer" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <HeatTransfer />
            </Suspense>
          } />
          <Route path="/cfd/renewable-energy" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <RenewableEnergy />
            </Suspense>
          } />
          
          {/* About Me Routes */}
          <Route path="/about-me/resume" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Resume />
            </Suspense>
          } />
          <Route path="/about-me/publications" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Publications />
            </Suspense>
          } />
          <Route path="/about-me/fitness" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
              <Fitness />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
