function Contact() {
    return (
        <section id="contact" className="section alt-bg">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-grid">
                    {/* Left Side: Contact Info */}
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p className="contact-desc">Feel free to reach out for collaborations or just a friendly chat.</p>

                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <span className="contact-label">Email</span>
                                <a href="mailto:sajithamadugalle@gmail.com" className="contact-val">
                                    sajithamadugalle@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <i className="fab fa-whatsapp"></i>
                            <div>
                                <span className="contact-label">WhatsApp / Phone</span>
                                <a href="https://wa.me/94769867887" target="_blank" rel="noopener noreferrer" className="contact-val">
                                    +94 76 986 7887
                                </a>
                            </div>
                        </div>

                        <div className="social-links-contact">
                            <a href="https://www.linkedin.com/in/sajitha-madugalle/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Sajitha-Madugalle" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Email Form */}
                    <div className="contact-form-container">
                        <form className="contact-form" action="mailto:sajithamadugalle@gmail.com" method="post" encType="text/plain">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn primary full-width">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
