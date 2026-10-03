import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { newsItems } from "../../data/news";

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % newsItems.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const item = newsItems[current];

  const next = () => {
    setCurrent((current + 1) % newsItems.length);
  };

  const previous = () => {
    setCurrent(current === 0 ? newsItems.length - 1 : current - 1);
  };

  return (
    <article className="news-carousel">
      <div className="news-header">
        <h3>Latest News</h3>
        <span>
          {current + 1} / {newsItems.length}
        </span>
      </div>

      <div className="news-image-wrap">
        <img src={item.image} alt="" />

        <button
          className="carousel-arrow left"
          onClick={previous}
          aria-label="Previous news item"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          className="carousel-arrow right"
          onClick={next}
          aria-label="Next news item"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="news-content">
        <span>{item.date}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>

      <div className="carousel-dots">
        {newsItems.map((_, index) => (
          <button
            key={index}
            className={index === current ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to news item ${index + 1}`}
          />
        ))}
      </div>
    </article>
  );
}
