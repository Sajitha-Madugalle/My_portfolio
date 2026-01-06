function Hero() {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="greeting">Electronics Engineer</p>
                    <h1 className="hero-name">
                        Sajitha <br />
                        <span className="surname">Madugalle</span>
                        <div className="hero-socials-inline">
                            <a href="https://github.com/Sajitha-Madugalle/" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sajitha-madugalle" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </h1>
                    <p className="bio">
                        An Electronic Engineering enthusiast focused on solving problems from modular
                        electronic systems to deep microelectronics, including ASIC and VLSI design. Passionate about
                        Embeded Systems, human computer interaction and healthcare solutions. Also a hands-on designer
                        with experience in PCB design, 3D modeling, and 3D printing.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="btn primary">Projects Grid</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="btn secondary">Contact Me</a>
                        <a href="/assets/CV.pdf" download className="btn secondary">Download CV</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/media/sajitha_DP.jpg" alt="Sajitha - Profile" />
                </div>
            </div>
            <div className="scroll-down">
                <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>

            {/* Expertise & Interests Section */}
            <div className="container hero-expertise">
                <div className="about-grid">
                    {/* 1. Electronics */}
                    <div className="about-card">
                        <i className="fas fa-bolt icon"></i>
                        <h3>Electronics</h3>
                        <p>From Modular Electronics level to micro electronic level.</p>
                        <div className="associated-skills-box">
                            <span>Analog/Digital Circuits</span>
                            <span>Circuit Analysis</span>
                        </div>
                    </div>
                    {/* 2. Embedded Systems */}
                    <div className="about-card">
                        <i className="fas fa-microchip icon"></i>
                        <h3>Embedded Systems</h3>
                        <p>Building intelligent systems with firmware and hardware integration.</p>
                        <div className="associated-skills-box">
                            <span>Microcontrollers</span>
                            <span>Firmware</span>
                            <span>RTOS</span>
                        </div>
                    </div>
                    {/* 3. Healthcare solutions */}
                    <div className="about-card">
                        <i className="fas fa-heartbeat icon"></i>
                        <h3>Healthcare Solutions</h3>
                        <p>Developing healthcare-focused solutions and electronic instrumentation.</p>
                        <div className="associated-skills-box">
                            <span>Biosensors</span>
                            <span>Medical Devices</span>
                        </div>
                    </div>
                    {/* 4. Human Computer Interaction */}
                    <div className="about-card">
                        <i className="fas fa-brain icon"></i>
                        <h3>Human Computer Interaction</h3>
                        <p>Bio signal to Computer controlling.</p>
                        <div className="associated-skills-box">
                            <span>Signal Processing</span>
                            <span>BCI</span>
                            <span>Python</span>
                        </div>
                    </div>
                    {/* 5. Design */}
                    <div className="about-card">
                        <i className="fas fa-pen-fancy icon"></i>
                        <h3>Design</h3>
                        <p>PCB design, 3D modeling, 3D printing.</p>
                        <div className="associated-skills-box">
                            <span>PCB Design</span>
                            <span>3D Modeling</span>
                            <span>CAD</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
