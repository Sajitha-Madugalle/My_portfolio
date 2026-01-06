import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import Volunteering from '../components/Volunteering';
import GalleryPreview from '../components/GalleryPreview';
import Contact from '../components/Contact';

function Home() {
    useEffect(() => {
        // Scroll reveal animations
        const sections = document.querySelectorAll('.section');
        const options = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        sections.forEach(section => {
            section.classList.add('hidden');
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Awards />
                <Volunteering />
                <GalleryPreview />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Home;
