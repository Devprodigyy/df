// import img2 from '../src/assets/dreamforge2.webp'
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
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
      {/* loading page */}

      {/* <div id='loadpage' className='loading w-full h-full bg-black absolute top-0 z-50'>
        <section className='absolute h-screen w-full flex flex-col items-center justify-center ' >
          <img className='h-[10vh] rounded-full' src={img2} alt="" />
          <h1 className='text-yellow-500 text-[5vw]'>DREAMFORGE</h1>
          <button className='text-white py-4 px-2 text-[1.5vh]'>Tap anywhere to Enter</button>
        </section>
      </div> */}

      <div>
       
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
      </div>

    </main>
  )
}

export default App