import { Button } from '../common';
import './Hero.css';

function Hero({ 
  title, 
  description, 
  backdrop,
  rating,
  year,
  genre,
  onPlay,
  onMoreInfo
}) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className="hero__overlay"></div>
      <div className="hero__content container">
        <div className="hero__meta">
          {rating && (
            <span className="hero__rating">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {rating}
            </span>
          )}
          {year && <span className="hero__year">{year}</span>}
          {genre && <span className="hero__genre">{genre}</span>}
        </div>
        
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}</p>
        
        <div className="hero__actions">
          <Button 
            variant="primary" 
            size="large"
            onClick={onPlay}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            }
          >
            Mulai Menonton
          </Button>
          <Button 
            variant="secondary" 
            size="large"
            onClick={onMoreInfo}
          >
            Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
