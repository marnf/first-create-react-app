import React from 'react';
import"./Product.css"
import { addToData, removeToData } from '../../utilities/fakedb';

const Product = (props) => {

    const {name,  price , id}= props.product

    const addToCart = (id)=>{
        addToData(id );   
    }

    const removeToCart = (id)=>{
        removeToData(id);

    }

    return (
        <div className='product'>
    
            <h2> name:{name}</h2>
            <h2>price :{price}</h2>
            <h2>id :{id}</h2>
            <button onClick={()=>addToCart(id)} >add</button>
            <button onClick={()=>removeToCart(id)} >remove</button>
        </div>
    );
};

export default Product;