import React from "react";
import "../Hero/Hero.css";
import Typed from "react-typed";


function Hero() {
  return (
    <>
      <main id="hero">
        <section className="hero_container">
          <p className="hero_title">Yo soy</p>
          <p className="hero_title2 name">Manuel David</p>
          <p className="hero_title2 name">Gomez Sanchez</p>
          <Typed className="hero_title3"
          strings={[
            "Front-End Developer",
            "Responsive Web Design",
            "Web Design",
            "Optimization"
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
          />
        </section>
      </main>
    </>
  );
}

window.addEventListener("load", Hero);

export default Hero;
