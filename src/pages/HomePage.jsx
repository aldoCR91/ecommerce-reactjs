import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import ProductFeed from "../components/productFeed/ProductFeed";
import axios from "axios";
import LoadingBox from "../components/loadingBox/LoadingBox";
import MessageBox from "../components/messageBox/MessageBox";
//import data from './data';

function HomePage() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          <ProductFeed products={products} />
        )}
      </main>
    </div>
  );
}

export default HomePage;
