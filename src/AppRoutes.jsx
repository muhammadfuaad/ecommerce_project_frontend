
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Authentication/Register'
import Login from './Components/Authentication/Login'
import Home from './Components/Home/Home'
import Category from './Components/Categories/Categories'
import CategoryPage from './Components/Categories/CategoryPage'

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="category" component={Category} />
          <Route path="/category/:name" component={CategoryPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes