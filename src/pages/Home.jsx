import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NebulaFlow from "@/components/lightswind/nebula-flow";
import "./Home.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const projects = [
  {
    id: 1,
    title: "Meal Atelier",
    tags: ["Meal Planning", "Web design", "JSON"],
    image: img1,
    link: "https://github.com/armish-hashmi/TheMealAtelier",
  },
  {
    id: 2,
    title: "OnePager",
    tags: ["React", "Web design", "Development"],
    image: img2,
    link: "https://onepager-website-el55rnv41-armish-hashmis-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    tags: ["React","Node.js" ,"Web design", "Development"],
    image: img3,
    link: "https://portfolio-app-zeta-ashy.vercel.app/",
  },
  {
    id: 4,
    title: "TODO List",
    tags: ["Simple React", "Development"],
    image: img4,
    link: "https://todo-list-six-phi-86.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const skills = [
  "React",
  "Node.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Git & GitHub",
  "REST APIs",
  "Vite",
  "UI/UX Design",
];


export default function Home() {
  const leftColumnProjects = projects.filter((_, index) => index % 2 !== 0);
  const rightColumnProjects = projects.filter((_, index) => index % 2 === 0);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <section className="hero-container">
        <div className="hero-bg">
          <NebulaFlow />
        </div>
        <div className="hero-content">
          <p>DEVELOPER - MERN Stack</p>
          <h1>Armish Hashmi</h1>
        </div>
      </section>

      
      <section className="portfolio-section">
      <motion.h2 
        className="portfolio-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariants}
      >
        My Latest Work
      </motion.h2>

      <motion.div 
        className="portfolio-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="portfolio-col portfolio-col--left">
          {leftColumnProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} className="card-wrapper">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="portfolio-col portfolio-col--right">
          {rightColumnProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} className="card-wrapper">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="portfolio-footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
      >
        <div className="turtle-container">
          <h1 className="turtle-emoji">🐢</h1>
        </div>
        <h2 className="portfolio-subtitle">NEW CASES ARE ON THE WAY,</h2>
        <h2 className="portfolio-subtitleHighlight">SLOWLY BUT SURELY</h2>
      </motion.div>
    </section>
    <section className="skills-banner-section">
        <div className="skills-banner-wrapper">
          <div className="skills-track">
            {/* We duplicate the array to create a seamless infinite loop */}
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-dot">•</span>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="connect-section">
        <p className="connect-hint">
          Tap this button to highlight your product =)
        </p>

        <div className="connect-button-wrapper">
        
          <a
            className={`connect-btn ${isHovered ? "btn-active" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Connect
          </a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      className="project-item"
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-item__card">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-item__img"
          />
        ) : (
          <div className="project-item__placeholder" />
        )}
      </div>
      <div className="project-item__info">
        <h3 className="project-item__title">
          {project.title} <span className="project-item__arrow">→</span>
        </h3>
        <p className="project-item__tags">{project.tags.join(", ")}</p>
      </div>
    </a>
  );
}