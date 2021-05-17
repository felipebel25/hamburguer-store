import React,{useContext} from 'react';
import AppContext from '../context/AppContext'
import Product from './Product';
import '../styles/components/Products/Products.scss';

const Products = () => {
    const {products, addToCart} = useContext(AppContext)
    
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
