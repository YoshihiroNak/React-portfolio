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
                            <p>
                                MovieMaestro can reduce the time scrolling through
                                different streaming platforms by selecting through
                                the many filter options.
                                Built using MERN as a team.
                            </p>
                            <a href="https://moviemaestro.netlify.app" className='flex mt-3 text-green-500 items-center hover:text-green-400 duration-300'>See more
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ed321" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h13M12 5l7 7-7 7" />
                                </svg>
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
                            <p>
                                API application as a group journal where users can
                                communicate with each other.
                                Built using Python, PostgreSQL and Flask.
                            </p>
                            <a href="https://github.com/YoshihiroNak/T2A2-API-Webserver-Project" className='flex mt-3 text-green-500 items-center hover:text-green-400 duration-300'>See more
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ed321" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h13M12 5l7 7-7 7" />
                                </svg>
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
                            <p>
                                This is my first portfolio website built with HTML and CSS. It contains about myself and how to get into contact with me.
                            </p>
                            <a href="https://website-portfolio-lovat.vercel.app/" className='flex mt-3 text-green-500 items-center hover:text-green-400 duration-300' >See more
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ed321" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h13M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards