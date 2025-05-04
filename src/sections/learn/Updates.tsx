import React from "react";
import SectionLayout from "../../components/SectionLayout";

const Updates = () => {
  const updates = [
    {
      date: "May 2, 2025",
      title: "NVIDIA Physics NeMo v1.2 Released",
      summary: "Improved operator API and enhanced support for multi-physics simulations",
      category: "Tool Release",
      content: `
        NVIDIA has released version 1.2 of Physics NeMo, featuring significant improvements to the operator API that 
        simplifies the development of custom physics operators. The update also brings enhanced support for multi-physics
        simulations, allowing for more seamless coupling between fluid dynamics, heat transfer, and structural mechanics.
        Performance benchmarks show up to 40% speedup for large-scale turbulence simulations compared to v1.1.
      `,
      link: "#"
    },
    {
      date: "April 28, 2025",
      title: "ArXiv: PINO for Turbulent Flows",
      summary: "Novel approach uses Fourier-based PINO variants to accurately capture turbulent structures",
      category: "Research",
      content: `
        A groundbreaking paper published on ArXiv demonstrates how Physics-Informed Neural Operators (PINO) can be
        tailored specifically for turbulent flow regimes. The authors introduce a Fourier-based variant that significantly
        outperforms previous methods in capturing small-scale turbulent structures while maintaining computational
        efficiency. The approach shows particular promise for data center cooling applications where accurate prediction
        of turbulent airflow patterns is critical for thermal management.
      `,
      link: "#"
    },
    {
      date: "April 15, 2025",
      title: "Data Center Cooling Agent Framework v0.9 Beta",
      summary: "Open-source framework for developing AI agents specialized in data center thermal optimization",
      category: "Open Source",
      content: `
        The initial beta release of the Data Center Cooling Agent Framework is now available on GitHub. This open-source
        project provides a comprehensive toolkit for developing autonomous agents that optimize cooling systems in
        data centers. The framework includes pre-trained surrogate models for common cooling configurations, interfaces
        with building management systems, and reinforcement learning environments for agent training. Early adopters
        report energy savings of 15-25% compared to traditional control systems.
      `,
      link: "#"
    },
    {
      date: "April 10, 2025",
      title: "FlowAgents Releases CFD Benchmark Dataset",
      summary: "Comprehensive benchmark dataset for evaluating AI-driven CFD models across various flow regimes",
      category: "Dataset",
      content: `
        FlowAgents has released a comprehensive benchmark dataset for evaluating the accuracy and performance of 
        AI-driven CFD models. The dataset includes high-fidelity simulation results across a range of flow regimes,
        from laminar to highly turbulent, with varying boundary conditions and geometries relevant to data center
        cooling and renewable energy applications. All data is accompanied by detailed metadata and evaluation scripts
        to facilitate fair comparisons between different approaches.
      `,
      link: "#"
    },
    {
      date: "March 28, 2025",
      title: "DeepXDE v2.0 Released with Enhanced Feature Support",
      summary: "Major update to popular physics-informed deep learning library adds new solver types and mesh capabilities",
      category: "Tool Release",
      content: `
        DeepXDE has released version 2.0, introducing significant enhancements for physics-informed machine learning.
        New features include adaptive mesh refinement for PDEs with sharp gradients, improved support for complex
        geometries through implicit boundary representations, and specialized solvers for high-dimensional systems.
        The update also brings better integration with PyTorch and JAX backends, enabling more efficient training
        on GPU and TPU architectures.
      `,
      link: "#"
    }
  ];

  return (
    <SectionLayout title="Latest Updates" subtitle="Recent developments in AI, CFD, and agent systems">
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <p className="lead">
          Stay current with the latest advancements, tool releases, research papers, and community announcements in the rapidly evolving fields of AI-driven CFD and agent systems.
        </p>
        
        <div className="flex justify-end my-6">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-medium text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10"
            >
              All
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10"
            >
              Research
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10"
            >
              Tools
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-medium text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10"
            >
              Community
            </button>
          </div>
        </div>
        
        <div className="space-y-12 mt-8">
          {updates.map((update, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {update.category}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{update.date}</p>
                  </div>
                  <button className="ml-2 inline-flex text-gray-400 hover:text-gray-500">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                <a href={update.link} className="block mt-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    {update.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{update.summary}</p>
                </a>
                <div className="mt-4 text-gray-700 dark:text-gray-300">
                  <p>{update.content}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={update.link}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Read more →
                  </a>
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                      <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                    <button className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                      <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <nav className="inline-flex shadow-sm -space-x-px">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-blue-50 dark:bg-blue-900 text-sm font-medium text-blue-600 dark:text-blue-400"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Get the latest updates directly in your inbox</label>
        <div className="mt-1 flex">
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Subscribe</button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default Updates;