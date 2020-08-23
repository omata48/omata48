import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav';
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/test").then(response => {
      console.log(response.data)
    })
  })
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={['/','/home']}>
            <Home />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
