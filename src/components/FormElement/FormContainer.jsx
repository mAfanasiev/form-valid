import React, { Component } from 'react';


export default class FormContainer extends Component {
  state = {
    valid: false,
  }

  render() {
    const { valid } = this.state;

    return (
      <div className="form form__container">
        <form className="form__sign-up">
          <h1 className="form__title">Регистрация в системе</h1>
        </form>
      </div>
    );
  }
}