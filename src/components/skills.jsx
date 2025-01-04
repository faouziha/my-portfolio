import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skills.css";
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap, faSquareGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Contact from "./contact";

export default function Skills() {
    return (
        <div id="skills" className="skillssection">
            <div className="skillcontent">
                <h1 className="skilltitle">My Skills</h1>
                <div className="skills-container">
                    <div className="skills">
                        <div className="skillcadr skill1">
                            <FontAwesomeIcon className="skillsicon" icon={faHtml5} />
                            <h4 className="skilltext">HTML</h4>
                        </div>
                        <div className="skillcadr skill2">
                            <FontAwesomeIcon className="skillsicon" icon={faCss3Alt} />
                            <h4 className="skilltext">CSS</h4>                        
                        </div>
                        <div className="skillcadr skill3">
                            <FontAwesomeIcon className="skillsicon" icon={faJs} />
                            <h4 className="skilltext">JavaScript</h4>
                        </div>
                        <div className="skillcadr skill4">
                            <FontAwesomeIcon className="skillsicon" icon={faReact} />
                            <h4 className="skilltext">React</h4>  
                        </div>
                        <div className="skillcadr skill5">
                            <FontAwesomeIcon className="skillsicon" icon={faNodeJs} />
                            <h4 className="skilltext">Node.js</h4>
                        </div>
                        <div className="skillcadr skill6">
                            <FontAwesomeIcon className="skillsicon" icon={faBootstrap} />
                            <h4 className="skilltext">Bootstrap</h4>
                        </div>
                        <div className="skillcadr skill7">
                            <FontAwesomeIcon className="skillsicon" icon={faDatabase} />
                            <h4 className="skilltext">MongoDB</h4>
                        </div>
                        <div className="skillcadr skill8">
                            <FontAwesomeIcon className="skillsicon" icon={faSquareGit} />
                            <h4 className="skilltext">Git</h4>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="skillcadr skill1">
                            <FontAwesomeIcon className="skillsicon" icon={faHtml5} />
                            <h4 className="skilltext">HTML</h4>
                        </div>
                        <div className="skillcadr skill2">
                            <FontAwesomeIcon className="skillsicon" icon={faCss3Alt} />
                            <h4 className="skilltext">CSS</h4>                        
                        </div>
                        <div className="skillcadr skill3">
                            <FontAwesomeIcon className="skillsicon" icon={faJs} />
                            <h4 className="skilltext">JavaScript</h4>
                        </div>
                        <div className="skillcadr skill4">
                            <FontAwesomeIcon className="skillsicon" icon={faReact} />
                            <h4 className="skilltext">React</h4>  
                        </div>
                        <div className="skillcadr skill5">
                            <FontAwesomeIcon className="skillsicon" icon={faNodeJs} />
                            <h4 className="skilltext">Node.js</h4>
                        </div>
                        <div className="skillcadr skill6">
                            <FontAwesomeIcon className="skillsicon" icon={faBootstrap} />
                            <h4 className="skilltext">Bootstrap</h4>
                        </div>
                        <div className="skillcadr skill7">
                            <FontAwesomeIcon className="skillsicon" icon={faDatabase} />
                            <h4 className="skilltext">MongoDB</h4>
                        </div>
                        <div className="skillcadr skill8">
                            <FontAwesomeIcon className="skillsicon" icon={faSquareGit} />
                            <h4 className="skilltext">Git</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}