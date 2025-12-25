import { Button } from '../common';
import './Hero.css';

function Hero({ 
  title, 
  description, 
  backdrop,
  rating,
  year,
  genre,
  ageRating = '18+',
  onPlay,
  onMoreInfo,
  onVolumeToggle
}) {
  return (
    <section className="hero">
      {/* Background Image */}
      <img 
        src={backdrop} 
        alt={title} 
        className="hero__bg"
      />
      
      <div className="hero__overlay"></div>
      
      {/* Navigation arrows */}
      <button className="hero__nav hero__nav--left" aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button className="hero__nav hero__nav--right" aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      
      {/* Volume control */}
      <button className="hero__volume" onClick={onVolumeToggle} aria-label="Toggle volume">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5L6 9H2v6h4l5 4V5z"/>
          <line x1="23" y1="9" x2="17" y2="15"/>
          <line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
      </button>
      
      <div className="hero__content container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}</p>
        
        {/* Hero buttons row with background */}
        <div className="hero__actions">
          <Button 
            variant="primary" 
            size="medium"
            onClick={onPlay}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            }
          >
            Mulai
          </Button>
          <Button 
            variant="secondary" 
            size="medium"
            onClick={onMoreInfo}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            }
          >
            Selengkapnya
          </Button>
          {ageRating && (
            <span className="hero__age-rating">{ageRating}</span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
