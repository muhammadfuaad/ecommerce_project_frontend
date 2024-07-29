import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axiosInstance from '../../utils/callAxios';
import Product from '../Products/Product';

const Category = () => {
  const [products, setProducts] =useState([])
  const { categoryName } = useParams();
  const location = useLocation()
  console.log('location:', location);
  const categoryId = location.state.categoryId

  useEffect(()=>{
    axiosInstance.get(`/product/category/${categoryId}`).then((response)=>{
      console.log('response:', response);
      setProducts(response.data.data)
    })
  }, [])

  return (
    <div>
      <h1>{categoryName} Category</h1>
      {products.map((product, index)=>{
        return (
          <Product product = {product} key={index}/>
        )
      })}
    </div>
  );
}

export default Category;