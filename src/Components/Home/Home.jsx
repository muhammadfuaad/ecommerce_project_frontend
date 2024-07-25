import React from 'react'
import Categories from '../Categories/Categories'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import HeadSection from '../HeadSection/HeadSection'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeadSection/>
      <Categories />
      <Footer />
    </div>
  )
}

export default Home
