import './Card.css';

function Card({ 
  children, 
  variant = 'default',
  padding = 'medium',
  className = '' 
}) {
  const classNames = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Card;
