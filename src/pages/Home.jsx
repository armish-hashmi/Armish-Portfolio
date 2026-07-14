import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NebulaFlow from "@/components/lightswind/nebula-flow";
import "./Home.css";

const projects = [
  {
    id: 1,
    title: "Meal Atelier",
    tags: ["Meal Planning", "Web design", "JSON"],
    image: "src/assets/Screenshot From 2026-06-02 22-21-31 (Edited).png",
    link: "https://github.com/armish-hashmi/TheMealAtelier",
  },
  {
    id: 2,
    title: "OnePager",
    tags: ["React", "Web design", "Development"],
    image: "src/assets/Screenshot From 2026-07-14 14-29-51.png",
    link: "https://onepager-website-el55rnv41-armish-hashmis-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    tags: ["React","Node.js" ,"Web design", "Development"],
    image: "src/assets/Screenshot From 2026-07-14 14-31-16.png",
    link: "https://portfolio-app-zeta-ashy.vercel.app/",
  },
  {
    id: 4,
    title: "TODO List",
    tags: ["Simple React", "Development"],
    image: "src/assets/Screenshot From 2026-07-14 14-33-34.png",
    link: "https://todo-list-six-phi-86.vercel.app/",
  },
];

export default function Home() {
  const leftColumnProjects = projects.filter((_, index) => index % 2 !== 0);
  const rightColumnProjects = projects.filter((_, index) => index % 2 === 0);

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