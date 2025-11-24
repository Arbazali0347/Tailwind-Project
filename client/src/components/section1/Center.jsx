import React from 'react'
import ContectLeft from './ContectLeft'
import ContectRight from './ContectRight'

const Center = () => {
  return (
    <div className='pb-10 gap-10 flex justify-between items-center h-[90vh] px-18'>
        <ContectLeft/>
        <ContectRight/>
    </div>
  )
}

export default Center