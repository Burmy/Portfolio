import React from "react";
import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <AnchorLink href="#top">
          <button className="top">
            <div className="arrow up"></div> Go To Top
          </button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Footer;
