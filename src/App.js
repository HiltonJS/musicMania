import React from 'react';

import './App.scss';
import Navbar from './components/navbar/navbar.component';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import HipHop from './pages/HipHop/hiphop.component';
import RnB from './pages/RnB/rnb.component';
import FormPage from './pages/admin/admin';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hiphop" component={HipHop} />
        <Route exact path="/rnb" component={RnB} />
        <Route exact path="/admin" component={FormPage} />
      </Switch>
    </div>
  );
}

export default App;
