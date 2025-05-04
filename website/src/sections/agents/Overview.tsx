import React from "react";

// Accept `isDark` as a prop
const Overview = ({ isDark }: { isDark: boolean }) => {
  return (
    <div
      className={`min-h-screen p-8 ${
        isDark
          ? "bg-gray-900 text-white" // Dark mode styles
          : "bg-gray-100 text-gray-800" // Light mode styles
      }`}
    >
      {/* Section 1: Introduction to AI Agents */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Introduction to AI Agents
        </h1>
        <p className="text-lg mb-4">
          Artificial Intelligence (AI) agents are autonomous software entities
          designed to perceive their environment, make decisions, and execute
          actions to achieve specific objectives without human intervention.
          They leverage techniques such as machine learning and natural
          language processing to process inputs, learn from experiences, and
          adapt their behavior to changing conditions.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
          What is Agentic Flow?
        </h2>
        <p className="text-lg mb-4">
          Agentic Flow refers to the structured processes in which autonomous AI
          agents operate and make decisions independently to achieve specific
          goals within a defined environment. Unlike traditional AI systems
          that rely heavily on pre-defined rules or constant human intervention,
          AI agents in these workflows can perceive their environment, make
          decisions, learn from feedback, and act autonomously.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
          Types of AI Agents
        </h2>
        <ul className="list-disc list-inside text-lg">
          <li className="mb-2">
            <strong>Reactive Agents:</strong> These agents respond to specific
            stimuli from their environment without the use of internal symbolic
            models. They operate on a sense-act basis, reacting to changes as
            they occur.
          </li>
          <li className="mb-2">
            <strong>Deliberative Agents:</strong> Equipped with an internal
            model of the world, these agents can plan and make decisions by
            considering future possibilities and outcomes.
          </li>
          <li className="mb-2">
            <strong>Hybrid Agents:</strong> Combining both reactive and
            deliberative approaches, hybrid agents can respond to immediate
            stimuli while also engaging in complex planning and decision-making
            processes.
          </li>
        </ul>
      </section>

      {/* Section 2: Future of Agents and AGI */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          The Future of AI Agents and AGI
        </h1>
        <p className="text-lg mb-4">
          Artificial General Intelligence (AGI) refers to a level of AI where
          machines possess the ability to understand, learn, and apply
          intelligence across a wide range of tasks, much like a human being.
          The development of advanced AI agents is seen as a stepping stone
          towards achieving AGI. These agents are becoming increasingly
          sophisticated, capable of performing complex tasks, learning from
          minimal data, and making autonomous decisions.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
          Potential and Challenges
        </h2>
        <p className="text-lg mb-4">
          The integration of AI agents into various sectors promises numerous
          benefits, including increased efficiency, the ability to handle
          complex tasks, and the potential to drive innovation. However, this
          advancement also brings forth challenges such as ethical
          considerations, the need for robust regulatory frameworks, and
          concerns about the displacement of human labor.
        </p>
      </section>
    </div>
  );
};

export default Overview;
