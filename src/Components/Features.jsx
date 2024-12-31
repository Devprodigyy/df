import React from 'react'
import smile from '/src/assets/smile.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Features = () => {
  // Gsap animations 
  useGSAP(() => {
    gsap.from(".smiley", {
      rotate: 25,
      duration: 2,
      ease: 'elastic',
      repeat: -1,
      yoyo: true,

    })
  })
  return (
    // features section
    <section id='features' className='relative h-[80vh] w-[100%] m-auto flex flex-col md:flex-row bg-white'>
      <h1 className='absolute top-3 w-full text-center z-50 text-[5vw] sm:text-[4vw] md:text-[3vw] xl:text-[2vw] text-slate-900 '>Feature</h1>
      <div className='h-[50%] w-full flex flex-col items-center justify-center md:w-[50%] md:h-full relative '>
        <img className='mt-[2vh] h-[60%] object-cover border-[2px] border-white' src="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='h-[50%] w-full flex flex-col items-center justify-center md:w-[50%] md:h-full'>
        <h1 className='text-[5vw] md:text-[2vw] text-slate-900'>Everything at one place.</h1>
        <p className='w-[80%] text-center mt-5 md:w-[60%] text-slate-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis incidunt esse quae ex inventore veritatis veniam illo id nam, illum sit deserunt, atque pariatur, tenetur earum. Quia numquam accusantium sequi.</p>
      </div>
      <img className='smiley absolute h-[15vh] md:h-[30vh] bottom-0 right-0' src={smile} alt="" />
      <img className='smiley absolute h-[15vh] md:h-[30vh] top-0 left-0 rotate-45' src={smile} alt="" />
    </section>
  )
}

export default Features