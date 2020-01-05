import React, { useState, useEffect } from 'react';
import axios from 'axios'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Dolls from './components/dolls/Dolls'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dolls">
            <Dolls />
          </Route>
          <Route path="/">
            <div>this is home</div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

