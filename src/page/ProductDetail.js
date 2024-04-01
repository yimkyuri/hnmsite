import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  let {id} = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id))
  }
  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line
  }, [])
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className='detail-img'>
          <img src={product?.img} alt=''/>
        </Col>
        <Col xs={12} md={6}>
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
            <Button variant="outline-primary">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
