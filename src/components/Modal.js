// import React from 'react';
// import PropTypes from 'prop-types';

// const Modal = ({ src, alt, onClose }) => {
//   return (
//     <div className="Overlay" onClick={onClose}>
//       <div className="Modal">
//         <img src={src} alt={alt} />
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default Modal;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
