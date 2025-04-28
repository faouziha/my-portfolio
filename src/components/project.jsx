import React, { useState, useEffect, useRef } from "react";
import './project.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import Skills from "./skills";
import { motion, AnimatePresence } from "framer-motion";

export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const slideInterval = useRef(null);
    
    const projectData = [
        {
            title: "e-commerce website",
            image: image1,
            alt: "e-commerce website",
            link: "",
            hasLink: false
        },
        {
            title: "Landing page website",
            image: image2,
            alt: "Landing page website",
            link: "https://faouziha.github.io/ums-project/",
            hasLink: true
        },
        {
            title: "movie website",
            image: image3,
            alt: "movie website",
            link: "",
            hasLink: false
        },
        {
            title: "Users management",
            image: image4,
            alt: "Users management",
            link: "",
            hasLink: false
        },
        {
            title: "restaurant website",
            image: image5,
            alt: "restaurant website",
            link: "https://faouziha.github.io/restaurant-savoria-/",
            hasLink: true
        }
    ];
    
    const startAutoSlide = () => {
        slideInterval.current = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
    };
    
    useEffect(() => {
        startAutoSlide();
        return () => {
            if (slideInterval.current) {
                clearInterval(slideInterval.current);
            }
        };
    }, []);
    
    const resetInterval = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
            startAutoSlide();
        }
    };
    
    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
            prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
        );
        resetInterval();
    };
    
    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
        );
        resetInterval();
    };
    
    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
        resetInterval();
    };
    
    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };
    
    return (
        <div id="projects" className="projectsection">
            <div className="projectcontent">
                <h1 className="projecttitle">My Projects</h1>
                
                <div className="slider-container" aria-roledescription="carousel" aria-label="Projects showcase">
                    <button 
                        className="slider-button prev" 
                        onClick={prevSlide} 
                        aria-label="Previous project"
                        title="Previous project"
                    >
                        &lt;
                    </button>
                    
                    <div className="slider-content">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="project-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${currentIndex + 1} of ${projectData.length}: ${projectData[currentIndex].title}`}
                            >
                                {projectData[currentIndex].hasLink ? (
                                    <div 
                                        className="project-content clickable" 
                                        onClick={() => window.open(projectData[currentIndex].link, '_blank', 'noopener,noreferrer')}
                                    >
                                        <h1>{projectData[currentIndex].title}</h1>
                                        <img 
                                            className="projectimage" 
                                            src={projectData[currentIndex].image} 
                                            alt={projectData[currentIndex].alt} 
                                        />
                                        <div className="project-overlay">
                                            <span>Click to view project</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="project-content">
                                        <h1>{projectData[currentIndex].title}</h1>
                                        <img 
                                            className="projectimage" 
                                            src={projectData[currentIndex].image} 
                                            alt={projectData[currentIndex].alt} 
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    <button 
                        className="slider-button next" 
                        onClick={nextSlide}
                        aria-label="Next project"
                        title="Next project"
                    >
                        &gt;
                    </button>
                </div>
                
                <div className="slider-dots" role="tablist" aria-label="Project slides">
                    {projectData.map((project, index) => (
                        <button 
                            key={index} 
                            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}: ${project.title}`}
                            aria-selected={index === currentIndex}
                            role="tab"
                            tabIndex={index === currentIndex ? 0 : -1}
                        />
                    ))}
                </div>
            </div>
            <Skills />
        </div>
    );
}