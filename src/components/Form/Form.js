import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleNameInput(val){
        this.setState({name: val})
    }

    handlePriceInput(val){
        this.setState({price: val})
    }

    handleImgInput(val){
        this.setState({img: val})
    }

    handleClearInput(){
        this.setState({name: ''})
        this.setState({price: 0})
        this.setState({img: ''})
    }

    handleCreateInventory(){
        const newInv = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        axios.post('/api/product', newInv)
        .then(response => {
            this.props.getList(response.data)
        })
    }

    render(){
        return(
            <div className = "Formbox">
                <p>Image URL:</p>
                <input onChange = {(e) => this.handleImgInput(e.target.value)}
                       value = {this.state.img}/>
                <p>Product Name:</p>
                <input onChange = {(e) => this.handleNameInput(e.target.value)}
                       value = {this.state.name}/>
                <p>Price:</p>
                <input onChange = {(e) => this.handlePriceInput(e.target.value)}
                       value = {this.state.price}/>
                <button onClick = {() => this.handleClearInput()}>Cancel</button>
                <button onClick = {() => this.handleCreateInventory()}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;