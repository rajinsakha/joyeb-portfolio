import React from 'react'

const SectionTitle = ({titleFirst, titleLast}:{titleFirst:string, titleLast:string}) => {
  return (
    <h1 className='text-6xl text-white font-bold '>{titleFirst+ " "}<span className='text-yellow-600'>{titleLast}</span></h1>
  )
}

export default SectionTitle