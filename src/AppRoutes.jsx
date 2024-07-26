
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Authentication/Register'
import Login from './Components/Authentication/Login'
import Categories from './Components/Categories/Categories'
import Home from './Components/Home/Home'
import CategoryForm from './Components/Categories/CategoryForm'
import ProductForm from './Components/Products/ProductForm'

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/add_new" element={<CategoryForm />} />
          <Route path="/products/add_new" element={<ProductForm />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes