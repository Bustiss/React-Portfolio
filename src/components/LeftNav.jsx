import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export const LeftNav = () => {
    console.log('Rendering LeftNav');

    const iconStyle = {
        fontSize: '35px',
        color: 'white',
        margin: '1px',
    }

    return (
        <nav className='left-nav'>
                <a className='icon' style={iconStyle} href="https://github.com/Bustiss" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a className='icon' style={iconStyle} href="https://www.linkedin.com/in/williejones32" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a className='icon' style={iconStyle} href="" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </nav>
    )
};