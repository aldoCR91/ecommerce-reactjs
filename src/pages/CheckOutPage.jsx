import React, { useState } from 'react'
import CheckOutProduct from '../components/checkOutProduct/CheckOutProduct';
import Header from '../components/header/Header'

function CheckOutPage() {

  const [items, setItems] = useState([]);

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>
      {/*Left */}
      <div className='flex-grow m-5 shadow-sm'>
        <img 
          src="https://links.papareact.com/ikj"
          alt="add banner"
          width={1020}
          height={250}
          objectFit="contain"
        />

        <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pd-4'>
            { items.length === 0
              ? "Tu carrito está vacio"
              : "Tu carrito de compras"
            }
          </h1>

          {items.map((item, i) => (
            <CheckOutProduct setItems={setItems} item={item} key={i}/>
          ))}
          
          
        </div>
      </div>

      </main>
       
    </div>
  )
}

export default CheckOutPage;