import React from 'react';
import './Navbar.css'

const Navigation = () => {
    return (
        < div className="bar" >
            <div className="nav">
                <p> Github </p>
            </div>
            <div className="nav">
                <p> Linkedin </p>
            </div>
            <div className="nav">

                <form action="/Anmol-Burmy.pdf" method="get" target="_blank">
                    <button className="btn" >Resume</button>
                </form>
            </div>
        </ div >
    );
}

export default Navigation;