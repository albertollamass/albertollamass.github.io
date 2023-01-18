import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Portfolio = () => {
    return (
        <div className="container">            
            <div className="portfolio">
                <h3 id="work">RECENT PROJECTS</h3>
                <div className="inner-portfolio">
                    <div className="p1">
                        <div className="texto">
                            <h2>APNE</h2>
                            <p>Accesible app to manage students and teachers with functionalities such
                                as ordering menus and assigning tasks for San Rafael Special Needs School in Granada, Spain.</p>
                            
                            <span className="development-tools">Development tools</span>
                            <ul className="list">
                                <li>Django (free and open-source, Python-based web framework )</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Figma</li>
                                <li>Jira</li>
                                <a href="https://github.com/albertollamass/GII-DGP" target="_blank">
                                <button className="button button--pan"> <span>View Project</span></button>
                                </a>
                            </ul>
                            

                        </div>
                        <div className="imagen">
                        <StaticImage
                                src="../images/apne.png"
                                alt="Apne"
                                placeholder="blurred"
                                width={530}
                                height={750}                            
                            />
                        </div>
                    </div>
                    <div className="p2">
                        <div className="texto">
                            <h2>Universitter</h2>
                            <p>Universitter is an Android App similar to Twitter but focused on universities and 
                                researchers. Only people belonging to universities can post their researchs and information. Developed
                                for the course "Software Development".
                            </p>
                            
                            <span className="development-tools">Development tools</span>
                            <ul className="list">
                                <li>Flutter</li>
                                <li>Dart</li>
                                <li>Ruby on Rails</li>                                
                                <a href="https://github.com/albertollamass/Practicas-DS/tree/main/P4" target="_blank">
                                <button className="button button--pan"> <span>View Project</span></button>
                                </a>
                            </ul>
                            

                        </div>
                        <div className="imagen">
                        <StaticImage
                                src="../images/ds.png"
                                alt="Universitter"
                                placeholder="blurred"
                                width={530}
                                height={750}                            
                            />
                        </div>
                    </div>
                    <div className="p3">
                        <div className="texto">
                            <h2>Angry Birds</h2>
                            <p> 3D Angry Birds-like game. Developed for the course Graphic Systems. You can play <a href="https://albertollamass.github.io/angry-birds">here</a> 
                                
                            </p>
                            
                            <span className="development-tools">Development tools</span>
                            <ul className="list">
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>Three.js</li>                                
                                <a href="https://github.com/albertollamass/angry-birds" target="_blank">
                                <button className="button button--pan"> <span>View Project</span></button>
                                </a>
                            </ul>
                            

                        </div>
                        <div className="imagen">
                        <StaticImage
                                src="../images/angry.png"
                                alt="Angry Birds"
                                placeholder="blurred"
                                width={730}
                                height={750}                            
                            />
                        </div>
                    </div>
                    <div className="p4">
                        <div className="texto">
                            <h2>InfoPets</h2>
                            <p> 
                                Custom Pet Store with login management and shopping cart
                            </p>
                            
                            <span className="development-tools">Development tools</span>
                            <ul className="list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>  
                                <li>PHP</li>
                                <li>SQL</li>
                                <li>Ajax</li>                              
                                <a href="https://github.com/albertollamass/GII_SIBW/" target="_blank">
                                <button className="button button--pan"> <span>View Project</span></button>
                                </a>
                            </ul>
                            

                        </div>
                        <div className="imagen">
                        <StaticImage
                                src="../images/sibw.png"
                                alt="InfoPets"
                                placeholder="blurred"
                                width={1300}
                                height={800}                            
                            />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="spacing">
                <h3 id="contact">CONTACT ME</h3>
            </div>
        </div>
    )
}

export default Portfolio