import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Map/>
      <Footer/>
      </div>
    );
  }
}
export default App;