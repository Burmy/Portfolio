import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const projects = [
    {
      name: "RUMI",
      info: "A web-based application helping students and young professionals alike find rooms and roommates around the San Francisco Bay Area.",
      skill: "React  CSS  Express  MySQL  Firebase",
      demo: "https://youtu.be/vsSw3u31dvY",
      demo_type: "Youtube Demo",
      source: "https://github.com/Burmy/RUMI?",
      img: "img-rumi",
    },
    {
      name: "Pixis",
      info: "This is a photo management website that allows users to post images, search for images and view and comment on individual image posts.",
      skill: "HTML  CSS  JavaScript  Handlebars  Express",
      demo: "https://youtu.be/OyRgzGGD7uM",
      demo_type: "Youtube Demo",
      source: "https://github.com/Burmy/photo-app?",
      img: "img-photo-app",
    },
    {
      name: "SF Hacks",
      info: "This SF Hacks website I redesigned during SF Hacks 2021 and won a Web Competition for the best redesign.",
      skill: "HTML  CSS  JavaScript  React",
      demo: "https://burmy.github.io/sfhacks/?",
      demo_type: "Live Demo",
      source: "https://github.com/Burmy/sfhacks?",
      img: "img-hacks",
    },
    {
      name: "Wildfire Tracker",
      info: "This website tracks the wildfires going around the world using a NASA API.",
      skill: "HTML  CSS  JavaScript  React  NASA API",
      demo: "https://burmy.github.io/Wildfire-Tracker/?",
      demo_type: "Live Demo",
      source: "https://github.com/Burmy/Wildfire-tracker?",
      img: "img-wildfire",
    },
    {
      name: "Netflix Repo App",
      info: "This is a simple Netflix repositories searching app. The user can search any repositories using the search bar and each repository contains the information about the recent commits made to the repository.",
      skill: "HTML  CSS  JavaScript",
      demo: "https://burmy.github.io/netflix-repo-app/?",
      demo_type: "Live Demo",
      source: "https://github.com/Burmy/netflix-repo-app?",
      img: "img-netflix",
    },
    {
      name: "Crypto Currency Tracker",
      info: "A website that shows Crypto Currency trends. This was made during the time when crypto currency reached its all time high value.",
      skill: "HTML  CSS  JavaScript  React",
      demo: "https://burmy.github.io/Crypto-Tracker/?",
      demo_type: "Live Demo",
      source: "https://github.com/Burmy/Crypto-tracker?",
      img: "img-crypto",
    },
    {
      name: "InfoGram",
      info: "Using Google Firebase, this is a private website where registered user can only view the cards and only admins have the capabilities to create new cards.",
      skill: "HTML  CSS  JavaScript  Firebase",
      demo: "https://csc-651.firebaseapp.com/?",
      demo_type: "Live Demo",
      source: "https://github.com/Burmy/InfoGram?",
      img: "img-info",
    },
    {
      name: "Face Detecting AI",
      info: "A website that detects faces from images taken anywhere from the internet. This was a part of a Udemy course I took during the summer of 2020.",
      skill: "HTML  CSS  JavaScript  React",
      demo: "https://face-detecting-ai.herokuapp.com/?",
      demo_type: "Live Demo",
      source: "https://github.com/Burmy/face-ai?",
      img: "img-face",
    },
    {
      name: "Robo Friends",
      info: "This app is just a simple user search app and was the first react app I ever created.",
      skill: "HTML  CSS  JavaScript  React",
      demo: "https://burmy.github.io/robo-friends/?",
      demo_type: "Live Demo",
      source: "https://github.com/Burmy/robo-friends?",
      img: "img-robo",
    },
  ];
  return (
    <div className="center projects" id="projects">
      <div className="project-box">
        <Fade>
          <h1 className="center mp ">My Projects</h1>
        </Fade>

        {projects.map((project) => (
          <Fade>
            <div className="project-cont">
              <div className="center project-card">
                <div className="center project-data">
                  <h1 className="name">{project.name}</h1>
                  <p className="info">{project.info}</p>
                  <ul className="project-skills">
                    <li className="skill">{project.skill}</li>
                  </ul>
                  <div className="project-links">
                    <form action={project.demo} method="get" target="_blank">
                      <button className="demo">{project.demo_type}</button>
                    </form>
                    <form action={project.source} method="get" target="_blank">
                      <button className="demo">View Source</button>
                    </form>
                  </div>
                </div>
                <div className="center project-image">
                  <div className={project.img}></div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
