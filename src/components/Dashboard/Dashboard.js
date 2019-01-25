import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render(){
        const mappedInventory = this.props.inventory.map((inventoryObj) => {
            return(
                <Product key = {inventoryObj.index} 
                         newInventory = {inventoryObj}
                         index = {inventoryObj.index}/>
            )
        })
        return(
            <div>
                <h3>Dashboard</h3>
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard;