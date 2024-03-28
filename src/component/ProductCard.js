import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='card-wrap' onClick={showDetail}>
      <div className='img'>
        <img src={item?.img} alt="" />
      </div>
      <div className='info'>
        <p className='choice'>{item?.choice === true ? "Conscious Choice" : ""}</p>
        <p className='title'>{item?.title}</p>
        <p className='price'>₩{item?.price}</p>
        <p className='new'>{item?.new === true ? "신제품" : ""}</p>
      </div>      
    </div>
  )
}

export default ProductCard
