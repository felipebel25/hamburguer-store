import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'
import '../styles/components/Header.css';

const Header = () => {
  const {state } = useContext(AppContext)


  console.log(state.cart.length)
  return (
    <header className="Header">
        <Link to="/">
      <h1 className="Header-title">platziconf merch</h1>
        </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
          {state.cart.length > 0 &&
           <div className="Header-alert">
             <h2>{state.cart.length} </h2>
          </div> }
      </div>
    </header>
  );
};

export default Header;
