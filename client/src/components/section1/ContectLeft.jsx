import React from 'react'
import 'remixicon/fonts/remixicon.css'


const ContectLeft = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between'>
            <div className='p-10'>
                <h3 className='mb-7 text-6xl font-bold'>Prospective <br /><span>customer</span><br />segmentation</h3>
                <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, molestiae nesciunt. Necessitatibus, sed. Ab, blanditiis ea. Quasi odio voluptatum consequuntur?</p>
            </div>
            {/* arrow */}
            <div className='text-9xl'>
                <i className="ri-arrow-right-up-line"></i>
            </div>
        </div>
    )
}

export default ContectLeft