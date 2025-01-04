import React from "react";
import "./about.css";
import Project from "./project";
import myimage from "../images/myimage.jpg";

export default function About() {
    return (
        <div id="about" className="aboutsection">
            <div className="aboutcontent">
                <h1 className="abouttitle">Let's Talk a little About Me !!!</h1>
                <div className="aboutme">
                    <img className="myimage" src={myimage} alt="myimage" />
                    <div className="abouttext">
                        <p>
                            Hello! I'm Faouzi Haourigui, a passionate web developer with a strong
                            foundation in front-end development. I specialize in creating responsive
                            and user-friendly websites. I'm constantly learning and staying up-to-date
                            with the latest web technologies to deliver the best possible solutions.
                            Let me tell you a bit more about my personal life.
                        </p>
                        <br />
                        <p>
                            I am also a passionate artist with a love for music, art and reading.
                            I love to spend my free time drawing or reading books and listening to
                            music. If you are interested in any of these activities, please don't
                            hesitate to reach out to me. You can check my instagram account
                            to take a look at my work. Oh, and i forget to mention, I also
                            love motorcycles and riding them at high speed or in corners.
                        </p>
                    </div>     
                </div>
            </div>
            <Project />
        </div>
    );
}