import React from 'react'
import AboutDescription from './AboutDescription'

const About = () => {
  return (
    <section className='space-y-8'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-8xl font-bold text-white'>MORE</h1>
        <h1 className='text-8xl font-bold text-orange-500'>ABOUT ME</h1>
      </div>
      <AboutDescription />
    </section>
  )
}

export default About