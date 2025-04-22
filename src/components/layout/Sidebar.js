import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ title, content, isVisible, onClose }) => {
  return (
    <div
      className={`offcanvas offcanvas-start ${isVisible ? 'show' : ''}`}
      tabIndex="-1"
      style={{ visibility: isVisible ? 'visible' : 'hidden', backgroundColor: '#f8f9fa' }}
      // onClick={onClose}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">{title}</h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
      <div className="offcanvas-body">
        {content}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired, // Title of the sidebar
  content: PropTypes.node.isRequired, // Content to display inside the sidebar
  isVisible: PropTypes.bool.isRequired, // Controls visibility of the sidebar
  onClose: PropTypes.func.isRequired, // Callback to close the sidebar
};

export default Sidebar;
