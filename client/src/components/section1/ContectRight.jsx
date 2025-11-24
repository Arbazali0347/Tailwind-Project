import React, { useContext } from 'react'
import RightCard from './RightCard'
import { AppContextProvider } from '../../context/AppContext'

const ContectRight = () => {
  const {Cards} = useContext(AppContextProvider)
  return (
    <div id='right' className='overflow-x-scroll h-full w-3/4 p-5 flex-nowrap gap-6 flex rounded-4xl'>
        {Cards.map((item,index)=>(
          <RightCard key={index} image={item.image} tag={item.tag} index={index} desc={item.desc}/>
        ))}
    </div>
  )
}

export default ContectRight