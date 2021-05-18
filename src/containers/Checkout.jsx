import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

import '../styles/components/Checkout/Checkout.scss';

function Checkout() {
  const { state, removeCart } = useContext(AppContext);
  const { cart } = state;

  const handelSuma = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handleRemove = (product, index) => () => {
    removeCart(product, index);
    console.log(cart[index]);
  };
  return (
    <>
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>Lista de pedidos: </h3>
          {cart.map((item, index) => (
            <div className="Checkout-item" key={index}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span> ${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item, index)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))}
        </div>
        {cart.length === 0 && (
          <div className="Checkout-sidebar">
            <h1>sin pedidos :C Ordena algo pls</h1>
            <Link to="/ordenar">
              <h1>Ir a productos</h1>
            </Link>
          </div>
        )}
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total $ ${handelSuma()} `}</h3>
            <Link to="/checkout/information">
              <button type="button"> continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
