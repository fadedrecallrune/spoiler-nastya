import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header';

import Home from './components/home/Home';
import Footer from './components/footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
