import React from 'react'
import SectionTitle from './ui/section-title'
import StackCard from './ui/stack-card'

const Stack = () => {
  return (
    <div className='padding-y space-y-16'>
        <SectionTitle titleFirst='My' titleLast='Stack' />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 lg:gap-32'>
          <StackCard imgURL='' title='Framer' />
          <StackCard imgURL='' title='Figma' />
          <StackCard imgURL='' title='Adobe Creative Suite'/>

        </div>

    </div>
  )
}

export default Stack