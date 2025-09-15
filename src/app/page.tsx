"use client";

import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import CertificationCard from '@/components/CertificationCard';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  return (
    <Layout>
      {/* Headshot Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4">
        <Image
          src="/kai-headshot.JPG"
          alt="Kai's headshot"
          width={336}
          height={336}
          className="w-84 h-84 rounded-full object-cover mb-6 shadow-md"
          data-aos="zoom-in"
        /> 

        <h1 className="text-4xl md:text-5xl font-bold text-center" data-aos="fade-up">Kai Barker</h1>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-xl">
          Statistics and Data Science student with a passion for problem solving, collaboration, and connecting with others.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-100" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          <ProjectCard
            title="Personal Website"
            description="You are here right now! Designed and developed a fully responsive portfolio site using Next.js with the App Router, Tailwind CSS, and TypeScript. Implemented scroll-based animations, optimized images with Next.js' native tools, and deployed via Vercel."
            tech={['HTML', 'Tailwind CSS', 'GitHub', 'Vercel', 'Next.js', 'TypeScript']}
            github="https://github.com/kbarker223/Personal-Portfolio-Website"
          />
          <ProjectCard
            title="Message Decryption using MCMC and Simulated Annealing"
            description="Using a Metropolis-Hastings message decryption algorithm, we researched and documented the algorithms functionality and underlying mechanics, and optimized the decoder using simulated annealing. Borrowing simulated annealing from the Traveling Salesman Problem, a similar optimization problem, we updated the Metropolis-Hastings algorithm and discussed its impact on message decryption."
            tech={['Python', 'Latex', 'Simulated Annealing', 'Markov Chain Monte Carlo']}
            link="/160B_Final_Project.pdf"
            linkLabel="View PDF"
            github="https://github.com/LucasC212/Message-Decryption-and-TSP-with-Simulated-Annealing"
          />
          <ProjectCard
            title="NeurIPS Ariel Data Challenge 2025"
            description=""
            tech={['Python', 'Machine Learning', 'Data Analysis', 'Ensemble', 'GPR', 'XGBoost', 'Data Cleaning', 'Kaggle', 'Pandas']}
            link=""
            linkLabel="Kaggle Notebook"
          />
          
          {/* Toggleable Projects */}
          {showAll && (
            <>
              <ProjectCard
                title="2025 March Madness Forecasting"
                description="Developed a solution to Kaggle's March Madness Machine Learning Mania to forecast both mens and womens NCAA tournament game outcomes.
                Using historical game data, seeding information, strength of schedules, and team statistics. Implemented a goto conversion solution (https://www.kaggle.com/code/kaito510/goto-conversion-winning-solution) in order to convert american betting odds to statistical probabilities for predicting outcomes."
                tech={['Python', 'Data Analysis', 'Kaggle', 'Pandas', 'Go to Conversion']}
                link="https://www.kaggle.com/competitions/march-machine-learning-mania-2025/overview"
                linkLabel="Kaggle Competition"
                github="https://github.com/kbarker223/2025-March-Madness/tree/main"
              />
              <ProjectCard
                title="Predicting NBA stats with Machine Learning"
                description="Implemented a machine learning model using scikit-learn to predict NBA player rebounds for upcoming games. 
                Collected and processed real-time season data using NBA API, 
                engineered features based on recent performance trends and opponent matchups, and trained a Random Forest Regressor to 
                model player outcomes. Evaluated model accuracy using MAE and tracked results in Excel to explore sports 
                analytics and discover trends."
                tech={['Python', 'Machine Learning', 'Linear Regression', 'Random Forest', 'Microsoft Excel']}
                github="https://github.com/kbarker223/Predicting-NBA-Stats-with-Machine-Learning"
              />
              <ProjectCard
                title="Physics Based Billiard Simulation"
                description="This was a small project to work with numpy, matplotlib, and explore a phsyics based simultion in Python. 
                Using Newtwons Second Law of Motion, and the balls position, speed, and velocity I was able to accurately 
                simulate the billiard balls on the table. The initial vectors x_r, x_b, v_r, v_b could be updated to change 
                the balls inital positions and velocities, or more balls could be added to the simulation."
                tech={['Python', 'matplotlib', 'numpy', 'Simulation', 'Physics', 'Vectors']}
                link="https://raw.githubusercontent.com/kbarker223/Physics-Based-Billiards-Sim/refs/heads/main/simulation.gif"
                linkLabel="Live Demo"
                github="https://github.com/kbarker223/Physics-Based-Billiards-Sim"
              />
            </>
          )}
        </div>

          {/* Read More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {showAll ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-white" data-aos="fade-up">
      <h2 className="text-3xl font-semibold text-center mb-8">Certifications</h2>
      <div className="border border-gray-300 rounded-md p-5 bg-white">
        <CertificationCard
          title="Kaggle Learn"
          issuer="Kaggle"
          date="July 2025"
          description="Completed multiple hands-on Kaggle courses to refine data skills and support personal projects. 
          Developed practical expertise in Machine Learning, Pandas, SQL, and Data Visualization, Deep Learning. 
          Enhanced capabilities in model building with Pipelines, XGBoost, and Cross-Validation, as well as data visualization through Seaborn. 
          Strengthened cloud proficiency with Google Cloud, and BigQuery, and practiced writing efficient SQL queries with real world applications."
          certLinks={[
            { label: "Machine Learning", url: "/ml-cert-kaggle.png"},
            { label: "SQL", url: "/sql-cert-kaggle.png"},
            { label: "Pandas", url: "/pandas.png"},
            { label: "Data Visualization (Seaborn)", url: "/datavis-cert-kaggle.png"},
            { label: "Deep Learning", url: "/Kai Barker123 - Intro to Deep Learning.png"}
          ]}
        />
        <CertificationCard
          title="JP Morgan Chase Quantitative Analysis "
          issuer="Forage · JP Morgan Chase"
          date="April 2025"
          description="A hands-on 4-task job simulation focused on applying quantitative models to financial data, analyzing interest rate risk, and presenting data-driven insights to support trading decisions."
          certLinks={[
            { label: "View Certificate", url: "/JPM QA Certificate.pdf"},
          ]}
        />
      </div>
      </section>

      {/* Honors Image */}
      <section className="relative my-16">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/kai-collab.jpg"
          alt="Kai collaborating with others"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
        />
      </div>
        <div className="relative z-10 text-center py-24">
        <h2 className="text-3xl font-semibold text-gray-800"></h2>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
        </p>
      </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 px-4" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600">
          I&apos;m Kai Barker, a fourth year student at University of California, Santa Barbara pursuing a B.S in Statistics and Data Science. 
          I have a passion for working with others, solving complex problems, and building tools that make data more accessible and actionable.
          Whether I am in the classroom, working on a personal project, or collaborating on research, I am always looking for new ways to apply my learning.
          <br></br>
          <br></br>
          I enjoy working on projects that blend data analytics, design, and user-focused thinking. I am esepcially interested in roles that involve teamwork and communication.
          Outside of data science, I have worked in multiple sales jobs that have further enhanced my people skills and shown me that I have a passion for helping others and understanding
          their needs. My leadership experience as a store manager has improved my time management skills, and allowed me to learn how to coordinate efforts with a team to 
          meet store goals and customer needs.
          <br></br>
          <br></br>
          In my free time, you can catch me climbing, hiking, or at the pickleball or basketball courts. I am seeking internship opportunities, jobs, or research positions that
          will not only further my technical skills, but that will also challenge me to learn and explore new ideas. Feel free to check out my resume below, and don&apos;t hesitate to reach out, I would love to connect!  
          
        </p>
        <p className="text-center mt-6">
          <a
            href="/Barker_Resume_July25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            My Resume (PDF)
          </a>
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-100 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-4">Email: kaiandreasbarker@gmail.com</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/kbarker223"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            <FiGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaiabarker/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            <FaLinkedinIn size={32} />
          </a>
        </div>
      </section>
    </Layout>
  );
}



