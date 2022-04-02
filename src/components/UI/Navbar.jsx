import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "./button/myButton";
import {AuthContext} from "../../context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const loqout = (e) => {
    e.preventDefault()
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar'>
      {isAuth && <MyButton onClick={loqout}>Выйти</MyButton> }
      <div className='navbar__link'>
        <Link className='navbar__link-to' to="/about">О сайте</Link>
        <Link className='navbar__link-to' to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;