import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "../src/App.css";
import Particless from "./components/Particles/Particles";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Foot from "./components/Footer/Foot";

function App() {
  return (
    <>
      <Particless />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Foot />
    </>
  );
}

export default App;
