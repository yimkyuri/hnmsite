import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async() => {
    let searchQuery = query.get("q") || "";

    let url =`https://my-json-server.typicode.com/yimkyuri/hnmsite/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect (() => {
    getProducts();
    setQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item => (
            <Col lg={3}>
              <ProductCard item={item}/>
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
