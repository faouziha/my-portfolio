import React, { useState, useEffect } from "react";
import "./home.css";
import About from "./about";

export default function Home() {
    const [time, setTime] = useState("");

    useEffect(() => {
        function updateClock() {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let session = "AM";

            if (hours === 0) {
                hours = 12;
            }

            if (hours > 12) {
                hours -= 12;
                session = "PM";
            }

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            const currentTime = `${hours}:${minutes}:${seconds} ${session}`;
            setTime(currentTime);
        }

        updateClock();
        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="home" className="homesection">
            <div className="homecontent">
                <h1 className="title">Hi, I'm Faouzi.</h1>
                <div className="subtitlecontainer">
                    <h2 className="subtitle">Front-end developer - back-end developer - full-stack developer - UI/UX designer - cybersecurity enthusiast</h2>
                    <h2 className="subtitle">Front-end developer - back-end developer - full-stack developer - UI/UX designer - cybersecurity enthusiast</h2>
                </div>
            </div>

            <div className="location">
                <h3>Based in Morocco : {time}</h3>
            </div>
            <About />
        </div>
    );
}