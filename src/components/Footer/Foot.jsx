import React from "react";
import "../Footer/foot.css";
import Logo from "../../../public/logo.png";
import AnimateOnScroll from "react-animate-on-scroll";

function Foot() {
  return (
    <>
      <section className="foot_container">
        <AnimateOnScroll animateIn="footer" delay={100}>
          <div>
            <img src={Logo} alt="" className="logo_foot" />
          </div>
        </AnimateOnScroll>

        <div className="copy_foot">
          <p className="paragraph_foot">
            Manuel David Gomez Sanchez <br /> 2022
          </p>
        </div>
      </section>
    </>
  );
}

export default Foot;
