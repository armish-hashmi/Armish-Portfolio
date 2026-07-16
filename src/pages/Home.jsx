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
  { key: 'web_development', label: 'Web Development', value: 80 },
  { key: 'web_design', label: 'Web Design', value: 85 },
  { key: 'dta_analysis', label: 'Data Analysis', value: 80 },
  { key: 'git&github', label: 'Git&Github', value: 90 },

];

export default function Home() {

  const leftColumnProjects = projects.filter((_, index) => index % 2 !== 0);
  const rightColumnProjects = projects.filter((_, index) => index % 2 === 0);

  // Contact form state (form was previously uncontrolled/non-functional)
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState({ loading: false, error: '', success: '' });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus({ loading: true, error: '', success: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setContactStatus({ loading: false, error: '', success: 'Message sent! I\'ll get back to you soon.' });
      setContactData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setContactStatus({ loading: false, error: err.message, success: '' });
    }
  };

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

      <section className="about-section">
        <h2>About Me</h2>
        <h3>Hi! I'm Armish</h3>
        <p>I turn coffee into code and bugs into "features" (just kidding, I actually fix them). By day, I'm a web developer wrangling HTML, CSS, and JavaScript into submission. By night, I'm... still doing that, because apparently I like it.</p>
        <p>I got into web development because I loved the idea of building something from literally nothing — just you, a blank file, and way too many browser tabs open to Stack Overflow. Now I get to make things that live on the internet forever (or until the hosting bill goes unpaid).</p>
        <h3>Few things about me:</h3>
        <ul>
          <li>I care way too much about whether a button's border-radius is 8px or 10px</li>
          <li> I've spent more time debugging CSS centering issues than I'd like to admit </li>
          <li>Fueled by caffeine and the occasional 2am "wait, it was a missing semicolon" revelation</li>
        </ul>
        <p>When I'm not coding, you'll find me binge watching a netflix series, sleeping, or trying to convince people that Comic Sans has its place in this world (it doesn't, but I like to argue).</p>
        <p>I'm always up for new projects, collaborations, or just chatting about the latest JavaScript framework that'll probably be outdated in six months. Let's build something great together!</p>
        <div className="contact-links">
           <ul className="contact__socials">
              <li><a href="https://github.com/armish-hashmi" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/armish-hashmi-99bb94335/ " target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
        </div>
      </section>


      <section className="skills-section">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skills.map((s) => (
            <li key={s.key} className="skill-item">
              <span className="skill-item__label">{s.label}</span>
              {/* Progress bar container */}
              <div className="w3-light-grey w3-round-xlarge">
                {/* Progress bar filled part */}
                <div
                  className="w3-container w3-padding-small w3-dark-grey w3-center w3-round-xlarge"
                  style={{ width: `${s.value}%` }} // Assuming 's.value' holds the numerical percentage
                >
                  {s.value}%
                </div>
              </div>
            </li>
          ))}
        </ul>
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
      


      <section className="contact-section">
        <div className="contact-info">
          <h2 className="contact-text">Contact ME</h2>
          <p className="contact-text">&#128205; Punjab, Pakistan</p>
          <p className="contact-text">&#128222; Phone: +923114412245</p>
          <p className="contact-text">&#9993; Email: hashmiarmish@gmail.com</p>
        </div>
        <p>Lets get in touch. Send me a message:</p>
        <form onSubmit={handleContactSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={contactData.name}
              onChange={handleContactChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={contactData.email}
              onChange={handleContactChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="subject"
              name="subject"
              placeholder="Subject"
              value={contactData.subject}
              onChange={handleContactChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="message"
              name="message"
              placeholder="Message"
              value={contactData.message}
              onChange={handleContactChange}
              required
            />
          </div>

          {contactStatus.error && <p className="form-error">{contactStatus.error}</p>}
          {contactStatus.success && <p className="form-success">{contactStatus.success}</p>}

          <button type="submit" className="submit-btn" disabled={contactStatus.loading}>
            {contactStatus.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
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