import React from "react";
import './project.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import Skills from "./skills";

export default function Project() {
    
    return (
        <div id="projects" className="projectsection">
            <div className="projectcontent">
                <h1 className="projecttitle">My Projects</h1>
                <div className="projects">
                    <div className="project1">
                        <h1>e-commerce website</h1>
                        <img className="projectimage" src={image1} alt="e-commerce website" />
                    </div>

                    <div className="project2">
                        <h1>Landing page website</h1>
                        <img className="projectimage2" src={image2} alt="Landing page website" />
                    </div>
                </div>

                <div className="projects2">
                    <div className="project3">
                        <h1>movie website</h1>
                        <img className="projectimage3" src={image3} alt="movie website" />
                        <p className="subtext"></p>
                    </div>

                    <div className="project4">
                        <h1>Users management</h1>
                        <img className="projectimage4" src={image4} alt="Users management" />
                    </div>
                    
                </div>
            </div>
            <Skills />
        </div>
    );
}