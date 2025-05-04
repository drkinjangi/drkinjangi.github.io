import React from "react";
import SectionLayout from "../../components/SectionLayout";

const PINNs = () => {
  const pinnVariants = [
    {
      name: "Classical PINNs",
      description: "The original approach introduced by Raissi et al. that embeds PDEs as soft constraints in neural network loss functions."
    },
    {
      name: "PINO (Physics-Informed Neural Operators)",
      description: "Combines Neural Operators with physics-informed constraints for generalization across different initial conditions."
    },
    {
      name: "FNO (Fourier Neural Operator)",
      description: "Leverages Fourier transforms to efficiently learn mappings between function spaces for complex fluid simulations."
    },
    {
      name: "Adaptive PINNs",
      description: "Dynamically adjusts training to focus on regions with high PDE residuals, improving accuracy for problems with complex physics."
    }
  ];

  const frameworks = [
    {
      name: "NVIDIA Modulus",
      description: "An end-to-end platform for developing physics-ML models with sophisticated PDE solving capabilities.",
      link: "https://developer.nvidia.com/modulus"
    },
    {
      name: "DeepXDE",
      description: "A library for scientific machine learning and physics-informed learning that supports various types of PDEs.",
      link: "https://deepxde.readthedocs.io/"
    },
    {
      name: "NVIDIA Physics NeMo",
      description: "Extends the NVIDIA NeMo framework with specialization for physics-based problems.",
      link: "https://developer.nvidia.com/nemo"
    },
    {
      name: "xDeepONet",
      description: "Implementation of Deep Operator Networks for learning nonlinear operators in differential equations.",
      link: "https://github.com/lu-group/deeponet"
    }
  ];

  return (
    <SectionLayout 
      title="Physics-Informed Neural Networks" 
      subtitle="Embedding physics knowledge into neural architectures"
    >
      <article className="prose max-w-prose py-6 dark:prose-invert">
        <h2 className="text-3xl font-bold py-4">Why PINNs Matter</h2>
        <p>
          Physics-Informed Neural Networks (PINNs) represent a paradigm shift in scientific computing by embedding physical laws directly into neural networks. Unlike traditional purely data-driven approaches, PINNs incorporate differential equations as soft constraints during training, ensuring physical consistency in predictions.
        </p>
        <p>
          This approach bridges the gap between numerical simulations and machine learning, offering advantages in terms of computational efficiency, differentiability, and the ability to handle sparse or noisy data. For CFD applications, PINNs can dramatically reduce simulation time while maintaining physical accuracy.
        </p>
        
        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">PINN Variants</h3>
          <ul className="space-y-4">
            {pinnVariants.map((variant, index) => (
              <li key={index} className="border-l-4 border-blue-500 pl-4">
                <span className="font-bold">{variant.name}</span>: {variant.description}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="prose max-w-prose py-6 dark:prose-invert mt-12">
        <h2 className="text-3xl font-bold py-4">Frameworks & Toolkits</h2>
        <p>
          The ecosystem for physics-informed machine learning has grown significantly in recent years. Several frameworks now offer specialized tools for developing, training, and deploying PINNs for fluid dynamics, heat transfer, and other engineering applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{framework.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{framework.description}</p>
              <a 
                href={framework.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </article>

      {/* Example of how to import and render an MDX tutorial */}
      <div className="mt-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Tutorial Integration</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">Import and render MDX tutorials with this pattern:</p>
        <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
          {`// In your component: 
import MyTutorial from '../../blog/pinns/BasicPINN.mdx'

// In your JSX:
<div className="tutorial-container">
  <MyTutorial />
</div>`}
        </pre>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Get updates on PINN research</label>
        <div className="mt-1 flex">
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Subscribe</button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default PINNs;