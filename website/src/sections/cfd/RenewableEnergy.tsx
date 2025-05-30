import React from "react";
import SectionLayout from "../../components/SectionLayout";

const RenewableEnergy = () => {
  return (
    <SectionLayout
      title="Renewable Energy Integration"
      subtitle="Sustainable cooling solutions powered by green energy"
    >
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <section>
          <h2 className="text-3xl font-bold py-4">Integrating Wind and Solar into Data Center Cooling</h2>
          
          <p>
            Modern data centers represent one of the fastest-growing segments of global energy consumption, with cooling systems typically accounting for 30-40% of their total energy usage. Integrating renewable energy sources directly into cooling infrastructure offers a pathway to both carbon reduction and operational cost savings. Advanced CFD simulations now enable engineers to design hybrid cooling systems that dynamically adapt to variable renewable energy availability while maintaining strict thermal requirements.
          </p>
          
          <p className="mt-4">
            Wind-integrated cooling systems leverage both the electrical energy generated by wind turbines and the direct cooling effect of ambient air movement. These systems require sophisticated airflow modeling that accounts for turbulence, seasonal variations, and the complex interaction between natural and mechanical ventilation. Physics-informed neural networks have emerged as powerful tools for optimizing these designs, reducing simulation time from weeks to hours while capturing the multi-physics nature of the problem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              TODO: Wind energy integration diagram
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Wind Energy Integration</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Direct drive cooling fans with variable frequency drives</li>
                <li>Dynamic pressure equalization systems</li>
                <li>Smart ducting with automated damper control</li>
                <li>Hybrid cooling towers with wind augmentation</li>
                <li>Thermal energy storage to buffer intermittency</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-6">
            Solar-powered cooling represents another frontier in sustainable thermal management. Beyond simply providing electricity for conventional cooling systems, advanced approaches use solar thermal collectors to drive absorption chillers or desiccant dehumidification systems. These complex thermodynamic cycles present significant modeling challenges that benefit from AI-enhanced simulation techniques. By combining first-principles thermodynamics with machine learning, engineers can optimize these systems across diverse weather conditions and load profiles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Solar Cooling Technologies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Photovoltaic-powered vapor compression</li>
                <li>Solar thermal absorption chillers</li>
                <li>Desiccant cooling systems</li>
                <li>Phase-change material thermal storage</li>
                <li>Radiative cooling panels</li>
              </ul>
            </div>
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              TODO: Solar cooling visualization
            </div>
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-3xl font-bold py-4">Case Studies</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-3">Google's DeepMind AI-Controlled Cooling</h3>
            <p>
              Google has pioneered the use of AI to optimize data center cooling, deploying a system that predicts future cooling needs based on server workloads, weather forecasts, and renewable energy availability. By integrating predictions about wind and solar production, the system can precool when renewable energy is abundant and reduce cooling intensity during periods of lower renewable availability, all while maintaining equipment within thermal specifications.
            </p>
            <p className="mt-3">
              The system uses a hierarchy of simulation models, including reduced-order CFD surrogates, to predict airflow patterns and temperature distributions throughout the facility. This approach has reduced cooling energy by 30% while increasing the percentage of cooling energy derived from renewable sources.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Microsoft's Underwater Data Centers</h3>
            <p>
              Microsoft's Project Natick explores underwater data centers that leverage the naturally cool ocean environment for passive cooling. This revolutionary approach eliminates traditional mechanical cooling systems entirely, instead using specialized heat exchangers to transfer heat directly to the surrounding seawater. The project integrates with offshore wind farms to provide renewable power while using AI-driven CFD to optimize the placement of servers within the pressure vessel and the design of the external heat exchanger surfaces.
            </p>
            <p className="mt-3">
              The thermal modeling for this project required sophisticated multi-physics simulations accounting for natural convection currents in the ocean, biofouling of heat exchange surfaces, and the structural impacts of heat distribution. Physics-augmented neural networks proved essential for capturing these complex interactions while maintaining computational efficiency.
            </p>
          </div>
        </section>
        
        <section className="mt-12 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Energy Efficiency Metrics</h2>
          
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
                    Industry Best
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    PUE (Power Usage Effectiveness)
                  </td>
                  <td className="px-6 py-4 text-sm">
                    Ratio of total facility energy to IT equipment energy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    1.07 (Google)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    REF (Renewable Energy Factor)
                  </td>
                  <td className="px-6 py-4 text-sm">
                    Percentage of energy from renewable sources
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    100% (Microsoft, Apple)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    CUE (Carbon Usage Effectiveness)
                  </td>
                  <td className="px-6 py-4 text-sm">
                    Total CO₂ emissions caused by data center energy / IT energy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    0.28 (Industry leaders)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    WUE (Water Usage Effectiveness)
                  </td>
                  <td className="px-6 py-4 text-sm">
                    Liters of water used per kWh of IT energy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    0.09 L/kWh (Google)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-3xl font-bold py-4">Future Directions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">AI-Driven Forecasting</h3>
              <p>
                Next-generation systems will use deep reinforcement learning to optimize cooling based on dynamic predictions of renewable energy availability, workload patterns, and weather conditions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Microgrids & Energy Storage</h3>
              <p>
                Integrated thermal and electrical storage systems will enable data centers to store renewable energy in multiple forms, balancing intermittency while providing cooling redundancy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Heat Recovery Systems</h3>
              <p>
                Advanced heat recovery systems will transform data centers from energy consumers to community thermal resources, providing district heating and industrial process heat.
              </p>
            </div>
          </div>
        </section>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Get renewable energy integration updates
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

export default RenewableEnergy;