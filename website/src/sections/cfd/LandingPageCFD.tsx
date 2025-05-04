import React from "react";
import { Link } from "react-router-dom";
import SectionLayout from "../../components/SectionLayout";
import SEOHelmet from "../../components/SEOHelmet";

const LandingPageCFD = () => {
  const features = [
    {
      title: "Foundations",
      description: "Core principles of computational fluid dynamics and numerical methods enhanced with physics-informed neural networks.",
      path: "/cfd/pinns",
      imageUrl: "https://placehold.co/400x300/0077b6/ffffff?text=Foundations",
    },
    {
      title: "Applications",
      description: "Practical applications in thermal management, data center cooling, and other engineering challenges.",
      path: "/cfd/heat-transfer",
      imageUrl: "https://placehold.co/400x300/00b4d8/ffffff?text=Applications",
    },
    {
      title: "Agents & Orchestration",
      description: "Autonomous AI agents that orchestrate and optimize complex CFD simulation workflows.",
      path: "/cfd/ai-in-cfd",
      imageUrl: "https://placehold.co/400x300/48cae4/ffffff?text=Agents",
    },
  ];

  return (
    <SectionLayout title="CFD Applications" subtitle="Where Physics Meets AI">
      <SEOHelmet
        title="CFD Applications"
        description="Explore computational fluid dynamics applications enhanced by AI, from foundations to practical implementations in thermal management and renewable energy."
        keywords="CFD, computational fluid dynamics, physics-informed neural networks, thermal management, renewable energy, AI in engineering"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-blue-100 dark:bg-blue-900 overflow-hidden">
              <img 
                src={feature.imageUrl} 
                alt={feature.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <Link 
                to={feature.path}
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="my-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold py-4 text-gray-900 dark:text-white">
          Explore CFD Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <Link 
            to="/cfd/pinns" 
            className="bg-white dark:bg-gray-700 p-4 rounded shadow hover:shadow-md text-center"
          >
            Physics-Informed Neural Networks
          </Link>
          <Link 
            to="/cfd/ai-in-cfd" 
            className="bg-white dark:bg-gray-700 p-4 rounded shadow hover:shadow-md text-center"
          >
            AI in CFD
          </Link>
          <Link 
            to="/cfd/heat-transfer" 
            className="bg-white dark:bg-gray-700 p-4 rounded shadow hover:shadow-md text-center"
          >
            Heat Transfer
          </Link>
          <Link 
            to="/cfd/renewable-energy" 
            className="bg-white dark:bg-gray-700 p-4 rounded shadow hover:shadow-md text-center"
          >
            Renewable Energy
          </Link>
        </div>
      </div>

      <form className="mt-12 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Get updates on CFD research and applications
        </label>
        <div className="mt-1 flex">
          <input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
            className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" 
          />
          <button 
            type="submit" 
            className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default LandingPageCFD;