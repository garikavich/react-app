import React, {useContext} from 'react';
import MyInput from "../components/UI/input/myInput";
import MyButton from "../components/UI/button/myButton";
import {AuthContext} from "../context";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder={'Введите логин'}/>
        <MyInput type="password" placeholder={'Введите пароль'}/>
        <MyButton>Отправить</MyButton>
        <div>Просто нажать "Отправить"</div>
      </form>
    </div>
  );
};

export default Login;