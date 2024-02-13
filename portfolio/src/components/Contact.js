import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {

    const form = useRef();
    const [emailSent, setEmailSent] = useState(false); // Add emailSent state

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            e.target, 
            process.env.REACT_APP_EMAILJS_Public_Key
        )
            .then((result) => {
                console.log(result.text);
                setEmailSent(true); // Update emailSent to true when email is sent successfully
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contact-container">
            <div className="contact-me">
                <p className="contact-title">Contact Me</p>
                <p className="contact-messaage">Thank you for taking the time to visit my portfolio, Any questions, feel free to contact me by Email, Phone, or LinkedIn</p>
                <br></br>
                <p className="contact-messaage">Phone: (###) ###- #### </p>
            </div>
            <div className="form-container">
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    {emailSent ? <p>Email sent</p> : <input type="submit" value="Send"></input>} {/* Display submit button or "Email sent" message */}
                </form>
            </div>    
        </div>
    )
}