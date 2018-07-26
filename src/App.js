import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header';
import HeaderT from './components/header/HeaderT';

import Home from './components/home/Home';
import Footer from './components/footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="">
        {/* <div style={{height:'100vh', width:'100vw'}} className=' '> */}
         {/* <Header /> */}
        {/* </div> */}
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
