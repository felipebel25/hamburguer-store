import React from 'react';
import { Helmet } from 'react-helmet';
import InitialState from '../initialState';
import Products from '../components/Products';

const Home = () => (
    <>
      <Helmet>
        <title>Productos - Hamburgruesas</title>
      </Helmet>
      <Products products={InitialState.products} />
    </>
  );

export default Home;
