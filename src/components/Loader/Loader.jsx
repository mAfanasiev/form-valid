import React from 'react';
import icon from './loader.svg';

const Loader = () => (
  <div className="form__loader">
    <img src={icon} alt="loader" className="loader" />
  </div>
);

export default Loader;
