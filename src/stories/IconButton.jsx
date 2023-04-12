import React from 'react';
import PropTypes from 'prop-types';
import './iconButton.css';

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({ primary, backgroundColor, size, label, icon, ...props }) => {
  const mode = primary ? 'storybook-icon-button--primary' : 'storybook-icon-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-icon-button', `storybook-icon-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <i className="material-icons">{icon}</i>
    </button>
  );
};

IconButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
  * What icon to use
  */
  icon: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
