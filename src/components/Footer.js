import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import '../App.css'; // Imports App.css for styling

export const Footer = () => {

    const iconStyle = {
        fontSize: '30px',
        color: 'white',
        marginRight: '10px'
    }

    return (
        <footer className='footer'>
                <a style={iconStyle} href="https://github.com/Liiv-Dev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a style={iconStyle} href="https://www.linkedin.com/in/williejones32" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a style={iconStyle} href="https://www.youtube.com/@Liiv_Dev-nw9ir" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </footer>
    )
};