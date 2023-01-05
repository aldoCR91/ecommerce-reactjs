import React from 'react'
import logo from './logo.png'
import { 
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className='flex items-center bg-slate-900 p-1 flex-grow py-2'>
        <div className='flex items-center flex-grow sm:flex-grow-0 cursor-pointer'>
          <img 
            src={logo} 
            alt="logo" 
            width={35} 
            height={4}
            objectFit="contain"
            className='' 
          />
          <span className='px-1  text-white'>Soul Art</span>
        </div>
        {/* Search */}
        <div>
          <input type="text" />
          <SearchIcon className="h-6 w-6" />
        </div>
      </div>
      <div></div>
    </header>
  )
}

export default Header