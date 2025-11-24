import React, { useContext } from 'react'
import { AppContextProvider } from '../../context/AppContext'
import Navbar from './Navbar'
import Center from './Center'

const Section1 = () => {
  const { name } = useContext(AppContextProvider)
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Center/>
    </div>
  )
}

export default Section1