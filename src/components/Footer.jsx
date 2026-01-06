function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content-row">
                    {/* Left: Socials & Copyright */}
                    <div className="footer-left">
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/in/sajitha-madugalle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/Sajitha-Madugalle/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/__sajitha_madugalle_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/sajitha.madda.77?sfnsn=wa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <p className="copyright">&copy; 2025 Sajitha. All Rights Reserved.</p>
                    </div>

                    {/* Right: Affiliations */}
                    <div className="footer-right">
                        <h3>Affiliations</h3>
                        <div className="affiliations">
                            {/* UoM Logo */}
                            <a href="https://uom.lk/" target="_blank" rel="noopener noreferrer" className="affil-link" title="University of Moratuwa">
                                <img
                                    src="/media/University_of_Moratuwa_logo.png"
                                    alt="UoM"
                                    className="affil-logo"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/50x50?text=UoM'; }}
                                />
                            </a>
                            {/* ENTC Logo */}
                            <a href="https://ent.uom.lk/" target="_blank" rel="noopener noreferrer" className="affil-link" title="ENTC">
                                <img
                                    src="/media/ENTC-logo.png"
                                    alt="ENTC"
                                    className="affil-logo"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/50x50?text=ENTC'; }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
