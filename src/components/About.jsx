import React, { useEffect, useState } from 'react';
import '../App.css'; // Imports App.css for styling

export const About = () => { 
    const [text, setText] = useState("");
    const fullText = "! Please check back soon!"; // Text to be displayed

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < fullText.length) {
                setText((prevText) => prevText + fullText.charAt(i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50); // Speed of typing effect
        return () => clearInterval(typing); // Cleanup on unmount
    }, []);

    return (
        // About section
        <div id="About" className="about-container">
            <div className="text-container">
                <h1 className="about-title"> Hello 👋🏾 </h1>
                <p className='about-text'>{text}</p>
            </div>

            <div className='about-image'>
                <img className="image" src='./images/profile-filler.jpg' alt="Will's portfolio" />
            </div>
        </div>
    )
}