import React, { useEffect, useState, useRef } from 'react';
import { LeftNav } from './LeftNav';

export const About = () => { 
    const fullText = `! A proud father, full-stack web developer, Google-certified in cybersecurity, and an aspiring actor. I blend creativity, technical expertise, and security to craft innovative, user-friendly solutions. Let’s connect and create something extraordinary!`;
    const [text, setText] = useState('');
    const index = useRef(0);

    useEffect(() => {
        const typing = setInterval(() => {
            if (index.current < fullText.length) {
                setText((prevText) => prevText + fullText.charAt(index.current));
                index.current += 1;
            } else {
                clearInterval(typing);
            }
        }, 50); // Speed of typing effect
        return () => clearInterval(typing); // Cleanup on unmount
    }, [fullText]);

    return (
        <div className="about-container">
            <div className="about-card">
                <div className="about-image">
                    <img 
                        src="./images/profile-filler.jpg" 
                        alt="Profile of a proud father and web developer" 
                    />
                </div>
                <div className="about-text">
                    <h1>Hello 👋🏾</h1>
                    <p>{text}</p>
                </div>
            </div>
            <LeftNav />
        </div>
    );
};

export default About;