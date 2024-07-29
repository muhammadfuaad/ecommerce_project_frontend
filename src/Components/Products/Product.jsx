import { useLocation } from "react-router";

const Product = () => {
  const location = useLocation()
  console.log('location:', location);
  const product = location.state
  console.log('product:', product);

  return (
    <>
      <h1>{product.name}</h1>
    </>
  )

}

export default Product;