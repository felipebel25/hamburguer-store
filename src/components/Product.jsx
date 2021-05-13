import React from 'react';
const Product = ({ product, handlePay }) => {
  return (
    <div>
      <div className="Products-item wrapper">
        <img src={product.image} alt={product.title} />
        <div className="Products-item-info">
          <h2>{product.title}</h2>
          <span>$ {product.price}</span>
          <p>{product.description}</p>
        </div>
        <button type="button" onClick={()=> handlePay(product)}> Comprar </button>
      </div>
    </div>
  );
};

export default Product;
