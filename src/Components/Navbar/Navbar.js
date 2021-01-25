import React from 'react';
import './Navbar.css'

const Navigation = () => {
    return (
        < div className="bar" >
            <div className="logo">
                AB
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
