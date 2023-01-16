import React from 'react';
import {staticData} from '../../data';
import Product from '../Product/Product';



function ProductFeed() {
  const products = staticData;
  return (
    <div>
       <p>ProductFeed</p>
       {products.map((product) => (
          <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
       ))}
       
    </div>
  )
}

export default ProductFeed