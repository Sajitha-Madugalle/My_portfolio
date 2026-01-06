function Experience() {
    const experiences = [
        {
            date: 'Dec 2024 – June 2025',
            title: 'Visiting Research Intern',
            company: 'The University of Sydney, NSW, Australia',
            description: 'Collaborating on HCI research projects focusing on electrotactile feedback on fingertips. Working on computational design and 3D printing techniques for deployable structures.',
            image: '/media/usyd.png',
            bgColor: null
        },
        {
            date: 'May 2025 – Sep 2025',
            title: 'Instructor',
            company: 'Skillsurf',
            description: 'Delivered the "Analog CMOS IC Design and Simulation Course 2025" with a focus on theoretical foundations and iterative learning.',
            image: '/media/skillsurf.jpeg',
            bgColor: '#00695c'
        },
        {
            date: 'Present',
            title: 'Founding Member',
            company: 'Aura Digital Labs',
            description: 'Co-founded a technology startup specializing in AI solutions, IoT, robotics, cloud applications, embedded systems, and DevOps.',
            image: '/media/aura.jpeg',
            bgColor: '#4a148c'
        }
    ];

    return (
        <section id="experience" className="section alt-bg">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-container">
                    {experiences.map((exp, index) => (
                        <div key={index} className="exp-card">
                            <div className="exp-bg-image" style={exp.bgColor ? { backgroundColor: exp.bgColor } : {}}>
                                <img src={exp.image} alt={exp.company} />
                            </div>
                            <div className="exp-content">
                                <span className="date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <span className="company">{exp.company}</span>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
