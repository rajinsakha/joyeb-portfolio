import React from 'react'
import AboutDescription from './AboutDescription'

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-8 padding-y' id='about'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-3xl md:text-5xl lg:text-8xl font-bold text-white'>MORE</h1>
        <h1 className='text-3xl md:text-5xl lg:text-8xl font-bold text-yellow-600'>ABOUT ME</h1>
      </div>
      <div>

      </div>
      <AboutDescription />
      <button className='uppercase h-12 flex items-center justify-center text-lg px-6 rounded-full bg-white text-black font-bold'>Download Resume</button>
    </section>
  )
}

export default About