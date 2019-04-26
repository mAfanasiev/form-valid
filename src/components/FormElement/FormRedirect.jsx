import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const FormRedirect = ({ label, url }) => (
  <div className="popup__additional">
    <NavLink className="popup__link" to={url}>{label}</NavLink>
  </div>
);

FormRedirect.propTypes = propTypes;

export default FormRedirect;
