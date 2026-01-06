import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import galleryData from '../data/galleryData.json';

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (galleryData && galleryData.length > 0) {
            setImages(galleryData);
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <section className="container gallery-page-header">
                    <h1 className="section-title">Life Outside Engineering</h1>
                    <p
                        className="section-desc"
                        style={{
                            textAlign: 'center',
                            maxWidth: '600px',
                            margin: '0 auto 40px',
                            color: 'var(--text-muted)'
                        }}
                    >
                        A collection of moments, memories, and snapshots from my journey.
                    </p>

                    <div id="gallery-container" className="gallery-grid">
                        {images.length > 0 ? (
                            images.map((imgName, index) => (
                                <div
                                    key={index}
                                    className="gallery-item"
                                    style={{
                                        animationDelay: `${index * 50}ms`
                                    }}
                                >
                                    <img
                                        src={`/gallery/${imgName}`}
                                        alt="Gallery Image"
                                        loading="lazy"
                                    />
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center', width: '100%' }}>
                                No images found. Please run "python update_gallery.py" to generate the gallery.
                            </p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
        .gallery-page-header {
          padding: 100px 0 50px;
          text-align: center;
        }

        .gallery-grid {
          column-count: 3;
          column-gap: 15px;
        }

        .gallery-item {
          width: 100%;
          margin-bottom: 15px;
          break-inside: avoid;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }

        .gallery-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @media (max-width: 900px) {
          .gallery-grid {
            column-count: 2;
          }
        }

        @media (max-width: 600px) {
          .gallery-grid {
            column-count: 1;
          }
        }
      `}</style>
        </>
    );
}

export default Gallery;
