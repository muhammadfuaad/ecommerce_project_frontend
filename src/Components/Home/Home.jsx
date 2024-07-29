import Categories from '../Categories/Categories'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import HeadSection from '../HeadSection/HeadSection'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeadSection/>
      <Categories />
      <Products />
      <Footer />
    </div>
  )
}

export default Home