import React from 'react'
import 'remixicon/fonts/remixicon.css'

const ContectLeft = () => {
    return (
        <div className='h-full w-full lg:w-1/3 flex flex-col justify-between'>
            <div className='p-4 sm:p-7'>
                <h3 className='text-center lg:text-left mb-5 sm:mb-7 text-3xl sm:text-6xl font-bold leading-tight'>
                    Building<br /><span>Leaning</span><br />experiences
                </h3>
                <p className='text-center lg:text-left text-base sm:text-xl font-medium text-gray-600'>
                    I’m Arbaz Ali, a passionate MERN-Stack developer learning every day, creating clean and powerful web experiences with consistency and focus.
                </p>
            </div>
            {/* Arrow removed on mobile/tablet */}
            <div className='hidden lg:block text-9xl'>
                <i className="ri-arrow-right-up-line"></i>
            </div>
        </div>
    )
}

export default ContectLeft

