import { EmailConfig } from './EmailConfig';
import '../App.css'; // Imports App.css for styling

export const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-me">
                <p className="contact-title">Contact Me</p>
                <p className="contact-messaage">Thank you for taking the time to visit my portfolio, Any questions, feel free to contact me by Email, Phone, or LinkedIn. Below is a button to download my Resume!</p>
                <br></br>
                <a href="./images/Willie-Jones.pdf" download="Resume.pdf" className='download-btn'>
                    Will's Resume
                </a>
            </div>

            <EmailConfig />

        </div>
    )
}