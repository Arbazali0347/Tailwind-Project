import React, { useContext } from 'react'
import RightCard from './RightCard'
import { AppContextProvider } from '../../context/AppContext'

const ContectRight = () => {
  const { Cards } = useContext(AppContextProvider)

  return (
    <div
      id='right'
      className='lg:overflow-scroll flex flex-col lg:flex-row gap-6 w-full lg:w-3/4 h-auto lg:h-full p-5 rounded-4xl'
    >
      {Cards.map((item, index) => (
        <RightCard 
          key={index} 
          image={item.image} 
          tag={item.tag} 
          index={index} 
          desc={item.desc} 
        />
      ))}
    </div>
  )
}

export default ContectRight
