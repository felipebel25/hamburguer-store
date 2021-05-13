import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import about from '../containers/about'
import Home from '../containers/Home';
import Layout from '../components/Layout';
import Checkout from '../containers/Checkout';
import Success from '../containers/Success';
import Information from '../containers/Information';
import Payment from '../containers/Payment';

import Notfound from '../containers/Notfound';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState'

const App = () => {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={about}></Route>
              <Route exact path="/ordenar" component={Home}></Route>

              <Route exact path="/checkout" component={Checkout}></Route>

              <Route
                exact
                path="/checkout/information"
                component={Information}
              ></Route>
              <Route exact path="/checkout/payment" component={Payment}></Route>
              <Route exact path="/checkout/success" component={Success}></Route>
              <Route component={Notfound}></Route>
            </Switch>
          </Layout>
        </BrowserRouter>
    </AppContext.Provider>
 
  );
};

export default App;
