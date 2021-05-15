import React,{useContext} from 'react';
import AppContext  from '../context/AppContext'
import Map from '../components/Map'

import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.scss'


const  Success = () => {
  const {state} = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address)
  console.log(buyer);
  return (
    <div>
      <div className="Success">
        <div className="Success-content">
          <h2>Gracias por tu compra</h2>
          <span>{`tu pedido llegara pronto ${buyer[0].name} `}</span>
          <div className="Success-map">
            
            <Map
              data={location}
            ></Map>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Success;
