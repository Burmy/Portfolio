import React from 'react'
import './Projects.css'
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <div className="center projects" id="projects">
            <div className="project-box">

                <Fade>
                    <h1 className="center mp">My Projects</h1>
                </Fade>

                <Fade>
                    <div className="center project-card ">
                        <div className="center project-image">
                            <div className="img-wildifre">

                            </div>
                        </div>
                        <div className="center project-data">
                            {/* <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fae400b820032ad1a780595_fresh-1-timeboss.png" alt="" class="porjectBG"></img> */}
                            <h1 className="name">Wildfire Tracker</h1>
                            <p className="info">This website tracks the wildfires going around the world using a NASA API. </p>
                            <div className="project-links">
                                <form action="https://burmy.github.io/Wildfire-Tracker/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/Wildfire-tracker" method="get" target="_blank">
                                    <button className="demo">View Source</button>
                                </form>
                            </div>
                            <ul className="project-skills">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React</li>
                                <li className="skill">NASA API</li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="center project-card ">

                        <div className="center project-data">
                            <h1 className="name-opp">SF Hacks</h1>
                            <p className="info-opp">This SF Hacks website I redesigned during SF Hacks 2021 and won a Web Competition for the best redesign.</p>
                            <div className="project-links-opp">
                                <form action="https://burmy.github.io/sfhacks/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/sfhacks" method="get" target="_blank">
                                    <button className="demo">View Source</button>
                                </form>
                            </div>
                            <ul className="project-skills-opp">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React</li>
                            </ul>
                        </div>
                        <div className="center project-image">
                            <div className="img-hacks">
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="center project-card ">
                        <div className="center project-image">
                            <div className="img-crytpo">
                            </div>
                        </div>
                        <div className="center project-data">
                            {/* <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fae400b820032ad1a780595_fresh-1-timeboss.png" alt="" class="porjectBG"></img> */}
                            <h1 className="name">Crypto Currency Tracker</h1>
                            <p className="info">A website that shows Crypto Currency trends. This was made during the time when crypto currency reached its all time high value.</p>
                            <div className="project-links">
                                <form action="https://burmy.github.io/Crypto-Tracker/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/Crypto-tracker" method="get" target="_blank">
                                    <button className="demo">View Source</button>
                                </form>
                            </div>
                            <ul className="project-skills">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React</li>
                            </ul>
                        </div>

                    </div>
                </Fade>


                <Fade>
                    <div className="center project-card ">

                        <div className="center project-data">
                            {/* <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fae402787959bb2ce47e195_fresh-1-spreadsheet.png" alt="" class="porjectBG-opp"></img> */}
                            <h1 className="name-opp">My Portfolio</h1>
                            <p className="info-opp">A website showcasing all my projects.</p>
                            <div className="project-links-opp">
                                <form action="https://burmy.me/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/portfolio" method="get" target="_blank">
                                    <button className="demo">View Source</button>
                                </form>
                            </div>
                            <ul className="project-skills-opp">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React</li>
                            </ul>
                        </div>
                        <div className="center project-image">
                            <div className="img-portfolio">
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="center project-card ">
                        <div className="center project-image">
                            <div className="img-face">
                            </div>
                        </div>

                        <div className="center project-data">
                            {/* <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fae400b820032ad1a780595_fresh-1-timeboss.png" alt="" class="porjectBG"></img> */}
                            <h1 className="name">Face Detecting AI</h1>
                            <p className="info">A website that detects faces from images taken anywhere from the internet. This was a part of a Udemy course I took during the summer of 2020. </p>
                            <div className="project-links">
                                <form action="https://face-detecting-ai.herokuapp.com/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/face-ai" method="get" target="_blank">
                                    <button className="demo">View Source</button>
                                </form>
                            </div>
                            <ul className="project-skills">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React</li>
                            </ul>
                        </div>

                    </div>
                </Fade>

                <Fade>
                    <div className="center project-card ">

                        <div className="center project-data">
                            {/* <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fae402787959bb2ce47e195_fresh-1-spreadsheet.png" alt="" class="porjectBG-opp"></img> */}
                            <h1 className="name-opp">Robo Friends</h1>
                            <p className="info-opp">This app is just a simple user search app and was the first react app I ever created.</p>
                            <div className="project-links-opp">
                                <form action="https://burmy.github.io/robo-friends/" method="get" target="_blank">
                                    <button className="demo">Live Demo</button>
                                </form>
                                <form action="https://github.com/Burmy/robo-friends" method="get" target="_blank">
                                    <button className="demo">View Source</button>
                                </form>
                            </div>
                            <ul className="project-skills-opp">
                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React</li>
                            </ul>
                        </div>
                        <div className="center project-image">
                            <div className="img-robo">
                                <form action="https://burmy.github.io/robo-friends/" method="get" target="_blank"></form>
                            </div>
                        </div>
                    </div>
                </Fade>

            </div>
        </div >
    )
}

export default Projects
