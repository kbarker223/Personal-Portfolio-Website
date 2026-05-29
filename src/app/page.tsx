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
          src="/headshot_cyc1.JPG"
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
            title="Congressional Stock Trading Research"
            description="This two-part research project investigates whether U.S. congressional stock trades contain exploitable informational signals. 
            The first paper analyzes 70,000+ STOCK Act disclosures to test whether members of Congress beat the market, finding that while average 
            returns are insignificant, a persistent group of outlier members generate exceptional gains. The second paper builds on this by 
            constructing a weighted alpha signal from CAPM-adjusted abnormal returns, cleaning the covariance matrix using Random Matrix Theory 
            eigenvalue decomposition, and optimizing a mean-variance portfolio. The resulting strategy approximately tracks the S&P 500 with 
            statistically significant alpha among top-performing members and coordinated purchases.
"
            tech={['Python', 'Research', 'Data Analysis', 'Finance', 'CAPM', 'RMT', 'Covariance Matrix', 'Visualizations']}
            link="Barker_Ichiba_Congressional_Portfolio_Construction_2025.pdf"
            linkLabel="View Paper"
            github="https://github.com/kbarker223/congressional-research"
          />
          <ProjectCard
            title="NeurIPS Ariel Data Challenge 2025"
            description="Developed ensemble machine learning models combining XGBoost, Ridge, and Gaussian Process Regression to extract 
            exoplanet atmospheric signals from noisy spectral focal plane images for the European Space Agency's upcoming Ariel mission. 
            Successfully predicted atmospheric compositions across 283 wavelength channels from simulated space telescope observations, 
            achieving a Gaussian Log-Likelihood score of 0.311. The project required processing and cleaning over 14,000 messy telescope image files 
            representing 1,100 exoplanets across over 200 GB of data, involving advanced signal processing, uncertainty 
            quantification, and instrumental noise reduction techniques critical for exoplanet characterization.
