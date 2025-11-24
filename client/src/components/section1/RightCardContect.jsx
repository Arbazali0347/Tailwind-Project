import React from 'react'

const RightCardContect = ({index, desc, tag}) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h1 className='rounded-full w-10 h-10 flex justify-center items-center bg-white text-2xl font-bold'>{index+1}</h1>
            <div>
                <p className='text-shadow-2xs text-xl leading-normal text-white mb-8'>{desc}</p>
                <div className='flex justify-between items-center'>
                    <button className='bg-black text-white font-medium px-8 py-3 rounded-full'>{tag}</button>
                    <button className='bg-black text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContect