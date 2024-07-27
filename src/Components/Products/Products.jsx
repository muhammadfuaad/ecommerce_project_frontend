import { useEffect, useState } from "react";
import axiosInstance from "../../utils/callAxios";
import './Styles.css'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axiosInstance.get('/product')
  .then(response => {
    console.log('response:', response);
    setProducts(response.data.data)
  })
  .catch(error => {
    console.error('error', error);
  });
  }, [])
  
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-stock">Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;