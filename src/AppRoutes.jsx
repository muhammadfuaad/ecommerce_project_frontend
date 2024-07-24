
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Authentication/Register'
import Login from './Components/Authentication/Login'
import Categories from './Components/Categories/Categories'
import Home from './Components/Home/Home'

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Categories" element={<Categories />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes