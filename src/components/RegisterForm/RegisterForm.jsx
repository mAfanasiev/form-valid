import React, { Component } from 'react';
import {
  FormInput,
  FormButton,
  FormRedirect,
  FormCheckbox,
} from '../FormElement';
import Loader from '../Loader';

export default class RegisterForm extends Component {
  state = {
    valid: false,
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { valid } = this.setState;

    this.setState({
      valid: !valid,
    });

    setTimeout(() => {
      this.setState((prevState) => {
        const newState = !prevState.valid;

        return {
          valid: newState,
        };
      });
    }, 1000);
  }

  render() {
    const { valid } = this.state;

    return (
      <div className="form form__container">
        <form onSubmit={this.onSubmit} className="form__sign-up">
          <h1 className="form__title">Регистрация в системе</h1>

          <FormInput id="email" label="Электронная почта" type="email" value="ya@ya.ru" />
          <FormInput id="password" label="Пароль" type="password" />
          <FormInput id="repeatPassword" label="Пароль" type="password" />

          <FormCheckbox />

          <FormButton label="Зарегистрироваться" />

          <FormRedirect label="Войти" valid={valid} url="/login" />

        </form>

        {valid ? <Loader /> : null}
      </div>
    );
  }
}
