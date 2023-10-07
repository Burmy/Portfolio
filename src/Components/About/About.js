import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="center about-container" id="About">
      <div className="about-pngs">
        <img
          src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa25157d7c72d1dea0b55e4_fresh-1-top.png"
          alt=""
          className="aboutBG-1"
        ></img>
        <img
          src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa2515700561360a501a17f_fresh-1-right.png"
          alt=""
          className="aboutBG-2"
        ></img>
        <img
          src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa251575a35c45b3593c443_fresh-1-dots.png"
          alt=""
          className="aboutBG-3"
        ></img>
      </div>
      <div className="about-box">
        <p>
          I'm a dedicated Front-End Developer with a passion for creating{" "}
          <span className="hl">seamless, visually appealing </span>
          and <span className="hl">user-centric</span> web experiences. With a strong foundation in web technologies and a{" "}
          <span className="hl">keen eye</span> for design, I specialize in bringing ideas to life through{" "}
          <span className="hl">clean, efficient</span> and
          <span className="hl"> accessible code.</span>
          {/* A passionate Front-end Developer with a love for creating{" "}
          <span className="hl">immersive</span> and <span className="hl">user-friendly</span> web experiences. I love creating
          things on the web and be <span className="hl">very detailed</span> with them. I aspire toward a career that will allow
          me to channel my creativity through crafting <span className="hl">beautiful</span> software and{" "}
          <span className="hl">engaging</span> experiences. */}
        </p>
      </div>
    </div>
  );
};

export default About;
