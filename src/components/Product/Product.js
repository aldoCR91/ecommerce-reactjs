import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Currency from 'react-currency-formatter'


function Product({id, title, price, description, category, image, rating}) {

  const hasPrime = true;

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <img className='mx-auto' src={image} alt="title" width={200} height={200} objectFit="contain" />
        <h4 className='mt-4' >{title}</h4>

        <div className='flex'>
          {
            Array(Math.round(rating.rate))
            .fill()
            .map((_, i) => (
              <StarIcon className='h-5 text-yellow-600' />
            ))
          }
        </div>

        <p className='text-xs my-2 line-clamp-2'>{ description }</p>

        <div className='mb-5'>
          <Currency quantity={price} currency="CRC"/>
        </div>

        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src='https://links.papareact.com/fdw' alt='logo prime' />
            <p className='text-xs text-gray-500'>Free next-day Delivery</p>
          </div>
        )}

        <button className='mt-auto button'>Add to Basket</button>

    </div>
  )
}

export default Product;