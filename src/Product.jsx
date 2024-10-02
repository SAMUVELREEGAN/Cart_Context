import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cartContext } from './App';
import { Link } from 'react-router-dom';


const Product = ({product }) => {
    const{cart,setCart} = useContext(cartContext)
    const addCart = ()=>{
        setCart([...cart,product])
    }
    const removeCart = ()=>{
        setCart(cart.filter((e)=>e.id !== product.id))
    }
    console.log(cart)
  return (
    <div>
     <Link to={`/${product.id}`}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pic} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title>{product.price}</Card.Title>
      
       {
        cart.includes(product)?(<Button onClick={removeCart}>Remove from Cart</Button>) : (<Button onClick={addCart}>Add To Cart</Button>)
       }
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Product