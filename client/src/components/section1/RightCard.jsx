import React, { useContext } from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContect from './RightCardContect'
import { AppContextProvider } from '../../context/AppContext'
const RightCard = ({index, desc, tag, image}) => {
  return (
    <div className='shrink-0 shadow-2xs h-full w-75 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={image} alt="" />
      <RightCardContect tag={tag} index={index} desc={desc}/>
    </div>
  )
}

export default RightCard