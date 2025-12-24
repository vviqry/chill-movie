import './Input.css';

function Input({
  label,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  error,
  icon,
  required = false,
  disabled = false,
  className = ''
}) {
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={name} className="input-field__label">
          {label}
          {required && <span className="input-field__required">*</span>}
        </label>
      )}
      <div className="input-field__wrapper">
        {icon && <span className="input-field__icon">{icon}</span>}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`input-field__input ${icon ? 'input-field__input--with-icon' : ''}`}
        />
      </div>
      {error && <span className="input-field__error">{error}</span>}
    </div>
  );
}

export default Input;
