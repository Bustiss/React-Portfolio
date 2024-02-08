import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'; // Imports useState from react to use

export const Navigation = () => { 
    const [activeLink, setActiveLink] = useState('home'); // Add state for active link
    const [buttonClicked, setButtonClicked] = useState(false); // Add state for button clicked

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#about" 
                        onClick={() => setActiveLink('about')} // Set active link to about
                        className={activeLink === 'about' ? 'active' : ''} // Add active class if active page is about
                    >
                        About
                    </Nav.Link>
                    <Nav.Link 
                        href="#portfolio" 
                        onClick={() => setActiveLink('portfolio')} // Set active link to portfolio
                        className={activeLink === 'portfolio' ? 'active' : ''} // Add active class if active page is portfolio
                    >
                        Portfolio
                    </Nav.Link>
                    <Nav.Link 
                        href="#resume" 
                        onClick={() => setActiveLink('resume')}  // Set active link to resume
                        className={activeLink === 'resume' ? 'active' : ''} // Add active class if active page is resume
                    >
                        Resume
                    </Nav.Link>
                    <Button 
                        variant="outline-info" 
                        className={buttonClicked ? 'active' : ''} 
                        onClick={() => setButtonClicked(true)}
                    >
                        Contact Me
                    </Button>{' '}
                </Nav>

            </Container>
        </Navbar>
    )
}