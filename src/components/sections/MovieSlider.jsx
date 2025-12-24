import { useRef } from 'react';
import { MovieCard } from '../common';
import './MovieSlider.css';

function MovieSlider({ title, movies }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="movie-slider">
      <div className="movie-slider__header container">
        <h2 className="movie-slider__title">{title}</h2>
        <div className="movie-slider__nav">
          <button 
            className="movie-slider__nav-btn" 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            className="movie-slider__nav-btn" 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="movie-slider__container" ref={sliderRef}>
        <div className="movie-slider__track container">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id || index}
              title={movie.title}
              poster={movie.poster}
              rating={movie.rating}
              year={movie.year}
              genre={movie.genre}
              size="medium"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSlider;
