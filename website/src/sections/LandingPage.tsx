import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Agents Revolutionizing <br /> Engineering Solutions
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Harness the power of AI-driven agents and CFD simulations to transform fields like thermal management, data center optimization, and renewable energy production.
        </p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            to="/agents/overview"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-lg"
          >
            Explore Agents
          </Link>
          <a
            href="#solutions"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white text-lg rounded-full shadow-lg"
          >
            Learn More
          </a>
        </motion.div>

        {/* Background Animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(30,58,138,0.6) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(150px)",
          }}
        />
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-800 text-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">
          Transforming Industries with Agents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <motion.div
            className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">Thermal Cooling</h3>
            <p className="mt-4 text-gray-300">
              Optimize thermal management in data centers with AI-powered CFD agents to enhance energy efficiency and reduce operational costs.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              Renewable Energy
            </h3>
            <p className="mt-4 text-gray-300">
              Design and optimize wind turbines, solar panels, and hydrokinetic systems using intelligent CFD simulations to maximize energy production.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">AI-Driven Automation</h3>
            <p className="mt-4 text-gray-300">
              Deploy autonomous agents to reduce computational complexity in CFD workflows, saving time while achieving unparalleled precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-500 mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            FlowAgents is committed to bridging the gap between artificial intelligence and engineering solutions.
            We aim to empower engineers, researchers, and industries with cutting-edge tools that redefine how we
            solve critical problems in CFD, thermal cooling, and renewable energy.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold text-blue-500">
          Join the Revolution
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
          Be part of the journey where technology meets engineering to create a sustainable, efficient future.
        </p>
        <div className="mt-8">
          <Link
            to="/learn/tutorials"
            className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-6 text-center">
        <p>© 2025 FlowAgents. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
