import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import galleryData from '../data/galleryData.json';

function GalleryPreview() {
    const [previewImages, setPreviewImages] = useState([]);

    useEffect(() => {
        // Load first 10 images for preview
        if (galleryData && galleryData.length > 0) {
            setPreviewImages(galleryData.slice(0, 10));
        }
    }, []);

    return (
        <section id="gallery-preview" className="section">
            <div className="container">
                <Link to="/gallery" className="gallery-preview-box">
                    {/* Background Collage */}
                    <div className="gallery-bg-collage" id="gallery-bg-collage">
                        {previewImages.map((imgName, index) => (
                            <img
                                key={index}
                                src={`/gallery/${imgName}`}
                                className="gallery-bg-img"
                                alt="Gallery Preview"
                            />
                        ))}
                    </div>

                    <div className="gallery-overlay">
                        <h2>Life Outside Engineering</h2>
                        <span className="btn primary">See Gallery</span>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default GalleryPreview;
