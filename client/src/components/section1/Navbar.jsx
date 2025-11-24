import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between px-6 sm:px-18 py-6 sm:py-8 gap-4 sm:gap-0'>
        <h4 className='bg-black text-white uppercase px-4 sm:px-6 py-2 rounded-full text-center sm:text-left text-lg sm:text-xl'>arbaz ali</h4>
        <button className='bg-gray-200 px-4 sm:px-6 py-2 uppercase rounded-full tracking-widest text-sm sm:text-base text-center'>MERN STACK DEVELOPER</button>
    </div>
  )
}

export default Navbar
