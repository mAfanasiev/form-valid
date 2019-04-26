import React from 'react';
import { FormInput, FormButton, FormRedirect } from '../FormElement';

const LoginForm = () => (
  <div className="form form__container">
    <form>
      <h1 className="form__title">Вход в систему</h1>

      <FormInput id="email" label="Электронная почта" type="email" />
      <FormInput id="password" label="Пароль" type="password" />

      <FormButton label="Войти" />

      <FormRedirect label="Зарегистрироваться" url="/register" />
    </form>
  </div>
);

export default LoginForm;
