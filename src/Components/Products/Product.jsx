import {  useNavigate } from "react-router";

const Product = (product) => {
  // const location = useLocation()
  const navigate = useNavigate()
  // console.log('location:', location);
  // const product = location.state
  console.log('product:', product);

  return (
    <div key={product.id} className="product-card" onClick={()=>{navigate('/product', {state: product})}}>
      <img src='./chairs_image.jpg' alt={product.product.name} />
      <h3>{product.product.name}</h3>
      <p className="price">
        <span className="new-price">${product.product.price.toFixed(2)}</span>
      </p>
      <button>Add to cart</button>
    </div>
  )
}

export default Product;