import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component'
import ShopePage from './pages/shop/shop.component'

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
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop/" component={ShopePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
