import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
};

const FormButton = ({ label }) => (
  <button type="submit" className="form__submit">{label}</button>
);

FormButton.propTypes = propTypes;

export default FormButton;
