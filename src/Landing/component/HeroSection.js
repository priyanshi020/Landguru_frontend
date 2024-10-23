// src/Main.js
import React from 'react';
import './CSS/Main.css';

const HeroSection = () => {
    return (
        <div className="main">
            <h1>Learn Design with Nia Matos</h1>
            <p>Get your blood tests delivered at let home collect sample from the victory of the management that supplies best design system guidelines ever.</p>
            <input type="text" placeholder="Search Course Name" className="search-input" />
            <button className="try-button">Try for Free</button>
            <div className="video-section">
                <video controls className="video">
                    <source src="your-video-url.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;
