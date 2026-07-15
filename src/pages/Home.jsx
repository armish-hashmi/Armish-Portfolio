import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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



const skills = [
  { key: "01", label: "JavaScript " },
  { key: "02", label: "React " },
  { key: "03", label: "Node.js " },
  { key: "04", label: "REST API " },
  { key: "05", label: "CSS " },
  { key: "06", label: "Git " },
  { key: "07", label: "GitHub" },
  { key: "08", label: "HTML5" },
  { key: "09", label: "TypeScript" },
  { key: "10", label: "JSON " },
];


export default function Home() {

  const leftColumnProjects = projects.filter((_, index) => index % 2 !== 0);
  const rightColumnProjects = projects.filter((_, index) => index % 2 === 0);

  return (
    <main>
      <section className="hero-container">
        <div className="hero-bg">
          
        </div>
        <div className="hero-content">
          <p>DEVELOPER - MERN Stack</p>
          <h1>Armish Hashmi</h1>
        </div>
      </section>

      
    <section className="portfolio-section">
      <h2 className="portfolio-title">My Latest Work</h2>

      <div className="portfolio-grid">
        <div className="portfolio-col portfolio-col--left">
          {leftColumnProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="portfolio-col portfolio-col--right">
          {rightColumnProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

     
      <div className="turtle-container">
        <h1 >🐢</h1>
      </div>

      <h2 className="portfolio-subtitle">
        NEW CASES ARE ON THE WAY,
      </h2>
      <h2 className="portfolio-subtitle">
        SLOWLY BUT SURELY
      </h2>
    </section>


    
      <section className="skills-section">
        <ul className="skills-grid">
          {skills.map((s) => (
            <li key={s.key} className="skill-card">
              <span className="skill-card__content">{s.key}</span>
              <span className="skill-card__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </section>


      <section className="connect-section">
        <p className="connect-hint">
          Tap this button to highlight your product 
        </p>

        <div className="connect-button-wrapper">
        
          <button className="connect-btn">
            Connect
          </button>
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