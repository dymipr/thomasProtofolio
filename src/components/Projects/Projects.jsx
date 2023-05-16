import React from "react";
import "../Projects/Projects.css";
import Alpha from "../../../public/pages_images/alpha-pegasus.png";
import Audio from "../../../public/pages_images/Audiophile.png";
import Tailwind from "../../../public/pages_images/tailwind.png";
import HomePage from "../../../public/pages_images/Homepage.png";
import Dictionary from "../../../public/pages_images/dictionary.png"
import Maxipan from '../../../public/pages_images/maxipan.png'
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
              <a href="https://supermario3dworldsfans.netlify.app" target="_blank">
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
              <a href="https://manueldavgomez.github.io/GalaxyNotices/" target="_blank">
                <img src={HomePage} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://manueldavgomez.github.io/Dictionary-animals/" target="_blank">
                <img src={Dictionary} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll
            animateIn="proyects"
            className="project_container"
            delay={100}
          >
            <section>
              <a href="https://maxipan.co/" target="_blank">
                <img src={Maxipan} alt="" />
              </a>
            </section>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  );
}

export default Projects;
