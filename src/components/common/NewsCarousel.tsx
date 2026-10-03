import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { newsItems } from "../../data/news";

const AUTOPLAY_INTERVAL = 4500;

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const timerRef = useRef<number | null>(null);

  const length = newsItems.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const previous = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      next();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchDelta(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentX = e.touches[0].clientX;
    setTouchDelta(currentX - touchStart);
  };

  const handleTouchEnd = () => {
    if (touchStart === null) return;
    const minSwipeDistance = 45;
    if (touchDelta < -minSwipeDistance) {
      next();
    } else if (touchDelta > minSwipeDistance) {
      previous();
    }
    setTouchStart(null);
    setTouchDelta(0);
  };

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      previous();
    } else if (e.key === "ArrowRight") {
      next();
    }
  };

  return (
    <article
      className="news-carousel reveal reveal-right"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="News Slideshow"
      aria-roledescription="carousel"
    >
      <div className="news-header">
        <div className="news-header-left">
          <span className="news-live-dot" aria-hidden="true" />
          <h3>Latest News</h3>
        </div>
        <div className="news-header-right">
          <button
            className="carousel-pause-btn"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            title={isPaused ? "Resume autoplay" : "Pause autoplay"}
          >
            {isPaused ? <Play size={12} /> : <Pause size={12} />}
          </button>
          <span className="news-counter">
            {current + 1} / {length}
          </span>
        </div>
      </div>

      <div
        className="news-slider-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="news-slider-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {newsItems.map((item, index) => {
            const isActive = index === current;
            return (
              <div
                className={`news-slide ${isActive ? "active" : ""}`}
                key={index}
                aria-hidden={!isActive}
              >
                <div className="news-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="news-image-gradient" />
                  <span className="news-badge">{item.date}</span>
                </div>

                <div className="news-content">
                  <h4 className="news-slide-title">{item.title}</h4>
                  <p className="news-slide-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Arrows */}
        <button
          className="carousel-arrow left"
          onClick={previous}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} className="arrow-icon" />
        </button>

        <button
          className="carousel-arrow right"
          onClick={next}
          aria-label="Next slide"
        >
          <ChevronRight size={18} className="arrow-icon" />
        </button>
      </div>

      {/* Slide Progress Bar (Autoplay timer indicator) */}
      <div className="carousel-progress-track" aria-hidden="true">
        <div
          key={`${current}-${isPaused}`}
          className={`carousel-progress-bar ${isPaused ? "paused" : "running"}`}
          style={{
            animationDuration: `${AUTOPLAY_INTERVAL}ms`,
          }}
        />
      </div>

      {/* Animated Indicators */}
      <div className="carousel-dots" role="tablist" aria-label="Slides">
        {newsItems.map((item, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === current}
            className={`carousel-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}: ${item.title}`}
          />
        ))}
      </div>
    </article>
  );
}
