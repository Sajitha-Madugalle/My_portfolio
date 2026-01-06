import { useState } from 'react';

function Projects() {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: 'Steer Safe (2024)',
            description: 'EOG-based drowsiness detection system to identify driver fatigue and prevent accidents. Winner: IEEE Sri Lanka Section Challenge Sphere.',
            image: '/media/stear_safe.png',
            link: 'https://github.com/orgs/PulseX-Solutions/repositories',
            hidden: false
        },
        {
            title: 'EMG Monitoring & Flappy Bird (2025)',
            description: 'Complete electromyography acquisition system with custom hardware and real-time visualization used for a muscle-controlled game.',
            image: '/media/emg_flappy.png',
            link: 'https://github.com/Sajitha-Madugalle/EMG-Capture-and-Visualization',
            hidden: false
        },
        {
            title: 'Portable Analog ECG Monitor (2023)',
            description: 'Device using analog components for biosignal acquisition and custom PCB filtering with digital visualization.',
            image: '/media/ecg.png',
            link: 'https://github.com/Sajitha-Madugalle/Analog_Heart_Rate_Monitor',
            hidden: false
        },
        {
            title: 'SPI Master-Slave RTL Design (2025)',
            description: 'Synthesizable full-duplex communication module implemented in Verilog HDL covering the complete RTL-to-GDSII flow using Cadence tools.',
            image: '/media/spi_master.png',
            link: 'https://github.com/Sajitha-Madugalle/spi-fdx-master-slave-rtl-to-gds',
            hidden: false
        },
        {
            title: '32-bit Floating-Point ALU (2024)',
            description: 'Design and FPGA implementation (DE2-115) of an IEEE-754 single-precision arithmetic unit.',
            image: '/media/32bitFPGA.jpg',
            link: 'https://github.com/Sajitha-Madugalle/32-bit-Floating-Point-Arithmetic-Unit',
            hidden: false
        },
        {
            title: '8-bit SAR ADC (2024)',
            description: '100 KSPS fully differential Successive Approximation Register ADC designed for low-power applications using open-source tools.',
            image: '/media/sar_adc.png',
            link: 'https://github.com/Sajitha-Madugalle/8bit-100KSPS-Fully-differential-SAR-ADC-design-',
            hidden: false
        },
        {
            title: 'CMOS Inverter IC Analysis (2024)',
            description: 'Tape-out-ready design using Sky130 PDK and open-source tools like ngspice, Magic VLSI, and xschem.',
            image: '/media/CMOS_inv.png',
            link: 'https://github.com/Sajitha-Madugalle/cmos_inverter_sky130/',
            hidden: true
        },
        {
            title: 'Heart Sound Classification (2025)',
            description: 'Implementation of CNN-based classification for PCG signals using 1D-LBP and 1D-LTP feature extraction.',
            image: '/media/heart_sound.png',
            link: 'https://github.com/Sajitha-Madugalle/heartsound-lbp-ltp-cnn',
            hidden: true
        },
        {
            title: 'Vibration Analysis System (2024)',
            description: 'Robotic arm vibration analysis using MATLAB and FFT/PSD analysis to estimate damping factors.',
            image: '/media/vib_analys.png',
            link: 'https://github.com/Vibration-Analysis/Vibration-Analysing-system-for-Robot-arms',
            hidden: true
        },
        {
            title: 'Window Capture & Browsing Tool (2024)',
            description: 'Developed with OpenCV and Tesseract OCR, integrated with Gemini API for intelligent browsing shortcuts.',
            image: '/media/window.png',
            link: 'https://github.com/Sajitha-Madugalle/Reading_Companion_OpenCV',
            hidden: true
        }
    ];

    const visibleProjects = showAll ? projects : projects.filter(p => !p.hidden);

    return (
        <section id="projects" className="section alt-bg">
            <div className="container">
                <h2 className="section-title">Selected Projects</h2>
                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                            style={{
                                display: 'block',
                                opacity: project.hidden && showAll ? 0 : 1,
                                transition: 'opacity 0.3s ease'
                            }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="view-more-container">
                    {!showAll ? (
                        <button
                            id="see-more-btn"
                            className="btn secondary"
                            onClick={() => setShowAll(true)}
                        >
                            See More
                        </button>
                    ) : (
                        <button
                            id="see-less-btn"
                            className="btn secondary"
                            onClick={() => {
                                setShowAll(false);
                                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            See Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;
