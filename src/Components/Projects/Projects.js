import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div className="center projects">
            <div className="projects-box">

                <h1 className="center mp">My Projects</h1>

                <div className="center card ">
                    <div className="center image">
                        image here
                     </div>
                    <div className="center data">
                        <h1>Wildfire Tracker</h1>
                        <p>This website tracks the wildfires going around the world using a NASA API.</p>
                        <div className="skills">
                            <p className="skill">HTML</p>
                            <p className="skill">CSS</p>
                            <p className="skill">JavaScript</p>
                            <p className="skill">ReactJs</p>
                            <p className="skill">NASA API</p>
                        </div>
                    </div>
                </div>

                <div className="center card ">
                    <div className="image">
                        image here
                     </div>
                </div>

                <div className="center card ">
                    <div className="image">
                        image here
                     </div>
                </div>

            </div>
        </div >
    )
}

export default Projects
