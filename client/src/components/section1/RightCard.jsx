import React from 'react'
import RightCardContect from './RightCardContect'

const RightCard = ({ index, desc, tag, image }) => {
  return (
    <div
      className="
        shrink-0 w-full sm:w-60 lg:w-75 h-80 sm:h-96 lg:h-full 
        rounded-4xl overflow-hidden relative 
        bg-[#111] 
        shadow-lg 
        transition-all duration-500 
        hover:shadow-2xl 
        hover:shadow-black/40
        group
        bg-gradient-to-t from-black/100 via-black/70 to-transparent
      "
    >
      <img
        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        src={image}
        alt=""
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 opacity-70 group-hover:opacity-90 transition-all duration-500"
      />

      <RightCardContect tag={tag} index={index} desc={desc} />
    </div>
  )
}

export default RightCard
