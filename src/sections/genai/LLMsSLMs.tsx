import React from "react";
import SectionLayout from "../../components/SectionLayout";
import { Link } from "react-router-dom";

const LLMsSLMs = () => {
  return (
    <SectionLayout
      title="Large and Small Language Models"
      subtitle="Understanding the spectrum of AI language models"
    >
      <div className="prose max-w-prose py-6 dark:prose-invert">
        <h2 className="text-3xl font-bold py-4">What Are Language Models?</h2>
        <p>
          So I've been diving into this whole AI thing lately, and wow, there's a lot to take in! Language models are basically these computer programs that can understand and generate human language. It's pretty wild when you think about it - computers that can write essays, answer questions, and even make jokes (though some of the jokes are pretty bad, to be honest).
        </p>
        <p>
          From what I understand, these models learn by reading TONS of text from the internet, books, articles, and pretty much anything with words that humans have written. They find patterns in how we use language and then can produce similar text. It's not that they truly "understand" like we do, but they're getting surprisingly good at faking it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Large Language Models (LLMs)</h3>
            <p>
              LLMs are the big ones everyone's talking about these days - models with billions or even trillions of parameters (whatever those are exactly). They need huge computers to run and tons of data to train. But the results can be pretty amazing.
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>GPT-4 (OpenAI)</li>
              <li>Claude (Anthropic)</li>
              <li>Gemini (Google)</li>
              <li>Llama 3 (Meta)</li>
              <li>Mixtral (Mistral AI)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Small Language Models (SLMs)</h3>
            <p>
              SLMs are the newer trend I'm excited about. They're much smaller (like billions instead of trillions of parameters) but still surprisingly capable. The cool thing is they can run on regular computers or even phones, which means more privacy and no internet needed!
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Phi-3 (Microsoft)</li>
              <li>Gemma (Google)</li>
              <li>Mistral 7B</li>
              <li>Llama 3 8B (Meta)</li>
              <li>TinyLlama</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold py-4 mt-8">My First Experiment with a Language Model</h2>
        <p>
          I wanted to see what the hype was all about, so I tried running a small language model on my laptop last weekend. I downloaded Llama 3 8B and used this tool called Ollama to run it locally. I was honestly shocked at how well it worked for basic things, though it definitely made some funny mistakes too.
        </p>

        <p>
          Here's a simple prompt I tried:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
          <p className="font-mono">
            Write a short explanation of how heat sinks work for cooling computer components.
          </p>
        </div>
        <p>
          And it gave me a pretty decent answer! It explained how heat sinks use metal fins to increase surface area and allow better heat dissipation. Not mind-blowing but definitely useful. The crazy part is this was running completely on my own computer - no internet connection needed!
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-3">My Takeaways So Far</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>LLMs are impressive but need powerful servers</li>
            <li>SLMs are getting better quickly and can run on normal computers</li>
            <li>The ability to run models locally gives more privacy</li>
            <li>These models still make mistakes and can "hallucinate" facts</li>
            <li>The technology is improving incredibly fast - what I write today might be outdated in months!</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold py-4">Recent Articles I've Found Helpful</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Practical Guide to Running LLMs Locally</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I stumbled across this really helpful guide that walks through setting up different LLMs on your own computer. It covers everything from installation to basic prompt engineering. The step-by-step instructions helped me get my first model running without too much hassle.
          </p>
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Read the full article ’
          </a>
        </div>

        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Next Topics I'm Exploring</h3>
          <p>
            I'm just getting started with all this, but here are some topics I want to learn more about:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Fine-tuning models on specific domains (like CFD and engineering data)</li>
            <li>Prompt engineering techniques</li>
            <li>How to connect language models to other tools and data sources</li>
            <li>Ethical considerations around AI</li>
          </ul>
        </div>
        
        <p className="mt-8">
          I'll be updating this page as I learn more about language models and try new experiments. If you're also just getting started with this stuff, feel free to reach out - maybe we can figure it out together!
        </p>
      </div>

      <form className="mt-12">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Get updates on language model developments</label>
        <div className="mt-1 flex">
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Subscribe</button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default LLMsSLMs;