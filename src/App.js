import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';


const HatsPage = () => {
  return (
    <div>
      Hats Page
    </div>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop/" component={ShopePage} />
        <Route exact={true} path="/shop/hats" component={HatsPage} />
        <Route exact={true} path="/signin" component={SingInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
