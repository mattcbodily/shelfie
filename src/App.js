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
        <nav>
          <Header />
          <Dashboard id = {this.state.inventory.id}
                   inventory = {this.state.inventory}
                   getList = {this.componentDidMount}/>
          <Form getList = {this.componentDidMount}/>
        </nav>
      </div>
    );
  }
}

export default App;
