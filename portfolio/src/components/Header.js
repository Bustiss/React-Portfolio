import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import { useState, useEffect } from 'react'; // for Official portfolio... NOT Module 20

export const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                    <Button variant="outline-info">Contact Me</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

/* Use this layout for Official portfolio... NOT Module 20
export const Header = () => {
    const [activeLink, setActiveLink] = useState('home'); // default active link is home/About
    const [scrolled, setScrolled] = useState(false); // default state of navbar is not scrolled

    useEffect(() => { // add event listener to window to check if the user has scrolled
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    } ,[]);
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
        <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">home</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <span>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Contact Me</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
*/