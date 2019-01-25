import React from 'react';

const Product = function(props){
    return(
        <div className = "Dashboardbox">
            <p>{props.newInventory.img}</p>
            <p>{props.newInventory.name}</p>
            <p>{props.newInventory.price}</p>
            <button onClick = {(id) => props.delete(id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Product;