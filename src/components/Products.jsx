import React,{useContext} from 'react';
import AppContext from '../context/AppContext'
import Product from './Product';
import '../styles/components/Products.scss';

const Products = () => {
    const {state, addToCart} = useContext(AppContext)
    const { products } = state;
    const handlePay = ( product ) =>{
      addToCart(product)
    }
  return (
    <div className="Products">
      <div className="Products-items">
       {products.map(product =>(
         <Product key={product.id} product={product} handlePay={handlePay}  ></Product>
       ))}
       
      </div>
    </div>
  );
};

export default Products;
