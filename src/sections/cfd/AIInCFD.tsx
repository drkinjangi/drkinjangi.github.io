import React from "react";
import SectionLayout from "../../components/SectionLayout";

const AIInCFD = () => {
  return (
    <SectionLayout 
      title="AI in Computational Fluid Dynamics" 
      subtitle="Accelerating simulations through machine learning"
    >
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <h2 className="text-3xl font-bold py-4">Surrogate Models</h2>
        <p>
          Surrogate models serve as computationally efficient approximations of high-fidelity CFD simulations. By training neural networks on data generated from traditional simulations, these models can replicate complex fluid behaviors at a fraction of the computational cost. This approach is particularly valuable for design optimization, where thousands of design variants need to be evaluated quickly.
        </p>
        <p>
          Modern surrogate modeling techniques leverage deep learning architectures like convolutional neural networks (CNNs) and graph neural networks (GNNs) to capture spatial dependencies in flow fields. Advanced approaches incorporate physical constraints to ensure conservation laws are respected, even when the model generalizes to unseen conditions.
        </p>

        <h2 className="text-3xl font-bold py-4 mt-8">Reduced-Order Methods</h2>
        <p>
          Reduced-Order Models (ROMs) provide a principled approach to dimensionality reduction in fluid dynamics. By identifying the most important spatial and temporal patterns in flow data, ROMs can represent complex flow phenomena with dramatically fewer degrees of freedom. Techniques such as Proper Orthogonal Decomposition (POD) decompose high-dimensional flow fields into a basis of modes that capture the essential dynamics.
        </p>
        <p>
          When combined with machine learning, these methods evolve into nonlinear manifold ROMs that can accurately reproduce complex phenomena like turbulence, vortex shedding, and flow separation. The integration of autoencoders with physics-informed constraints has emerged as a particularly powerful paradigm for creating ROMs that remain stable and accurate over long time horizons.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-4">Example: Using a Pretrained PINN</h3>
          <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`# Python example of calling a pretrained PINN
import torch
from flow_models import PretrainedPINN

# Initialize the model
model = PretrainedPINN.load("thermal_convection_v2")

# Define input parameters for prediction
params = {
    "inlet_velocity": 0.5,  # m/s
    "inlet_temperature": 300,  # K
    "wall_temperature": 350,  # K
    "geometry": "data_center_rack_1"
}

# Run prediction (returns temperature and velocity fields)
temp_field, vel_field = model.predict(params)

# Access results at specific points
cooling_efficiency = model.evaluate_metric("cooling_efficiency")`}
          </pre>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-4">Benefits of AI-Enhanced CFD</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Speed:</strong> AI surrogate models can accelerate simulations by 100-1000x compared to traditional CFD solvers
            </li>
            <li>
              <strong>Real-time capabilities:</strong> Enable interactive design exploration and optimization that would be impossible with standard methods
            </li>
            <li>
              <strong>Multi-fidelity approaches:</strong> Combine sparse high-fidelity data with abundant low-fidelity simulations for optimal accuracy/cost balance
            </li>
            <li>
              <strong>Uncertainty quantification:</strong> Modern AI methods can provide confidence intervals on predictions, essential for engineering applications
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Case Study: Data Center Cooling</h3>
          <p className="text-gray-700 dark:text-gray-300">
            AI-enhanced CFD has revolutionized thermal management in data centers. By creating surrogate models trained on thousands of rack configurations, cooling strategies can be optimized in real-time as server loads change. This approach enables dynamic adaptation of cooling resources, reducing energy costs by up to 30% while ensuring all equipment remains within temperature specifications.
          </p>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 mt-4 flex items-center justify-center text-gray-500 dark:text-gray-400">
            TODO: Interactive data center cooling visualization
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Future Directions</h3>
          <p className="text-gray-700 dark:text-gray-300">
            The next frontier in AI-CFD integration focuses on multi-physics simulations where fluid dynamics couples with structural mechanics, electromagnetics, and other domains. Emerging techniques like multi-network PINNs and neural operators show promise for these complex scenarios. Additionally, the field is moving toward fully differentiable simulations, allowing for end-to-end optimization of designs, materials, and operating conditions through gradient-based methods.
          </p>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 mt-4 flex items-center justify-center text-gray-500 dark:text-gray-400">
            TODO: Multi-physics simulation diagram
          </div>
        </div>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Get updates on AI-CFD research</label>
        <div className="mt-1 flex">
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Subscribe</button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default AIInCFD;