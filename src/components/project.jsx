import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './project.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import Skills from "./skills";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// e-commerce website
import screen1 from '../images/e-commerce/screen1.png';
import screen2 from '../images/e-commerce/screen2.png';
import screen3 from '../images/e-commerce/screen3.png';
import screen4 from '../images/e-commerce/screen4.png';
import screen5 from '../images/e-commerce/screen5.png';
import screen6 from '../images/e-commerce/screen6.png';
import screen7 from '../images/e-commerce/screen7.png';
import screen8 from '../images/e-commerce/screen8.png';
import screen9 from '../images/e-commerce/screen9.png';

//pfe project
import pfeCreateProduct from '../images/pfe/pfeCreateProduct.png';
import pfeDashboard from '../images/pfe/pfeDashboard.png';
import pfeDashboardMobile from '../images/pfe/pfeDashboardMobile.png';
import pfeDisplayProduct from '../images/pfe/pfeDisplayProduct.png';
import pfeDisplayProductMobile from '../images/pfe/pfeDisplayProductMobile.png';
import pfeFactures from '../images/pfe/pfeFactures.png';
import pfeFacturesMobile from '../images/pfe/pfeFacturesMobile.png';
import pfeFeatures from '../images/pfe/pfeFeatures.png';
import pfeHome from '../images/pfe/pfeHome.png';
import pfeOrders from '../images/pfe/pfeOrders.png';
import pfePricing from '../images/pfe/pfePricing.png';
import pfeProduct from '../images/pfe/pfeProduct.png';
import pfeSolutions from '../images/pfe/pfeSolutions.png';
import pfeUserManagement from '../images/pfe/pfeUserManage.png';
import pfeUserManagementMobile from '../images/pfe/pfeUserManageMobile.png';

//User Management
import Ajouter from '../images/UserManagement/Ajouter.png';
import Display from '../images/UserManagement/Display.png';
import Modifier from '../images/UserManagement/Modifier.png';


export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const slideInterval = useRef(null);
    
    const projectData = [
        {
            title: "e-commerce website",
            image: image1,
            alt: "e-commerce website",
            link: "",
            hasLink: false,
            screenshots: [
                { src: screen1, alt: "E-commerce homepage" },
                { src: screen2, alt: "E-commerce Dashboard" },
                { src: screen3, alt: "E-commerce Dashboard dark mode" },
                { src: screen4, alt: "E-commerce shopping cart" },
                { src: screen5, alt: "E-commerce product categories" },
                { src: screen6, alt: "E-commerce homepage dark mode" },
                { src: screen7, alt: "E-commerce product details" },
                { src: screen8, alt: "E-commerce products page" },
                { src: screen9, alt: "E-commerce products page dark mode" }
            ],
            description: "An e-commerce platform with product listings, shopping cart, and checkout functionality."
        },
        {
            title: "Landing page website",
            image: image2,
            alt: "Landing page website",
            link: "https://faouziha.github.io/ums-project/",
            hasLink: true
        },
        {
            title: "PFE Project(Stock Management)",
            image: pfeHome,
            alt: "PFE Project(Stock Management)",
            link: "",
            hasLink: false,
            screenshots: [
                { src: pfeHome, alt: "PFE Project(Stock Management) homepage" },
                { src: pfeDashboard, alt: "PFE Project(Stock Management) dashboard" },
                { src: pfeDashboardMobile, alt: "PFE Project(Stock Management) dashboard mobile" },
                { src: pfeDisplayProduct, alt: "PFE Project(Stock Management) display product" },
                { src: pfeDisplayProductMobile, alt: "PFE Project(Stock Management) display product mobile" },
                { src: pfeFactures, alt: "PFE Project(Stock Management) factures" },
                { src: pfeFacturesMobile, alt: "PFE Project(Stock Management) factures mobile" },
                { src: pfeFeatures, alt: "PFE Project(Stock Management) features" },
                { src: pfeHome, alt: "PFE Project(Stock Management) home" },
                { src: pfeOrders, alt: "PFE Project(Stock Management) orders" },
                { src: pfePricing, alt: "PFE Project(Stock Management) pricing" },
                { src: pfeProduct, alt: "PFE Project(Stock Management) product" },
                { src: pfeSolutions, alt: "PFE Project(Stock Management) solutions" },
                { src: pfeUserManagement, alt: "PFE Project(Stock Management) user management" },
                { src: pfeUserManagementMobile, alt: "PFE Project(Stock Management) user management mobile" }
            ],
            description: "A Stock Management System with search functionality and detailed movie information."
        },
        {
            title: "Users management",
            image: image4,
            alt: "Users management",
            link: "",
            hasLink: false,
            screenshots: [
                { src: image4, alt: "User dashboard" },
                { src: Display, alt: "User dashboard" },
                { src: Ajouter, alt: "User profile page" },
                { src: Modifier, alt: "User settings" }
            ],
            description: "A user management system with authentication, role-based access control, and user profiles."
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
        <React.Fragment>
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
                                        <div 
                                            className="project-content clickable" 
                                            onClick={() => {
                                                setSelectedProject(projectData[currentIndex]);
                                                setShowModal(true);
                                            }}
                                        >
                                            <h1>{projectData[currentIndex].title}</h1>
                                            <img 
                                                className="projectimage" 
                                                src={projectData[currentIndex].image} 
                                                alt={projectData[currentIndex].alt} 
                                            />
                                            <div className="project-overlay">
                                                <span>View screenshots</span>
                                            </div>
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
            </div>

            {/* Screenshot Modal - Using React Portal */}
            {showModal && selectedProject && 
                ReactDOM.createPortal(
                    <AnimatePresence>
                        <motion.div 
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
                        >
                            <motion.div 
                                className="modal-content"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                style={{ zIndex: 10000 }}
                            >
                                <button 
                                    className="modal-close-btn" 
                                    onClick={() => setShowModal(false)}
                                    aria-label="Close modal"
                                >
                                    &times;
                                </button>
                                
                                <h2>{selectedProject.title}</h2>
                                <p className="project-description">{selectedProject.description}</p>
                                
                                <div className="screenshot-slider">
                                    <Slider
                                        dots={true}
                                        infinite={true}
                                        speed={500}
                                        slidesToShow={1}
                                        slidesToScroll={1}
                                        autoplay={true}
                                        autoplaySpeed={3000}
                                        pauseOnHover={true}
                                        arrows={true}
                                    >
                                        {selectedProject.screenshots.map((screenshot, index) => (
                                            <div key={index} className="screenshot-slide">
                                                <img 
                                                    src={screenshot.src} 
                                                    alt={screenshot.alt} 
                                                    className="screenshot-image"
                                                />
                                                <p className="screenshot-caption">{screenshot.alt}</p>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>,
                    document.body
                )
            }
            <Skills />
        </React.Fragment>
    );
}