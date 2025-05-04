import React from "react";
import SectionLayout from "../../components/SectionLayout";

const Glossary = () => {
  const terms = [
    {
      term: "PINN",
      definition: "Physics-Informed Neural Network; a deep learning approach that embeds physical laws (PDEs) as constraints in the training process to ensure predictions adhere to known physics.",
      category: "AI-CFD",
    },
    {
      term: "FNO",
      definition: "Fourier Neural Operator; a type of neural network architecture that uses Fourier transforms to efficiently learn mappings between function spaces, excelling at fluid dynamic problems.",
      category: "AI-CFD",
    },
    {
      term: "PINO",
      definition: "Physics-Informed Neural Operator; combines Neural Operators with physics-informed constraints to create surrogate models that generalize across different initial and boundary conditions.",
      category: "AI-CFD",
    },
    {
      term: "PUE",
      definition: "Power Usage Effectiveness; a metric that measures data center energy efficiency, calculated as total facility energy consumption divided by IT equipment energy consumption.",
      category: "Data Center",
    },
    {
      term: "Surrogate Model",
      definition: "A computationally efficient approximation of a high-fidelity simulation that uses machine learning to predict outcomes without running the full simulation.",
      category: "AI-CFD",
    },
    {
      term: "Agent",
      definition: "In AI, an autonomous entity that perceives its environment, makes decisions, and takes actions to achieve specific goals without constant human supervision.",
      category: "AI",
    },
    {
      term: "ROM",
      definition: "Reduced Order Model; a simplified model that captures the essential dynamics of a complex system with dramatically fewer degrees of freedom than the original system.",
      category: "AI-CFD",
    },
    {
      term: "DeepONet",
      definition: "Deep Operator Network; a neural network architecture designed to learn nonlinear operators that map between infinite-dimensional function spaces.",
      category: "AI-CFD",
    },
    {
      term: "LLM",
      definition: "Large Language Model; a type of AI model trained on vast amounts of text data to understand and generate human-like language, used for tasks from summarization to code generation.",
      category: "AI",
    },
    {
      term: "SLM",
      definition: "Small Language Model; compact, efficient language models that require less computational resources while maintaining reasonable performance for specific tasks.",
      category: "AI",
    },
    {
      term: "CFD",
      definition: "Computational Fluid Dynamics; the use of numerical methods and algorithms to solve and analyze problems involving fluid flows and heat transfer.",
      category: "Engineering",
    },
    {
      term: "RAG",
      definition: "Retrieval-Augmented Generation; a technique that enhances language model outputs by retrieving relevant information from external knowledge sources before generating responses.",
      category: "AI",
    }
  ];

  // Group terms by category
  const groupedTerms = terms.reduce((acc, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {});

  return (
    <SectionLayout title="Glossary" subtitle="Key terms and definitions in AI, CFD, and agent systems">
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <p className="lead">
          This glossary provides definitions for important concepts, technologies, and metrics used throughout FlowAgents. Understanding these terms will help you navigate the intersection of AI, computational fluid dynamics, and agent systems more effectively.
        </p>

        {/* Search functionality */}
        <div className="my-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search terms..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grouped terms by category */}
        {Object.entries(groupedTerms).map(([category, categoryTerms]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold py-4">{category} Terms</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Term
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Definition
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {categoryTerms.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.term}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                        {item.definition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Suggest a Term</h2>
          <p>
            Don't see a term that should be included? Help us improve our glossary by suggesting new entries.
          </p>
          <form className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="term" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Term
                </label>
                <input
                  type="text"
                  id="term"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="definition" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Definition
                </label>
                <textarea
                  id="definition"
                  rows={3}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <select
                  id="category"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 dark:text-gray-100"
                >
                  <option>AI</option>
                  <option>AI-CFD</option>
                  <option>Engineering</option>
                  <option>Data Center</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Suggestion
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Get updates when new terms are added</label>
        <div className="mt-1 flex">
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Subscribe</button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default Glossary;