import React from "react";
import SectionLayout from "../../components/SectionLayout";

const HeatTransfer = () => {
  return (
    <SectionLayout
      title="Heat Transfer"
      subtitle="Optimizing thermal management from chip to facility scale"
    >
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <section>
          <h2 className="text-3xl font-bold py-4">Chip & Server Level</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Conduction in Electronics</h3>
              <p>
                Thermal conduction is the primary heat transfer mechanism within electronic components. As computational demands increase, modern chip designs must optimize complex heat spreading paths from transistors to heat sinks. AI-enhanced CFD allows engineers to simulate thousands of design variants to identify optimal thermal interface materials, die arrangements, and heat sink geometries while considering manufacturing constraints.
              </p>
              <p className="mt-3">
                Advanced cooling solutions like embedded vapor chambers and micro-channel liquid cooling introduce multi-phase heat transfer mechanisms that traditional CFD struggles to model efficiently. Physics-augmented neural networks now enable engineers to account for phase-change phenomena accurately while reducing simulation time from days to minutes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Convection Cooling Strategies</h3>
              <p>
                Convective heat transfer dominates at the server level, where airflow management determines cooling efficiency. Optimizing fan placement, vent designs, and internal baffles is a complex multi-objective problem balancing thermal performance against acoustic noise and energy consumption. Machine learning approaches excel at navigating these trade-offs by building surrogate models from both simulation data and physical prototype measurements.
              </p>
              <p className="mt-3">
                Liquid cooling systems offer superior thermal performance but introduce complexity in fluid distribution, connector reliability, and maintenance. Differentiable fluid simulations now enable end-to-end optimization of coolant channels, manifold designs, and control strategies. These techniques have led to breakthrough designs that achieve junction temperatures 15-20°C lower than traditional approaches while improving reliability.
              </p>
            </div>
          </div>
          
          <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded-lg mb-12 flex items-center justify-center text-gray-500 dark:text-gray-400">
            TODO: Interactive visualization of server thermal profiles
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold py-4">Data-Center Level</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Airflow Management</h3>
              <p>
                At the facility scale, effective airflow management is critical for preventing hotspots and maximizing cooling efficiency. The complex interaction between CRAC units, raised floors, server racks, and return air paths creates challenging CFD problems with multiple time and spatial scales. AI-accelerated simulations now enable data center operators to model entire facilities in near real-time, allowing them to optimize damper positions, fan speeds, and workload placement dynamically as computing demands shift.
              </p>
              <p className="mt-3">
                Modern implementations use a hierarchy of models, from high-fidelity CFD for detailed rack-level analysis to reduced-order neural networks for facility-scale optimization. This multi-scale approach provides an optimal balance between accuracy and computational efficiency, enabling both design-time optimization and runtime control applications.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Rack Cooling Strategies</h3>
              <p>
                The evolution of rack cooling designs from traditional front-to-back air flow to in-row cooling, rear-door heat exchangers, and immersion cooling represents a significant shift in thermal management approaches. Each strategy presents unique CFD modeling challenges, from detailed turbulence modeling in air-cooled systems to complex multi-phase heat transfer in immersion setups.
              </p>
              <p className="mt-3">
                Physics-informed neural networks have proven particularly valuable for modeling these advanced cooling technologies, capturing complex phenomena like buoyancy-driven flows, boundary layer effects, and phase change processes. Hybrid approaches that combine data from embedded sensors with real-time simulations enable predictive control systems that can anticipate thermal issues before they affect system reliability.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              TODO: Data center airflow visualization
            </div>
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              TODO: PUE optimization chart
            </div>
          </div>
        </section>
        
        <section className="mt-12 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Metrics and Optimization Targets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Target Range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Junction Temperature (Tj)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Max temperature at the semiconductor junction
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    &lt; 85°C typical, &lt;100°C max
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Thermal Resistance (θ)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Resistance to heat flow in °C/W
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    0.1-0.5 °C/W (junction to ambient)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    PUE (Power Usage Effectiveness)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Ratio of total facility energy to IT equipment energy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    1.1-1.4 (state-of-the-art)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Temperature Rise (ΔT)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Temperature difference across a rack
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    15-25°C typical
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Get thermal management research updates
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
            className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default HeatTransfer;