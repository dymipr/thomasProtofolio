import React from "react";
import "../About/About.css";
import Html5 from "../../../public/Logos/html.png";
import Css3 from "../../../public/Logos/css.png";
import Javascript from "../../../public/Logos/javascript.png";
import Git from "../../../public/Logos/git.png";
import Github from "../../../public/Logos/github.png";
import Npm from "../../../public/Logos/npm.png";
import Sass from "../../../public/Logos/sass.png";
import Vite from "../../../public/Logos/vite.png";
import Tailwind from "../../../public/Logos/tailwind.png";
import Reacts from "../../../public/Logos/react.png";
import Bootstrap from "../../../public/Logos/bootstrap.png";
import Reactrouter from "../../../public/Logos/react-router.png";
import Netlify from "../../../public/Logos/netlify.png";
import Ejs from "../../../public/Logos/ejs.png";
import Nodejs from "../../../public/Logos/nodejs.png";
import Mysql from "../../../public/Logos/mysql.png";
import Mongo from "../../../public/Logos/mongo.png";
import Express from "../../../public/Logos/express.png";
import Vscode from "../../../public/Logos/vscode.png";
import Terminal from "../../../public/Logos/terminal.png";
import Yarn from "../../../public/Logos/yarn.png";
import Jquery from "../../../public/Logos/jquey.png";
import Documento from "../../../public/Curriculum ManuelDav.pdf";
import AnimateOnScroll from "react-animate-on-scroll";

function About() {
  return (
    <>
      {/* contenedor principal */}
      <div className="about"></div>
      <section className="about_container">
        <AnimateOnScroll animateIn="about_title">
          <p className="about_title">Sobre mi</p>
        </AnimateOnScroll>

        {/* subcontenedor */}

        <div className="cards_container">
          {/* contenedor pricipal de las tarjetas */}
          <AnimateOnScroll animateIn="about_box" className="card_container">
            <section>
              <p className="card_text">
                Llevo un año adquiriendo de manera autódidacta conocimientos
                esenciales en el campo de la programación, mi convicción es
                obtener habilidades tanto prácticas como teóricas que me
                permitan desempeñarme a cabalidad en esta maravillosa profesión
              </p>

              <p className="card_text">
                <strong>Ciudad: </strong>La Dorada Caldas - Colombia
              </p>

              <div className="skills"></div>
              <a href={Documento} download>
                <button className="card_btn">Curriculum</button>
              </a>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll animateIn="skills_title">
            <p className="about_title2">Habilidades</p>
          </AnimateOnScroll>
          <section className="card_container-general">
            <AnimateOnScroll
              animateIn="skills_backend"
              className="card_container"
            >
              <section>
                <p className="about_title3">BackEnd</p>

                <div className="card_tecnology">
                  <img src={Ejs} alt="" className="grid_item" />
                  <img src={Nodejs} alt="" className="grid_item" />
                  <img src={Mysql} alt="" className="grid_item" />
                  <img src={Mongo} alt="" className="grid_item" />
                  <img src={Express} alt="" className="grid_item" />
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll
              animateIn="skills_frontend"
              className="card_container"
            >
              <section>
                <p className="about_title3">FrontEnd</p>

                <div className="card_tecnology">
                  <img src={Html5} alt="" className="grid_item" />
                  <img src={Css3} alt="" className="grid_item" />
                  <img src={Javascript} alt="" className="grid_item" />
                  <img src={Npm} alt="" className="grid_item" />
                  <img src={Sass} alt="" className="grid_item" />

                  <img src={Reacts} alt="" className="grid_item" />
                  <img src={Tailwind} alt="" className="grid_item" />
                  <img src={Bootstrap} alt="" className="grid_item" />
                  <img src={Reactrouter} alt="" className="grid_item" />
                  <img src={Yarn} alt="" className="grid_item" />
                  <img src={Jquery} alt="" className="grid_item"/>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll
              animateIn="skills_tools"
              className="card_container"
            >
              <section>
                <p className="about_title3">Tools</p>

                <div className="card_tecnology">
                  <img src={Netlify} alt="" className="grid_item" />
                  <img src={Github} alt="" className="grid_item" />
                  <img src={Git} alt="" className="grid_item" />
                  <img src={Vite} alt="" className="grid_item" />
                  <img src={Vscode} alt="" className="grid_item" />
                  <img src={Terminal} alt="" className="grid_item" />
                </div>
              </section>
            </AnimateOnScroll>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
