import React from "react";
import "../Projects/Projects.css";
import Alpha from "../../../public/pages_images/alpha-pegasus.png";
import Sass from "../../../public/pages_images/sass.png";
import Audio from "../../../public/pages_images/Audiophile.png";
import Tailwind from "../../../public/pages_images/tailwind.png";
import HomePage from "../../../public/pages_images/Homepage.png";
import AnimateOnScroll from "react-animate-on-scroll";

function Projects() {
  return (
    <>
      <div className="project"></div>
      <AnimateOnScroll animateIn="proyect_title">
        <p className="project_title">Proyectos</p>
      </AnimateOnScroll>
      <section className="project_container_general">
        <div className="projects_container">
          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a
                href="https://alpha-pegasus-tecnology.netlify.app/"
                target="_blank"
              >
                <img src={Alpha} alt="Projecto-1" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={200}
          >
            <section>
              <a href="https://page-landing-sass.netlify.app/" target="_blank">
                <img src={Sass} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={300}
          >
            <section>
              <a href="https://audio-phile-react.netlify.app/" target="_blank">
                <img src={Audio} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://talwind-mario.netlify.app" target="_blank">
                <img src={Tailwind} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://manueldavgomez.github.io/homepage/#/" target="_blank">
                <img src={HomePage} alt="" />
              </a>
            </section>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

export default Projects;
