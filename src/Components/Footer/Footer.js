import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="center footer">
            <div className="footer-box">
                <p>Top of the page</p>
                <a href="#top">
                    <btn className="arrow-up">
                        <span className="left-arm"></span>
                        <span className="right-arm"></span>
                        <span className="arrow-slide"></span>

                    </btn>
                </a>
            </div>
        </div >
    )
}


export default Footer

