import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'
import Double from '../../components/Double/Double'
import OurBlog from '../../components/OurBlog/OurBlog'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <Products/>
    <Double/>
    <OurBlog/>
    <Footer/>
    </>
  )
}

export default Home