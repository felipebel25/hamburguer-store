import React from 'react';
import InitialState from '../initialState';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Productos - Hamburgruesas</title>
      </Helmet>
      <Products products={InitialState.products}></Products>
    </>
  );
};

export default Home;
