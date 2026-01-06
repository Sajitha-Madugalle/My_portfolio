function Awards() {
    const featuredAwards = [
        {
            title: 'Circuit Challenge',
            event: 'IEEE Sri Lanka Section Challenge Sphere Event Series 2024',
            result: 'Champions',
            image: '/media/award_circuit_challenge.jpeg'
        },
        {
            title: 'National Microelectronics Olympiad',
            event: 'Sri Lanka Chips Challenge IEEE 2024',
            result: 'Top 10',
            image: '/media/award_micro_olympiad.jpeg'
        },
        {
            title: 'Silicon Pulse',
            event: '24-hour Analog Circuit Design Competition 2024',
            result: 'Champions',
            image: '/media/award_silicon_pulse.jpeg'
        }
    ];

    const otherAwards = [
        {
            icon: 'fa-trophy',
            title: "Dean's List Honors",
            meta: 'Faculty of Engineering, University of Moratuwa (Semester 1, 2, 4 & 6)'
        },
        {
            icon: 'fa-trophy',
            title: 'School Colours for Chess',
            meta: 'Sri Chandananda Buddhist College, Kandy 2012'
        },
        {
            icon: 'fa-trophy',
            title: 'Gold Medalist - Chess',
            meta: 'Kandy District Youth Chess Championship - U14 2014'
        },
        {
            icon: 'fa-trophy',
            title: "Brainstorm '22",
            meta: 'Semifinalists 2022'
        }
    ];

    return (
        <section id="awards" className="section">
            <div className="container">
                <h2 className="section-title">Honors and Awards</h2>
                <div className="awards-grid">
                    {featuredAwards.map((award, index) => (
                        <div key={index} className="award-card">
                            <div className="award-img-container">
                                <img src={award.image} alt={award.title} />
                            </div>
                            <div className="award-content">
                                <h3>{award.title}</h3>
                                <p className="award-event">{award.event}</p>
                                <span className="award-result">{award.result}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="awards-list">
                    {otherAwards.map((award, index) => (
                        <div key={index} className="award-row">
                            <div className="award-icon">
                                <i className={`fas ${award.icon}`}></i>
                            </div>
                            <div className="award-details">
                                <h3>{award.title}</h3>
                                <span className="award-meta">{award.meta}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Awards;
