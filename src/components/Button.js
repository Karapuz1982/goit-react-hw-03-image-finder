
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled }) => {
  return (
    <button type="button" className="Button" onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
