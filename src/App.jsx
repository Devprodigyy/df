import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
// import Menu from './Components/Menu';
import Card from './Components/Cards';
import About from './Components/About';
// import Team from './Components/Team';
import Testimonial from './Components/Testomonials';
import FAQ from './Components/Faqdata';
import Connect from './Components/Connect';
import Footer from './Components/Footer';
import Chooseus from './Components/Chooseus';

const App = () => {
  return (
    <main className='relative'>
      {/* <Menu /> */}
      <Navbar />
      <Hero />
      <Features />
      <Card />
      <About />
      {/* <Team /> */}
      <Chooseus />
      <Testimonial />
      <FAQ />
      <Connect />
      <Footer />

    </main>
  )
}

export default App