"
            tech={['Python', 'Machine Learning', 'Data Analysis', 'Ensemble', 'GPR', 'XGBoost', 'Data Cleaning', 'Kaggle', 'Pandas', 'Numpy']}
            link="https://www.kaggle.com/code/kaibarker123/kb123-ariel-data-challenge-2025"
            linkLabel="Kaggle Notebook"
          />
          <ProjectCard
            title="Message Decryption using MCMC and Simulated Annealing"
            description="Using a Metropolis-Hastings message decryption algorithm, we researched and documented the algorithms functionality and underlying mechanics, and optimized the decoder using simulated annealing. Borrowing simulated annealing from the Traveling Salesman Problem, a similar optimization problem, we updated the Metropolis-Hastings algorithm and discussed its impact on message decryption."
            tech={['Python', 'Latex', 'Simulated Annealing', 'Markov Chain Monte Carlo']}
            link="Markov_Chain_Monte_Carlo_and_TSP_Barker.pdf"
            linkLabel="View Paper"
            github="https://github.com/kbarker223/MCMC"
          />
          <ProjectCard
            title="Ocean Warming and Acidification - Kelp Growth Analysis"
            description="Conducted a multivariate statistical analysis to determine the impact of 
            climate change stressors on Macrocystis pyrifera (Giant Kelp). Using a factorial 
            experimental design, I performed multiple linear regressions and significance 
            testing to quantify how increased temperature and carbon dioxide levels interact to affect 
            kelp blade growth and surface area. The research focused on isolating the metabolic 
            costs of ocean acidification in temperate marine ecosystems."
            tech={['R', 'ggplot2', 'Statistical Modeling', 'Hypothesis Testing', 'Regression Analysis']}
            link="Ocean_Warming_Acidification_Kelp_Analysis.html"
            linkLabel="View Paper"
            github="https://github.com/kbarker223/OceanWarmingKelp/tree/main"
          />
          <ProjectCard
              title="Machine Learning for Prediction NBA Performance"
              description="Built a machine learning pipeline to predict NBA player rebounds using real-time season data from the NBA API. 
              Engineered features based on recent performance trends and opponent matchups, then trained models including Random Forest and 
              XGBoost regressors to forecast player outcomes. Integrated SHAP (SHapley Additive exPlanations) for model interpretability, 
              significantly improving prediction accuracy. Evaluated performance using MAE and tracked results against other predictions (major sportsbooks, Prizepicks, etc.)
              and real game outcomes to gain insight into model accuracy."
              tech={['Python', 'Machine Learning', 'XGBoost', 'SHAP', 'Linear Regression', 'Microsoft Excel']}
              github="https://github.com/kbarker223/Predicting-NBA-Stats-with-Machine-Learning"
          />
          
          {/* Toggleable Projects */}
          {showAll && (
            <>
              <ProjectCard
                title="Personal Website"
                description="You are here right now! Designed and developed a fully responsive portfolio site using Next.js with the App Router, Tailwind CSS, and TypeScript. Implemented scroll-based animations, optimized images with Next.js' native tools, and deployed via Vercel."
                tech={['HTML', 'Tailwind CSS', 'GitHub', 'Vercel', 'Next.js', 'TypeScript']}
                github="https://github.com/kbarker223/Personal-Portfolio-Website"
              />
              <ProjectCard
                title="Factorial Design for Paperclip Placements on Paper Airplane Flight Distance"
                description="By examining the impact of weight distribution on the flight distance of paper airplanes, this experiment
                provides a simplified but intuitive look into key principles of aerodynamics and physics that govern flight.
                Despite the differences between paper airplanes and real aircraft, studies have shown that factors such
                as weight distribution or overall airplane weight can play a role in the efficiency of both paper airplanes
                as well as real aircraft. With further studies finding weight to be a major contributor to aircraft carbon
                emissions, we can attempt to mitigate these consequences by optimizing aircraft design. Building on this,
                our experiment will dive into the fundamental concept of how different weight distributions affect the flight
                distance of paper airplanes"
                tech={['R', 'Research', 'GitHub', 'Excel']}
                link = "/Paper Airplane Research Paper.pdf"
                linkLabel="View Paper"
                github="https://github.com/kbarker223/Paper-Airplane-Factorial-Design-Research-Paper"
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
          title="HackerRank SQL (ADVANCED) "
          issuer="HackerRank"
          date="April 2026"
          certLinks={[
            { label: "View Certificate", url: "/sql_advanced_certificate.pdf"},
          ]}
        />
        <CertificationCard
          title="JP Morgan Chase Software Engineering "
          issuer="Forage · JP Morgan Chase"
          date="September 2025"
          description="Built a complete financial transaction processing system using Spring Boot that handles real-time message processing through Apache Kafka. 
          Started with a basic project scaffold and implemented the full transaction pipeline from Kafka message consumption to database persistence and 
          REST API exposure. The system processes financial transactions asynchronously, validates user balances, integrates with external incentive APIs, 
          and maintains transaction records while exposing balance query endpoints for real-time account information."
          certLinks={[
            { label: "View Certificate", url: "/JPMC SWE Cert.pdf"},
          ]}
        />
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
          description="A hands-on 4-task job simulation focused on applying quantitative models to financial data, analyzing interest rate risk, and presenting data backed insights to support trading decisions."
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
          src="/cyc_engagement_team.jpg"
          alt="Kai collaborating with others"
          layout="fill"
          objectFit="cover"
          objectPosition="top" // <-- Centers the top of the image (saves heads!)
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
          I&apos;m Kai Barker. I love working with data that has meaningful, real-world impacts.
          Some of my most recent projects have involved analyzing congressional trading patterns 
          to build an optimized stock portfolio and understand informational advantages, consulting for small businesses, 
          and building ML models to predict exoplanet atmospheres.
          I&apos;m drawn to applied problems that require both technical depth and clear communication to solve.
          <br></br>
          <br></br>
          I&apos;m currently seeking full-time roles in data science, analytics, or consulting where I can 
          contribute immediately and keep growing. Outside of work, you&apos;ll find me hiking, backpacking, 
          playing basketball, or planning my next camping trip. 
          <br></br>
          <br></br>
          Feel free to explore my work or my resume below, and don&apos;t hesitate to reach out!
        </p>
        <p className="text-center mt-6">
          <a
            href="/Barker_Resume_May2026.pdf"
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



