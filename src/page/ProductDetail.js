import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Dropdown, DropdownButton } from 'react-bootstrap';

const ProductDetail = () => {
  let{id} = useParams();
  const[product,setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/yimkyuri/hnmsite/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line
  }, [])
  return (
    <Container>
      <Row>
        <Col className='detail-img'>
          <img src={product?.img} alt=''/>
        </Col>
        <Col>
          <div className='detail-info'>
            <p className='title'>{product?.title}</p>
            <p className='price'>₩{product?.price}</p>
            <p className='choice'>{product?.choice === true? "Conscious Choice" : ""}</p>
            <div className='size'>
              <DropdownButton key="Secondary" id="dropdown-variants-Secondary" title="Size">
                {product?.size.map((size) => (
                  <Dropdown.Item href="#/action-1">{size}</Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
