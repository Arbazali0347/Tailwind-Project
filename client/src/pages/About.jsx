import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    return (
        <div className='w-full min-h-screen px-6 sm:px-12 lg:px-20 py-12 relative'>

            {/* Back Arrow */}
            <button 

                onClick={() => navigate(-1)}
                className='absolute cursor-pointer top-6 left-6 text-3xl sm:text-4xl text-black hover:text-gray-700 transition'
            >
                <i className="ri-arrow-left-line"></i>
            </button>

            <div className='flex flex-col lg:flex-row items-center gap-12 mt-12'>

                {/* Left Section */}
                <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                    <h1 className='text-4xl sm:text-6xl font-bold leading-tight'>
                        About <span className='text-gray-700'>Me</span>
                    </h1>

                    <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                        I'm <strong>Arbaz Ali (Black Aro)</strong>, a passionate and consistent learner 
                        focused on mastering <strong>Web Development</strong>. I love building clean, modern 
                        UI experiences using <strong>React</strong> and <strong>Tailwind CSS</strong>.
                    </p>

                    <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                        I focus on writing clean code, understanding scalability, and building user-friendly
                        interfaces. My long-term vision is to create meaningful digital experiences and grow 
                        as a MERN-Stack developer.
                    </p>

                    <a
                        href="https://arbazali.framer.website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className='cursor-pointer  bg-black text-white px-6 py-3 rounded-full w-fit uppercase tracking-wider hover:bg-gray-900 transition'
                        >
                            Contact Me
                        </button>
                    </a>
                </div>

                {/* Right Section */}
                <div className='w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl'>
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
                        alt='About Visual'
                        className='w-full h-80 sm:h-full object-cover'
                    />
                </div>

            </div>

        </div>
    )
}

export default About;
