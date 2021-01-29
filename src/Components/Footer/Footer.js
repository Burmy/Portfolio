import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    return (
        <div className="center footer">
            <div className="footer-box">
                <AnchorLink href='#top'>
                    <btn className="arrow-up">
                        <span className="left-arm"></span>
                        <span className="right-arm"></span>
                        <span className="arrow-slide"></span>
                        <p className="top center">Go To Top</p>
                    </btn>
                </AnchorLink>
            </div>
        </div >
    )
}

export default Footer

