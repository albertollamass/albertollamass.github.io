import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";
//import { useStaticQuery, graphql } from "gatsby";

const Banner = () => {

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="not-main-text">Hi I'm</div> 
                    <div className="main-text">Alberto Llamas</div>
                    <div className="buttons">
                        <AnchorLink to="/#title-about"><button className="button button--pan"><span>Read More</span></button></AnchorLink>
                        <a href="https://drive.google.com/file/d/13LEfERuv-WM4dDVRZvOSpTAlzq984q3c/view?usp=share_link" target="_blank">
                            <button className="button button--pan"> <span>Download CV</span></button>
                        </a>
                    </div>
                    <div className="main-image">
                        <StaticImage
                            src="../images/orla.jpg"
                            alt="Alberto"
                            placeholder="blurred"
                            layout="fixed"
                            width={750}
                            height={841}                            
                        />
                    </div>
                </div>
                <div className="scroll">
                    <span>
                        Scroll down &darr;
                    </span>
                </div>
            </div>
            <div className="fixed-misc">Software Engineer</div>
        </div>
    )
}



export default Banner