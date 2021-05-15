import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'
import '../styles/components/Header.scss';
import logo from '../assets/logo.png'


  const Header = () => {
  const {state } = useContext(AppContext)
  console.log(state.cart.length);
  
  const [activo , setActivo] = useState("menuppal")
  
  const handleClick = () =>{
    if(activo === "menuppal"){
      setActivo("menuppal is_active")
    }else{
      setActivo("menuppal")

    }

  }


  return (
    <header className="Header">
      <div className="hamburger" onClick={handleClick}>
        <div className="_layer -top" />
        <div className="_layer -mid" />
        <div className="_layer -bottom" />
      </div>
    <nav className={activo}>
      <ul>
        <li><a href="#">Opcion 1</a></li>
        <li><a href="#">Opcion 2</a></li>
        <li><a href="#">Opcion 3</a></li>
        <li><a href="#">Opcion 4</a></li>
      </ul>
    </nav>
    <div className="Header-container">

      <Link to="/">
        <img src={logo} alt="Logo.png" className="Header-container__image" />
      </Link>
    </div>

        <Link to="/ordenar">
      <h1 className="Header-title">Ordenar</h1>
        </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          
          <i className="fas fa-shopping-basket">  </i>
          
        </Link>
          {state.cart.length > 0 &&
           <div className="Header-alert">
             <p>{state.cart.length}  </p>
          </div> }
      </div>
    </header>
  );
};

export default Header;
