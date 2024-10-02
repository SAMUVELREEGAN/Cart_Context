import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { cartContext } from './App';

const ProductList = () => {
    const { datas ,cart ,setCart} = useContext(cartContext);
    const { id } = useParams();

    const product = datas.find(item => item.id === parseInt(id));

    const addtocart =()=>{
      setCart([...cart,product])
    }

    return (
        <div>
            {product ? (
                <>
                    <h2>{product.name}</h2>
                    <img src={product.pic} alt={product.name} style={{ width: '200px' }} />
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <button onClick={addtocart}>Add to cart</button>
                </>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default ProductList;
