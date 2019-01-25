import React from 'react';

const Product = function(props){
    return(
        <div>
            {props.newInventory.img}
            {props.newInventory.name}
            {props.newInventory.price}
        </div>
    )
}

export default Product;