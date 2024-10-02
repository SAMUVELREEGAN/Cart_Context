import React, { useState } from 'react'
import data from './data/AllData'
import Product from './Product'

const Home = () => {
    console.log(data)
    const [products] = useState(data)
  return (
    <div  Style={"display:flex; flex-wrap: wrap;"}>
        {
            products.map((product)=>(
            <div>
            <Product key={product.id} product={product} />
            </div>
            ))
        }
    </div>
  )
}

export default Home