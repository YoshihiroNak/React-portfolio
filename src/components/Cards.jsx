import React from 'react'

const Cards = () => {
    return (
        <>
            {/* div of card */}
            <div className='flex flex-wrap'>
                <div className='md:w-1/3 p-4'>
                    <div className='bg-gray-200 rounded-lg p-8'>
                        <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                            </div>
                            <h2 className='text-gray-900 text-g font-medium ml-2'>
                                Full Stack Web Application
                            </h2>
                        </div>
                        <div>
                            <p className='mb-3'>
                                MovieMaestro can reduce the time scrolling through
                                different streaming platforms by selecting through
                                the many filter options.
                                Built using MERN as a team.
                            </p>
                            <a href="https://moviemaestro.netlify.app" target="_blank" rel="noopener noreferrer"
                                className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 duration-300'>
                                See more
                            </a>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 p-4'>
                    <div className='bg-gray-200 rounded-lg p-8'>
                        <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                            </div>
                            <h2 className='text-gray-900 text-g font-medium ml-2'>
                                Group Journal
                            </h2>
                        </div>
                        <div>
                            <p className='mb-3'>
                                API application as a group journal where users can
                                communicate with each other.
                                Built using Python, PostgreSQL and Flask.
                            </p>
                            <a href="https://github.com/YoshihiroNak/T2A2-API-Webserver-Project" target="_blank" rel="noopener noreferrer"
                                className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 duration-300'>
                                See more
                            </a>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 p-4'>
                    <div className='bg-gray-200 rounded-lg p-8'>
                        <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                            </div>
                            <h2 className='text-gray-900 text-g font-medium ml-2'>
                                Portfolio
                            </h2>
                        </div>
                        <div>
                            <p className='mb-3'>
                                This is my first portfolio website built with HTML and CSS. It contains about myself and how to get into contact with me.
                            </p>
                            <a href="https://website-portfolio-lovat.vercel.app/" target="_blank" rel="noopener noreferrer"
                                className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 duration-300' >
                                See more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards