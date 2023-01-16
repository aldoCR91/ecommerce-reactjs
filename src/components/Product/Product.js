import React from 'react'

function Product({id, title, price, description, category, image}) {
  return (
    <div>
        <p>{category}</p>
        <img src={image} alt="title" width={200} height={200} objectFit="contain" />
    </div>
  )
}

export default Product