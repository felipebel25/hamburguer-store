import React,{ useRef,  useContext } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import AppContext from '../context/AppContext'

import '../styles/components/Information.scss';

function Information() {  
  const {state,addToBuyer} = useContext(AppContext)
  const { cart } = state; 
  const history = useHistory()
  const form = useRef(null);

  const handleSubmit = () =>{
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    history.push('./checkout/payment')
  }

  return (
    <>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h1>information contacto: </h1>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre Completo" name="name" />
              <input
                type="text"
                placeholder="Correo Electronico"
                name="email"
              />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Apto" name="name" />
              <input type="text" placeholder="Ciudad " name="city" />
              <input type="text" placeholder="Pais" name="Country" />
              <input type="text" placeholder="Estado " name="State" />
              <input type="text" placeholder="Codigo  postal" name="namcp" />
              <input type="text" placeholder="telefono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">

            <Link to="/checkout">
              <button className="Information-back">regresar</button>
            </Link>
            
            
            <Link to="/checkout/payment">


              <button className="Information-next" onClick={handleSubmit}>Pagar</button>

            </Link>
          </div>

            <div className="Information-sidebar">
              <h3>pedido:</h3>
          {cart.map((item) => (
              <div className="Information-item" key={item.id}>
                <div className="Information-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
              </div>

)) }
</div>
        </div>
      </div>
    </>
  );
}

export default Information;
