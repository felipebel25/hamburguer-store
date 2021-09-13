import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header/Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
  const { state } = useContext(AppContext);

  const [activo, setActivo] = useState('menuppal');

  const handleClick = () => {
    if (activo === 'menuppal') {
      setActivo('menuppal is_active');
    } else {
      setActivo('menuppal');
    }
  };

  return (
    <header className="Header">
      <div className="hamburger" onClick={handleClick} >
        <div className="_layer -top" />
        <div className="_layer -mid" />
        <div className="_layer -bottom" />
      </div>




      <nav className={activo}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ordenar">Ordenar</Link>
          </li>
          <li>
            <Link to="/checkout">Carrito</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
        </ul>
      </nav>


      <div className="Header-container">
        <Link to="/">
          <img src={logo} alt="Logo.png" className="Header-container__image" />
        </Link>
      </div>

      <Link to="/about">
        <h1 className="Header-title">Sobre nosotros</h1>
      </Link>

      <Link to="/ordenar">
        <h1 className="Header-title">Ordenar</h1>
      </Link>


      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"> </i>
        </Link>
        {state.cart.length > 0 && (
          <div className="Header-alert">
            <p>{state.cart.length} </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
