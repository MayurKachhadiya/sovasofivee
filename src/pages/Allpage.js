import React from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Price from './Price';
import Team from './Team';

const Allpage = (val) => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Team/>
      <Price/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Allpage;
