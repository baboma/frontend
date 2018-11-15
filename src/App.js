import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
//import Article from './components/Article';
//import Aside from './components/Aside';
import { connect } from 'react-redux';

class App extends Component {

  

  render() {
    return (
      <div id="bloc_page">
        <Header />
		  </div>
    );
  }
}

export default connect()(App);
