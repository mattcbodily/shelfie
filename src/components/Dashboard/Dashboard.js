import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(id){
        axios.delete(`/api/product/${id}`)
        .then(response => {
            this.props.getList(response.data)
        })
    }

    render(){
        const mappedInventory = this.props.inventory.map((inventoryObj) => {
            console.log(inventoryObj)
            return(
                <Product key = {inventoryObj.index} 
                         newInventory = {inventoryObj}
                         id = {inventoryObj.id}
                         delete = {this.handleDelete}/>
            )
        })
        return(
            <div className = "Listboxes">
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard;