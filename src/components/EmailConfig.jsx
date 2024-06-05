import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'; // Imports App.css for styling

export const EmailConfig = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false); // Set emailSent to false by default

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_w9ffv0i', 
            'template_axior58', 
        form.current, 
        { publicKey: 'ghZG9C0zOc2Kgl_zp',
        })
        
        .then((result) => {
            console.log(result.text);
            setEmailSent(true); // Update emailSent to true when email is sent successfully
            form.current.reset(); // Reset form after email is sent
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="form-container">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required disabled></input>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required disabled></input>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required disabled></textarea>
                {emailSent ? <p style={{ color: 'cyan', fontSize: '20px' }}>Email sent!</p> : <input type="submit" value="Send" required disabled></input>} {/* Display submit button or "Email sent" message */}
            </form>
        </div>    
    )
}