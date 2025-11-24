import React from 'react'

const RightCardContect = ({ index, desc, tag }) => {
  return (
    <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between">
      <h1 className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center bg-white/90 text-black shadow-md font-bold text-xl sm:text-2xl">
        {index + 1}
      </h1>

      <div>
        <p className="text-base sm:text-xl text-white leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mb-4 sm:mb-8">
          {desc}
        </p>

        <div className="flex justify-between items-center gap-2 sm:gap-4">
          <button className="bg-white/20 text-white backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 shadow-md">
            {tag}
          </button>

          <button className="bg-white/20 text-white backdrop-blur-md px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:bg-white/30 transition-all duration-300 shadow-md">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContect
