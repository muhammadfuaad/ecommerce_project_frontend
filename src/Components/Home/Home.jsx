import Categories from '../Categories/Categories'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import HeadSection from '../HeadSection/HeadSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeadSection/>
      <Categories />
    </div>
  )
}

export default Home