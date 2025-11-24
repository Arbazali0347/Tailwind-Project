import React from 'react'
import ContectLeft from './ContectLeft'
import ContectRight from './ContectRight'

const Center = () => {
  return (
    <div className='pb-10 gap-10 flex flex-col lg:flex-row justify-between items-center h-[90vh] px-6 sm:px-18'>
        <ContectLeft/>
        <ContectRight/>
    </div>
  )
}

export default Center
