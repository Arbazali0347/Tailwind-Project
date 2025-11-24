import React, { useContext } from 'react'
import { AppContextProvider } from '../../context/AppContext'

const Section2 = () => {
    const { name } = useContext(AppContextProvider)
  return (
    <div className='h-screen w-full bg-green-400'>
        <h1 className='text-3xl font-bold underline'>
            {name}
        </h1>
    </div>
  )
}

export default Section2