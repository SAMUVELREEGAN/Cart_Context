import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cartContext } from './App';

const Cart = () => {
    const {cart} = useContext(cartContext)
  return (
    <div Style={"display:flex"}>
{cart.map((product)=>(    <div key={product.id}>
        
<Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={product.pic}  />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title>{product.price}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
))}
   
    <h2>Total Amount: </h2>
    </div>
  )
}

export default Cart