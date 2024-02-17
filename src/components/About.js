import React, { useEffect, useState } from 'react';
import '../App.css'; // Imports App.css for styling

export const About = () => { 
    const [text, setText] = useState("");
    const fullText = "I'm Will 👨🏾‍💻, A Software Developer and Father. I created this site to display my projects and connect with other developers! ";

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
        <div id="About" className="about-container">
            <div className="text-container">
                <h1 className="about-title"> Hello 👋🏾 </h1>
                <p className='about-text'>{text}</p>
            </div>

            <div className='about-image'>
                <img className="image" src='./images/Portfolio-Image.png' alt="Will's portfolio" />
            </div>
        </div>
    )
}