import { useEffect, useState } from "react";
import axiosInstance from "../../utils/callAxios";
import './Styles.css';
// import { useNavigate } from "react-router";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axiosInstance.get('/product').then((response)=>{
      console.log('response:', response);
      setProducts(response.data.data)
    }).catch((error)=>{
      console.log('error:', error);
    })
  }, [])

  return (
    <div className='flex justify-center w-full'>
      <div className="product-grid">
        <h2>RECOMMENDED FOR YOU</h2>
        <div className="grid">
          {products.map(product => (
            <Product key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products