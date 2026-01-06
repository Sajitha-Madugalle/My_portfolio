function Volunteering() {
    const logos = [
        { src: '/media/IEEE_logo.png', alt: 'IEEE Logo' },
        { src: '/media/EMBS_UoM.webp', alt: 'EMBS UoM Logo' },
        { src: '/media/CASS LOGO UOM.png', alt: 'CASS UoM Logo' },
        { src: '/media/eclub.jpeg', alt: 'Electronic Club Logo' },
        { src: '/media/mora-maths.png', alt: 'Maths Society Logo', className: 'logo-maths' }
    ];

    const majorRoles = [
        {
            image: '/media/vol_embs_chair.jpeg',
            role: 'IEEE EMBS Student Branch Chapter - UoM',
            date: 'Oct 2024 – Present',
            items: [
                { text: 'Chairperson (2025–Present)', highlight: true },
                { text: 'Vice Chairperson (2024–2025).' },
                { text: 'Event Co-Chair – Brainstorm 2024:', bold: true, extra: ' Brainstorm is Sri Lanka\'s premier healthcare innovation challenge.' }
            ]
        },
        {
            image: '/media/vol_cass.png',
            role: 'IEEE CASS Student Branch Chapter - UoM',
            date: 'Dec 2025 – Present',
            items: [
                { text: 'Treasurer (2025–Present)', highlight: true }
            ],
            description: 'The IEEE Circuits and Systems Society Student Branch Chapter (IEEE CAS SBC) at the University of Moratuwa is Sri Lanka\'s first IEEE CAS Student Branch Chapter.'
        },
        {
            image: '/media/vol_speaker.png',
            role: 'Research Day 2025',
            org: 'Faculty of Medicine, Univrsity of Moratuwa',
            items: [
                { text: 'Research Day 2025:', bold: true, extra: ' Delivered a talk on Medical Tech Collaboration.' }
            ]
        },
        {
            image: '/media/maths.jpeg',
            role: 'Electronic Club, University of Moratuwa',
            org: 'Workshop Presenter & Member',
            date: '2023 - Present',
            items: [
                { text: 'SLRC:', bold: true, extra: ' Workshops on robotics/electronics.' },
                { text: 'Participated in Abhina 2023 & 2025.' }
            ]
        }
    ];

    const minorRoles = [
        {
            icon: 'fa-calculator',
            title: 'Mathematical Society - UoM',
            meta: 'Organizing Committee (Enigma 2024) & Resource Person (MTutor)'
        },
        {
            icon: 'fa-user-tie',
            title: 'Senior Prefect',
            meta: 'Government Science College, Matale (2018 – 2020)'
        },
        {
            icon: 'fa-chess-king',
            title: 'School Chess Team Captain',
            meta: 'Sri Chandananda Buddhist College, Kandy (2012)'
        }
    ];

    return (
        <section id="volunteering" className="section">
            <div className="container">
                <h2 className="section-title">Volunteering Experience</h2>

                {/* Logo Strip */}
                <div className="vol-logos">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={logo.className || ''}
                        />
                    ))}
                </div>

                {/* Major Roles Grid */}
                <div className="vol-major-grid">
                    {majorRoles.map((role, index) => (
                        <div key={index} className="vol-card-major">
                            <div className="vol-img-container">
                                <img src={role.image} alt={role.role} />
                            </div>
                            <div className="vol-content">
                                <h3 className="role">{role.role}</h3>
                                {role.org && <span className="org">{role.org}</span>}
                                {role.date && <p className="date">{role.date}</p>}
                                <ul className="extra-list-major">
                                    {role.items.map((item, idx) => (
                                        <li key={idx}>
                                            {item.highlight && <span className="org">{item.text}</span>}
                                            {item.bold && !item.highlight && (
                                                <>
                                                    <strong>{item.text}</strong>
                                                    {item.extra}
                                                </>
                                            )}
                                            {!item.bold && !item.highlight && item.text}
                                        </li>
                                    ))}
                                </ul>
                                {role.description && (
                                    <p style={{ fontSize: '0.9rem' }}>{role.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minor Roles List */}
                <div className="vol-minor-list">
                    {minorRoles.map((role, index) => (
                        <div key={index} className="award-row">
                            <div className="award-icon">
                                <i className={`fas ${role.icon}`}></i>
                            </div>
                            <div className="award-details">
                                <h3>{role.title}</h3>
                                <span className="award-meta">{role.meta}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Volunteering;
