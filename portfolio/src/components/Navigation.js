import { Navbar, Container, Nav } from 'react-bootstrap'; // Imports Navbar, Container, and Nav from react-bootstrap
import Button from 'react-bootstrap/Button';

export const Navigation = ({ setActiveLink, activeLink }) => { 

    const handleNavClick = (link) => {
        setActiveLink(link);
    };
    
    const linkItems = ['About', 'Portfolio', 'Resume']; // ARRAY OF LINKS
    const links = linkItems.map((link) => // Map through the array of links
        <Nav.Link 
            key={link}
            href={`#${link.toLocaleLowerCase()}`} 
            onClick={() => handleNavClick(link)} // Call handleNavClick function when link is clicked
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