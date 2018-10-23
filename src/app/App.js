import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <div className="row">
          <Header />
          <SideBar />
        </div>
          
        
      </div>
    );
  }
}

export default App;
