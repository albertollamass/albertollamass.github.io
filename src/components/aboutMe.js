import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";


//import { useStaticQuery, graphql } from "gatsby";

const AboutMe = () => {

    return (
        <div className="about-blurb" id ="about-me">
          <div className="container">
            <div className="inner-blurb">
              <div className="content">
                <h3 id="title-about">ABOUT ME</h3>
                <p>
                  Currently finishing my Computer Science Engineering Degree focusing on Software Engineering
                  at the University of Granada, I am a 21 year old student based in Jerez de la Frontera,
                  Cádiz, Spain. I'm passionate about sports, travelling, technology and basically everything that makes the Internet tick. <br/> <br/>
                  Eager to learn more about Software Engineering needs and make a positive impact
                  while developing acquired skills. Even though I do not have much professional work experience,
                  I always try to give my best, adapt and meet expectations. <br/> <br/>
                  Whether you're a business owner looking to get started on a app or web development project with a 
                  freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, 
                  shoot me a message and let's work together.
                </p>
                <div className="btn-row">
                  <AnchorLink to="/">View Recent Projects</AnchorLink>
                </div>
              </div>
              <div className="images">
                <div className="top-right">
                <StaticImage
                            src="../images/me.jpg"
                            alt="Alberto"
                            placeholder="blurred"
                            width={450}
                            height={441}                            
                        />
                </div>
                <div className="bottom-left">
                <StaticImage
                            src="../images/bbal.jpg"
                            alt="Alberto"
                            placeholder="blurred"
                            // width={410}
                            // height={200}                            
                        />
                </div>
              </div>
            </div>
          </div>
          <div className="black-box"></div>
          <div className="black-box overlay"></div>
        </div>
      )
}



export default AboutMe