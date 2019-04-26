import React from 'react';
import {
  FormInput,
  FormButton,
  FormRedirect,
  FormCheckbox,
} from '../FormElement';

const RegisterForm = () => (
  <div className="form form__container">
    <form className="form__sign-up">
      <h1 className="form__title">Регистрация в системе</h1>

      <FormInput id="email" label="Электронная почта" type="email" value="ya@ya.ru" />
      <FormInput id="password" label="Пароль" type="password" />
      <FormInput id="repeatPassword" label="Пароль" type="password" />

      <FormCheckbox />

      <FormButton label="Зарегистрироваться" />

      <FormRedirect label="Войти" url="/login" />
    </form>
  </div>
);

export default RegisterForm;
