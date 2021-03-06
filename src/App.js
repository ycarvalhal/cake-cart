import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
