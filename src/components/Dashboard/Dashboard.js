import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <h3>Dashboard</h3>
                <Product />
            </div>
        )
    }
}

export default Dashboard;