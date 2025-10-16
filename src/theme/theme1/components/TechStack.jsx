import React from 'react'
import { useSelector } from 'react-redux'

const TechStack = () => {
    const techStackData = useSelector(state => state.api.data?.techStack?.tStack) || []

    return (
        <section className='bg-gray-50 dark:bg-gray-900'>
            <div className='max-w-5xl mx-auto px-4 py-12'>
                <div className='flex flex-col justify-center items-center text-center'>
                    {/* Heading */}
                    <h2 className='text-blue-900 dark:text-blue-400 font-bold text-2xl md:text-3xl lg:text-4xl'>
                        My Tech Stack
                    </h2>

                    {/* Subtext */}
                    <p className='mt-2 text-gray-600 dark:text-gray-300 text-base md:text-lg'>
                        Technologies I've been working with recently
                    </p>

                    {/* Tech stack grid */}
                    {techStackData.length > 0 ? (
                        <ul className='grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-6 mt-8'>
                            {techStackData.map(tech => (
                                <li
                                    key={tech._id}
                                    className='flex flex-col items-center gap-2 py-4 px-5 rounded-xl 
                                               bg-white dark:bg-gray-800 shadow-sm hover:shadow-md 
                                               transition-all duration-300'
                                >
                                    <img
                                        className='h-10 w-10 object-contain'
                                        src={tech.imgUrl}
                                        alt={tech.stackName}
                                    />
                                    <span className='text-gray-800 dark:text-gray-200 text-sm md:text-base font-medium'>
                                        {tech.stackName}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='mt-6 text-gray-500 dark:text-gray-400'>No technologies to display yet.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TechStack
