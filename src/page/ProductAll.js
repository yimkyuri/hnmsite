import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async() => {
    let url =`https://my-json-server.typicode.com/yimkyuri/hnmsite/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect (() => {
    getProducts()
  },[])

  return (
    <div>
      <div item={productList}></div>
      <ProductCard />
    </div>
  )
}

export default ProductAll
