import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import '../App.css'; // Imports App.css for styling

export const Footer = () => {

    const iconStyle = {
        fontSize: '40px',
        color: 'white',
        marginRight: '10px'
    }

    return (
        <footer className='footer'>
                <a style={iconStyle} href="https://github.com/Liiv-Dev"><FaGithub /></a>
                <a style={iconStyle} href="www.linkedin.com/in/williejones32"><FaLinkedin /></a>
        </footer>
    )
};