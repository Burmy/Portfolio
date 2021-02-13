import React from "react";
import './Header.css'
import { Icon } from '@iconify/react';
import Link from '@iconify-icons/zmdi/linkedin';
import Mail from '@iconify-icons/zmdi/email';
import Git from '@iconify-icons/zmdi/github-alt';
import mailgo from "mailgo";

const Header = () => {
    mailgo();

    return (
        <div className="center header" id="top">
            <div className="header-box">
                <h2>Hi, my name is</h2>
                <div className="title">

                    <span className="block"></span>
                    <h1>Anmol Burmy<span></span></h1>
                </div>
                <h2>A develepor in training.</h2>
                <ul className="contacts">
                    <p className="line"></p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Burmy">
                        <Icon icon={Git} className="icon1" />
                    </a>
                    <li className="lnk">·</li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/burmy/">
                        <Icon icon={Link} className="icon2" />
                    </a>
                    <li className="lnk">·</li>
                    <a class="dark" href="mailto:Anmolburmy145@gmail.com">
                        <Icon icon={Mail} className="icon3" />
                    </a>
                    <p className="line"></p>
                </ul>
            </div>

        </div>
    )
}

export default Header;

