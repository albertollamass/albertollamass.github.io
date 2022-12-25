import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
//import { useStaticQuery, graphql } from "gatsby";

const Banner = () => {

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    
                    <div className="main-text">Hi, I'm Alberto Llamas</div>
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