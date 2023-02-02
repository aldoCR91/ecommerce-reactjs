import React from 'react'
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import ProductFeed from "../components/productFeed/ProductFeed";
//import data from './data';

function Home() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed />
      </main>
    </div>
  )
}

export default Home