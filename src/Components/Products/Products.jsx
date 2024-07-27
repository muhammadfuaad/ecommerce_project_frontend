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
    <div className='flex justify-center w-full'>
    <div className="product-grid">
      <h2>RECOMMENDED FOR YOU</h2>
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">
              <span className="new-price">${product.price.toFixed(2)}</span>
            </p>
            <p className="rating">
              {'★'.repeat(product.rating)} <span>({product.reviews})</span>
            </p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default Products;
