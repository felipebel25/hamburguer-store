import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Layout from '../components/Layout';
import Checkout from '../containers/Checkout';
import Success from '../containers/Success';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import about from '../containers/about';
import Sobre from '../containers/Sobre'
import Notfound from '../containers/Notfound';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const InitialState = useInitialState();
  const isEmpty = Object.keys(InitialState.state).length;
  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={InitialState}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={about} />
                <Route exact path="/ordenar" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/about" component={Sobre} />


                <Route
                  exact
                  path="/checkout/information"
                  component={Information}
                 />
                <Route
                  exact
                  path="/checkout/payment"
                  component={Payment}
                 />
                <Route
                  exact
                  path="/checkout/success"
                  component={Success}
                 />
                <Route component={Notfound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>cargando...</h1>
      )}
      ;
    </>
  );
};

export default App;
