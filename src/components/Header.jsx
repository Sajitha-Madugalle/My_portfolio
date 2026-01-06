import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className="header"
            style={{
                boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.4)' : '0 2px 20px rgba(0, 0, 0, 0.2)',
                padding: scrolled ? '10px 0' : '15px 0'
            }}
        >
            <nav className="navbar">
                <Link to="/" className="logo">
                    Sajitha<span>.</span>
                </Link>
                {location.pathname === '/' ? (
                    <ul className="nav-links">
                        <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
                        <li><a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
                        <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
                        <li><a href="#awards" onClick={(e) => scrollToSection(e, '#awards')}>Achievements</a></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
                        <li><a href="/assets/CV.pdf" download className="btn-cv-header">Download CV</a></li>
                    </ul>
                ) : (
                    <ul className="nav-links">
                        <li><Link to="/">Back to Home</Link></li>
                    </ul>
                )}
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
