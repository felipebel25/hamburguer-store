import React from 'react';
import InitialState from '../initialState';
import Products from '../components/Products';
const Home = () => {
  return (
    <>
      <Products products={InitialState.products}></Products>
    </>
  );
};

export default Home;
