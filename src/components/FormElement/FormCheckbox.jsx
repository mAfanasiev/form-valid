import React from 'react';

const FormCheckbox = () => (
  <div className="form__element checkbox">
    <label htmlFor="termOfUse" className="checkbox__label">
      <input className="checkbox__checkbox" id="termOfUse" required="" name="termOfUse" type="checkbox" checked="" />
      <span className="checkbox__checkmark" />
      {'Соглашаюсь с'}
      <a href="#/" className="text-blue">правилами и условиями сервиса</a>
    </label>
  </div>
);

export default FormCheckbox;
