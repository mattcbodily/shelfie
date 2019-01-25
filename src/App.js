import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Dashboard inventory = {this.state.inventory}/>
        <Form getList = {this.componentDidMount}
              inventory = {this.state.inventory}/>
        <Header />
      </div>
    );
  }
}

export default App;
