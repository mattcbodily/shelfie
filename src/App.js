import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import routes from './routes';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount(){
    this.getData()
  }
  
  getData(){
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
                   getList = {this.getData}/>
          <Form getList = {this.getData}/>
        </nav>
        {/* { routes } */}
      </div>
    );
  }
}

export default App;
