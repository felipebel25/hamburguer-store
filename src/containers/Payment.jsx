import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';

import {PayPalButton} from 'react-paypal-button';
import AppContext  from '../context/AppContext'
import handelSuma from '../utils/index'
import '../styles/components/Payment.css'

const Payment= () => {
  const {state,addNewOrder} = useContext(AppContext);
  const {cart, buyer  } = state;
  const paypalOptions = {
    clientId:  'Af5pHQZSoGK4Jqh57TGOWnVrFGPtFRl3X2LTaxmzVRLQgv3YFf9pOrMSbggX4xtb8UdOTTogGnmpgZ73',
    intent: 'capture',
    currency: 'USD'
  }
  const history = useHistory();
  const buttonStyles = {
    layout : 'vertical',
    shape:'rect'
  }
  const handlePaymentSuccess = (data) =>{
    console.log(data)

    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
        
      };

      addNewOrder(newOrder);
      history.push('/checkout/success')

    }
  }
  return (
    <>
    <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map((item)=>(
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
              <h4>{item.price}</h4>
              <span>
                $
                {' '}
                { item.price}
              </span>
            </div>
            </div>
            
          ))}
          <div className="Payment-button">
              <PayPalButton
                paypalOptions={paypalOptions}
                buttonStyles={buttonStyles}
                amount={handelSuma(cart)}
                onPaymentStart={()=> console.log('start payment')}
                onPaymentSuccess={data => handlePaymentSuccess(data)}
                onPaymentError={error => console.log(error)}
                onPaymentCancel={data => console.log(data)}
              >

              </PayPalButton>
          </div>

        </div>
    </div>
    </>
  );
}

export default Payment;