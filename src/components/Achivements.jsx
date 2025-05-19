import React from 'react'

const Achivements = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10 md:py-16 text-4xl font-bold flex items-center justify-center flex-wrap gap-24 lg:gap-40 text-white'>
      <div className='flex flex-col gap-1'>
        <span>10K+</span>
        <span className='text-sm font-normal'>Properties</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span>300+</span>
        <span className='text-sm font-normal'>Happy Clients</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span>80%</span>
        <span className='text-sm font-normal'>Faster Deals</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span>12K+</span>
        <span className='text-sm font-normal'>Experience</span>
      </div>
    </div>
  )
}

export default Achivements