import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div className="center projects">
            <div className="project-box">

                <h1 className="center mp">My Projects</h1>

                <div className="center project-card ">
                    <div className="center project-image">
                        <div className="img1">
                            <div className="project-links">

                                <form action="https://burmy.github.io/Wildfire-tracker/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/Wildfire-tracker" method="get" target="_blank">
                                    <button className="source">View Source</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="center project-data">
                        <h1 className="name">Wildfire Tracker</h1>
                        <p className="info">This website tracks the wildfires going around the world using a NASA API. </p>
                        <ul className="project-skills">
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">JavaScript</li>
                            <li lassName="skill">ReactJs</li>
                            <li className="skill">NASA API</li>
                        </ul>
                    </div>
                </div>


                <div className="center project-card ">

                    <div className="center project-data">
                        <h1 className="name-opp">Wildfire Tracker</h1>
                        <p className="info-opp">This website tracks the wildfires going around the world using a NASA API. </p>
                        <ul className="project-skills">
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">JavaScript</li>
                            <li lassName="skill">ReactJs</li>
                            <li className="skill">NASA API</li>
                        </ul>
                    </div>
                    <div className="center project-image">
                        <div className="img2">
                            <div className="project-links">
                                <form action="https://burmy.github.io/Wildfire-tracker/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/Wildfire-tracker" method="get" target="_blank">
                                    <button className="source">View Source</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Projects
