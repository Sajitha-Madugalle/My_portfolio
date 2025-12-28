document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden'); // Add initial hidden class
        observer.observe(section);
    });

    // Gallery Preview Logic (Home Page)
    const collageContainer = document.getElementById('gallery-bg-collage');

    // Only run if the element exists (i.e. on home page) and data is loaded
    if (collageContainer && typeof GALLERY_IMAGES !== 'undefined' && GALLERY_IMAGES.length > 0) {

        // Pick up to 10 random images or first 10
        const previewImages = GALLERY_IMAGES.slice(0, 10);

        previewImages.forEach(imgName => {
            const img = document.createElement('img');
            img.src = `gallery/${imgName}`;
            img.className = 'gallery-bg-img';
            img.alt = 'Gallery Preview';
            collageContainer.appendChild(img);
        });
    }

    // Sticky Header visual effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.4)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
            header.style.padding = '15px 0';
        }
    });

    // Projects See More/Less Functionality
    const seeMoreBtn = document.getElementById('see-more-btn');
    const seeLessBtn = document.getElementById('see-less-btn');
    const hiddenProjects = document.querySelectorAll('.project-hidden');

    if (seeMoreBtn && seeLessBtn) {
        seeMoreBtn.addEventListener('click', () => {
            hiddenProjects.forEach(project => {
                project.style.display = 'block';
                // Fade-in animation
                project.style.opacity = '0';
                setTimeout(() => {
                    project.style.opacity = '1';
                }, 10);
            });
            seeMoreBtn.style.display = 'none';
            seeLessBtn.style.display = 'inline-block';
        });

        seeLessBtn.addEventListener('click', () => {
            hiddenProjects.forEach(project => {
                project.style.display = 'none';
            });
            seeMoreBtn.style.display = 'inline-block';
            seeLessBtn.style.display = 'none';

            // Scroll back to projects section or button container to prevent being lost
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
