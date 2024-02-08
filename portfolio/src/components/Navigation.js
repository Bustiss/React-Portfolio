import { Navbar, Container, Nav } from 'react-bootstrap'; // Imports Navbar, Container, and Nav from react-bootstrap
import Button from 'react-bootstrap/Button';
import { useState } from 'react'; // Imports useState from react to use
import '../App.css'; // Imports App.css for styling

export const Navigation = () => { 

    const [activeLink, setActiveLink] = useState('About'); // Add state for active link
    
    const linkItems = ['About', 'Portfolio', 'Resume']; // ARRAY OF LINKS
    const links = linkItems.map((link) => // Map through the array of links
        <Nav.Link 
            href={`#${link}`} 
            onClick={() => setActiveLink(link)} // Set active link to the current link
            className={`nav-link ${activeLink === link ? 'active' : ''}`} // Add active class if active page is the current link
        >
            {link}
        </Nav.Link>
    );

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            
                <Nav className="me-auto">
                    {links}
                    <Button className="button">Contact Me</Button>{' '} 
                </Nav>

            </Container>
        </Navbar>
    )
}