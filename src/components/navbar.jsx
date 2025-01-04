import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <a href='#home' className='anchorname'><h2 className='name'>Faouzi haourigui</h2></a>
                <div className='menu'>
                    <a href='#home' className='navanchor home'><h4>Home</h4></a>
                    <a href='#about' className='navanchor about'><h4>About</h4></a>
                    <a href='#projects' className='navanchor projects'><h4>Projects</h4></a>
                    <a href='#skills' className='navanchor projects'><h4>Skills</h4></a>
                    <a href='#contact' className='navanchor contact'><h4>Contact</h4></a>
                    <div className='icons'>
                        <a className='icon' href="/resume/FaouziHaouriguiResume (1).pdf" download target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} /></a>
                        <a className='icon' href="https://www.linkedin.com/in/faouzi-haourigui-4b2517275/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className='icon' href="https://www.instagram.com/faouzihaourigui/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}