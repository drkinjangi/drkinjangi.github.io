import React from "react";
import SectionLayout from "../../components/SectionLayout";

const Frameworks = () => {
  const frameworks = [
    {
      name: "Pytorch",
      description: "Popular deep learning framework created by Facebook (Meta)",
      useCase: "Building neural networks for computer vision, NLP, and scientific ML",
      link: "https://pytorch.org",
      difficulty: "Medium",
      personalExperience: "I've been using this for about 2 months. The tutorials are pretty good!"
    },
    {
      name: "TensorFlow/Keras",
      description: "Deep learning framework developed by Google",
      useCase: "Production ML systems, computer vision, NLP",
      link: "https://tensorflow.org",
      difficulty: "Medium",
      personalExperience: "Tried this first but found the API a bit confusing compared to PyTorch"
    },
    {
      name: "scikit-learn",
      description: "Simple and efficient tools for predictive data analysis",
      useCase: "Classical ML algorithms, preprocessing, evaluation",
      link: "https://scikit-learn.org",
      difficulty: "Easy",
      personalExperience: "Great for starting out! I use this for data preprocessing and simple models"
    },
    {
      name: "Hugging Face Transformers",
      description: "State-of-the-art NLP models and tools",
      useCase: "Working with pre-trained language models",
      link: "https://huggingface.co/transformers",
      difficulty: "Medium",
      personalExperience: "Amazing for using pre-trained LLMs without having to train from scratch"
    },
    {
      name: "JAX",
      description: "High-performance numerical computing with automatic differentiation",
      useCase: "Research, physics-based ML, high-performance computing",
      link: "https://github.com/google/jax",
      difficulty: "Hard",
      personalExperience: "Still learning this one - it's powerful but has a steep learning curve!"
    }
  ];

  return (
    <SectionLayout
      title="AI Frameworks"
      subtitle="Tools and libraries for building AI models"
    >
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <h2 className="text-3xl font-bold py-4">My Framework Journey</h2>
        <p>
          When I first got interested in AI, I had no idea there were so many different frameworks and libraries out there! It was honestly pretty overwhelming. I remember opening up a tutorial that used TensorFlow and being like "what is all this code doing??" >/
        </p>
        
        <p>
          After a few months of experimenting, I've tried several different frameworks and am starting to figure out which ones work best for different situations. I'm definitely not an expert yet, but I wanted to share what I've learned so far in case it helps other beginners.
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md my-8">
          <h3 className="text-xl font-semibold mb-3">My First ML Project Experience</h3>
          <p>
            For my first real project, I tried to predict heat transfer coefficients from geometry and flow parameters. I started with scikit-learn because the API seemed simpler, but quickly hit limitations when I wanted to incorporate physics constraints into the model.
          </p>
          <p className="mt-3">
            I ended up switching to PyTorch, which was definitely harder to learn but gave me much more flexibility. The hardest part was figuring out all the tensor operations and debugging gradient issues. But once I got the hang of it, I was able to build a custom loss function that included both data-driven learning and physics-based constraints.
          </p>
          <a 
            href="#" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Read my full project write-up ’
          </a>
        </div>

        <h2 className="text-3xl font-bold py-4">Frameworks I've Tried</h2>
        
        <div className="space-y-6 my-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{framework.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  framework.difficulty === "Easy" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                    : framework.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}>
                  {framework.difficulty}
                </span>
              </div>
              <p className="mt-2">{framework.description}</p>
              <p className="mt-2"><strong>Best for:</strong> {framework.useCase}</p>
              <p className="mt-2 italic text-gray-600 dark:text-gray-400">"{framework.personalExperience}"</p>
              <a 
                href={framework.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Official website ’
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold py-4">Setting Up My Development Environment</h2>
        
        <p>
          One thing that took me way too long to figure out was how to set up a good development environment for AI work. After a lot of trial and error, here's what's working for me:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-3">My Current Setup</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Conda</strong> for managing Python environments</li>
            <li><strong>VS Code</strong> with the Python and Jupyter extensions</li>
            <li><strong>Jupyter notebooks</strong> for experiments and visualization</li>
            <li><strong>Python scripts</strong> for production code</li>
            <li><strong>Git + DVC</strong> for code and data version control</li>
            <li><strong>Google Colab</strong> when I need more GPU power</li>
          </ul>
        </div>

        <p>
          I've wasted so many hours debugging environment issues, so if you're just starting out, I recommend keeping it simple with something like Anaconda and using separate environments for different projects.
        </p>

        <h2 className="text-3xl font-bold py-4">Latest Article I've Found Helpful</h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-3">Building Physics-Informed Neural Networks with PyTorch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I recently came across this super helpful guide about implementing PINNs using PyTorch. It walks through the whole process from setting up the neural network architecture to defining custom loss functions that incorporate PDE constraints. The code examples are clear and the explanations helped me understand concepts I was struggling with.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            What I found most useful was the section on computing derivatives automatically with PyTorch's autograd feature - this was exactly what I needed for my heat transfer project!
          </p>
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Read the article ’
          </a>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">What I'm Learning Next</h3>
          <p>
            I'm currently working through a course on JAX because I've heard it's really good for physics-based machine learning. It's definitely more challenging than PyTorch so far, but I'm excited about the potential performance gains for my CFD surrogate models. I'll update this page once I have more experience with it!
          </p>
        </div>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Get updates on my framework experiments and tutorials</label>
        <div className="mt-1 flex">
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Subscribe</button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default Frameworks;