import React from "react";
import SectionLayout from "../../components/SectionLayout";

const Data = () => {
  return (
    <SectionLayout
      title="Data for AI Models"
      subtitle="Building quality datasets for training effective models"
    >
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <h2 className="text-3xl font-bold py-4">My Journey into AI Data Collection</h2>
        <p>
          Hey everyone! I'm still pretty new to this whole AI thing, but I'm learning that data is super important - maybe even more important than the fancy models everyone talks about. So I've been digging into how to collect, clean, and organize data for training AI models. It's been quite the learning experience!
        </p>
        
        <p>
          One thing I've realized is that good data is like the foundation of a house - if it's weak or messy, everything you build on top will be shaky too. I made this mistake with my first project when I just threw together some information without being careful about quality. The results were... well, let's just say not great. =
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md my-8">
          <h3 className="text-xl font-semibold mb-3">My First Data Collection Project</h3>
          <p>
            Last month I tried to build a dataset of fluid dynamics simulation results to train a simple model. I thought it would be easy - just grab some numbers from papers and simulations I found online. Turns out that was a terrible approach! The data was inconsistent, used different units, and some of it was just plain wrong.
          </p>
          <p className="mt-3">
            After that failure, I started fresh with a more organized approach. I'm now carefully documenting where each piece of data comes from, making sure all the units are consistent, and validating everything against known physics principles. It's taking WAY longer, but the quality is so much better.
          </p>
        </div>

        <h2 className="text-3xl font-bold py-4">Types of Data I'm Working With</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Simulation Data</h3>
            <p>
              This is data generated from computational simulations like CFD (Computational Fluid Dynamics). I've been running some basic OpenFOAM simulations on my laptop, though they take forever to complete! The good thing is I can control exactly what parameters to use.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Key challenge: Making sure the simulations are actually accurate and validating them against real-world results.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Experimental Data</h3>
            <p>
              This is data from actual physical experiments. Since I don't have a lab, I'm relying on published research papers and open datasets. The quality varies a lot, and it's hard to find exactly what I need sometimes.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Key challenge: Finding enough relevant data and dealing with inconsistent formats and measurement techniques.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Synthetic Data</h3>
            <p>
              This is artificially generated data that mimics real patterns. I've been experimenting with creating synthetic datasets for simple fluid flow scenarios. It's not perfect but lets me create large amounts of data quickly.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Key challenge: Making sure the synthetic data actually represents realistic physical behavior.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Augmented Data</h3>
            <p>
              This is when you take existing data and modify it slightly to create more training examples. I've been trying simple techniques like adding noise to simulation results or rotating/flipping geometries.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Key challenge: Making sure augmentations create physically valid scenarios and don't introduce unrealistic artifacts.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold py-4">My Current Data Project</h2>
        
        <p>
          Right now I'm working on a dataset for heat transfer in electronic components. I'm combining:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>Temperature measurements from some simple experiments I did with heat sinks</li>
          <li>Computational simulations I ran for different airflow rates</li>
          <li>Data from a few research papers on electronic cooling</li>
        </ul>
        
        <p>
          The goal is to eventually train a model that can predict how well different cooling solutions will work without having to run full simulations. It's ambitious for sure, but I'm learning a ton along the way!
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-3">Lessons I've Learned So Far</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Quality over quantity</strong> - Better to have a small, clean dataset than a huge messy one</li>
            <li><strong>Document everything</strong> - Future me always appreciates when I write down where data came from and how it was processed</li>
            <li><strong>Validate, validate, validate</strong> - Always check data against physical laws and common sense</li>
            <li><strong>Be consistent</strong> - Use the same units, coordinate systems, and naming conventions</li>
            <li><strong>Version control is essential</strong> - I learned this the hard way after accidentally overwriting processed data</li>
          </ol>
        </div>

        <h2 className="text-3xl font-bold py-4">Cool Tools I've Discovered</h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-3">DVC (Data Version Control)</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I stumbled across this tool called DVC that's like git but for data files. It's been a game-changer for keeping track of my datasets as they evolve. I can tag different versions, roll back changes, and even share the data with others without needing to upload huge files.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I've written a simple guide on how I set it up for my CFD datasets that might help if you're also working with large simulation files.
          </p>
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Read my DVC setup guide ’
          </a>
        </div>
        
        <p className="mt-8">
          This is just the beginning of my data journey! I'll be updating this page with more lessons, tools, and resources as I continue learning. If you have suggestions or want to collaborate on a dataset, drop me a message!
        </p>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Get updates on my data projects and tutorials</label>
        <div className="mt-1 flex">
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Subscribe</button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default Data;