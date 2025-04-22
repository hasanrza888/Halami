import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/button.css'; // Import custom styles for the button

const Button = ({
  label,
  onClick = () => {}, // Default no-op function
  variant = 'primary', // Default variant
  size = '', // Default size (medium)
  disabled = false, // Enabled by default
  type = 'button', // Default button type
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''}`;

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // Text displayed on the button
  onClick: PropTypes.func, // Function to call when the button is clicked
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']), // Bootstrap variants
  size: PropTypes.oneOf(['sm', 'lg', '']), // Bootstrap sizes: 'sm', 'lg', or default
  disabled: PropTypes.bool, // Disable button
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // HTML button type
};

export default Button;
