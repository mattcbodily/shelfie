import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: [
        {
          name: 'Spidadidas',
          price: 100.00,
          imgurl: 'spida.png'
        },
        {
          name: 'King James',
          price: 250.00,
          imgurl: 'goat.png'
        },
        {
          name: 'Air Jordan',
          price: 250.00,
          imgurl: 'airjordan.png'
        },
        {
          name: 'Dames',
          price: 100.00,
          imgurl: 'weberstate.png'
        },
        {
          name: 'Goberts',
          price: 100.00,
          imgurl: 'stifletower.png'
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <Dashboard inventory = {this.state.inventory}/>
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
