import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';

export default function Navbar({ onMenuToggle }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        onMenuToggle(isOpen);
    }, [isOpen, onMenuToggle]);

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <a href='#home' className='anchorname' onClick={handleLinkClick}><h2 className='name'>Faouzi haourigui</h2></a>
                <div className='burger' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size='lg' />
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <a href='#home' className='navanchor home' onClick={handleLinkClick}><h4>Home</h4></a>
                    <a href='#about' className='navanchor about' onClick={handleLinkClick}><h4>About</h4></a>
                    <a href='#projects' className='navanchor projects' onClick={handleLinkClick}><h4>Projects</h4></a>
                    <a href='#skills' className='navanchor projects' onClick={handleLinkClick}><h4>Skills</h4></a>
                    <a href='#contact' className='navanchor contact' onClick={handleLinkClick}><h4>Contact</h4></a>
                    <div className='icons'>
                        <a className='icon' href="/resume/FaouziHaouriguiResume.pdf" download target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} /></a>
                        <a className='icon' href="https://www.linkedin.com/in/faouzi-haourigui-4b2517275/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}  /></a>
                        <a className='icon' href="https://www.instagram.com/faouzihaourigui/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}