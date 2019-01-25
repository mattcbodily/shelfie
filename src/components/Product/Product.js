import React from 'react';

const Product = function(props){
    return(
        <div className = "Dashboardbox">
            <div className = "Minidashbox">
                <img src = {props.newInventory.img} alt = 'Shoes'></img>
            </div>
            <div className = "Minidashbox">
                <p>{props.newInventory.name}</p>
                <p>${props.newInventory.price}</p>
                <button onClick = {(id) => props.delete(id)}>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default Product;