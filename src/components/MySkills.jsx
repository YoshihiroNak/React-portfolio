import React from 'react'
import journal from '../assets/journal.png'

const MySkills = () => {
    return (
        <>
        
        <section className='text-gray-700 border-t border-gray-200' id="skills">
        <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl font-medium mb-4 text-gray-900'>My Skills</h1>
        </div>
            <div className='container px-5 py-4 mx-auto flex flex-wrap'>
                {/* left side */}
                <div className='mb-6 lg:mb-0 w-full lg:w-1/2 flex justify-center items-center'>
                    <a href="https://github.com/YoshihiroNak/T2A2-API-Webserver-Project" target='_blank'>
                    <img src={journal} alt="" className='rounded hover:brightness-75 hover:scale-95 duration-500' />
                    </a>
                </div>
                {/* right side */}
                <div className='lg:pl-12 w-full lg:w-1/2 '>
                    <div>
                        <h2>HTML, CSS</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "90%" }}>
                                90%
                            </div>
                        </div>
                        <h2>JavaScript</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>
                                85%
                            </div>
                        </div>
                        <h2>Python</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "85%" }}>
                                85%
                            </div>
                        </div>
                        <h2>React</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "80%" }}>
                                80%
                            </div>
                        </div>
                        <h2>Flask</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "80%" }}>
                                80%
                            </div>
                        </div>
                        <h2>Node.js</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "75%" }}>
                                75%
                            </div>
                        </div>
                        <h2>Express.js</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "75%" }}>
                                75%
                            </div>
                        </div>
                        <h2>PostgreSQL</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "65%" }}>
                                65%
                            </div>
                        </div>
                        <h2>MongoDB</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "70%" }}>
                                70%
                            </div>
                        </div>
                        <h2>Tailwind</h2>
                        <div className='shadow bg-green-100 mt-1 w-full'>
                            <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "70%" }}>
                                70%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default MySkills