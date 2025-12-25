import './MovieCard.css';

function MovieCard({ 
  title, 
  poster, 
  rating,
  year,
  genre,
  variant = 'portrait',  // 'portrait' (9:16) or 'landscape' (16:9)
  size = 'medium',
  onClick,
  showInfo = true,
  showEpisodeBadge = false
}) {
  return (
    <div className={`movie-card movie-card--${variant} movie-card--${size}`} onClick={onClick}>
      <div className="movie-card__poster">
        <img 
          src={poster || 'https://via.placeholder.com/200x300/1a1a2e/ffffff?text=No+Image'} 
          alt={title}
          loading="lazy"
        />
        <div className="movie-card__overlay">
          <button className="movie-card__play">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
        {showEpisodeBadge && (
          <div className="movie-card__badge">Episode Baru</div>
        )}
        {rating && (
          <div className="movie-card__rating">
            <svg viewBox="0 0 24 24" fill="currentColor" className="movie-card__star">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>{rating}</span>
          </div>
        )}
      </div>
      {showInfo && (
        <div className="movie-card__info">
          <h3 className="movie-card__title">{title}</h3>
          {(year || genre) && (
            <p className="movie-card__meta">
              {year && <span>{year}</span>}
              {year && genre && <span className="movie-card__dot">•</span>}
              {genre && <span>{genre}</span>}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieCard;
