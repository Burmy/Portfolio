import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="center about-container" id="About">
            <div className="about-pngs">
                <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa25157d7c72d1dea0b55e4_fresh-1-top.png" alt="" className="aboutBG-1"></img>
                <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa2515700561360a501a17f_fresh-1-right.png" alt="" className="aboutBG-2"></img>
                <img src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa251575a35c45b3593c443_fresh-1-dots.png" alt="" className="aboutBG-3"></img>
            </div>
            <div className="about-box">
                <p>A Computer Science student at <span className="hl">San Francisco State University</span> who is passionate about becoming a Front-end Developer. I love creating things on the web and be <span className="hl">very detailed</span> with them. I aspire toward a career that will allow me to channel my creativity through crafting <span className="hl">beautiful</span> software and <span className="hl">engaging</span> experiences.
                </p>
            </div>
        </div>
    )
}

export default About

