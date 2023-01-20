import React from 'react'
import Slider from '../Slider/Slider'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import Categories from '../Catagories/Categories'
import Contact from '../Contact/Contact'
const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProduct type = "featuered"/>
      <Categories/>
      <FeaturedProduct type = "trending"/>
      <Contact/>
    </div>
  )
}

export default Home