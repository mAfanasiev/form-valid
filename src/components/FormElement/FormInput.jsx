import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
};

const defaultProps = {
  value: '',
};

const FormInput = ({
  id,
  label,
  type,
  value,
}) => (
  <div className="form__element">
    <label htmlFor={id} className="form__label">
      {label}
      <input className="form__input " id={id} type={type} name={id} value={value} />
    </label>
  </div>
);

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
