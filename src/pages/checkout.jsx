import React from 'react'
import Header from '../components/header/Header'

function Checkout() {
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
          <h1 className='text-3xl border-b pd-4'>Your shopping basket</h1>
          
        </div>
      </div>

      </main>
       
    </div>
  )
}

export default Checkout