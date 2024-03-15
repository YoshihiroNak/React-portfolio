import React from 'react'
import Links from './Links'
import portfolio from '../assets/portfolio.png'

const Hero = () => {
    return (
        <>
            {/* left side */}
            <section className='text-gray-700' id="home">
                <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
                    <div className='md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
                        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
                            Hello.
                            <br />
                            I'm
                            <br />
                            Yoshihiro.
                        </h1>
                        <p className='text-2xl mb-9 leading-relaxed'>
                            I am a Junior Web Developer who recently transitioned my career from the hospitality industry to the web
                            developer industry. I have a passion for developing functional web applications and always love learning new
                            things.</p>
                        <Links />
                    </div>
                    {/* right side */}
                    <div className='md:w-1/2 lg:max-w-lg w-5/6'>
                        <a href="https://website-portfolio-lovat.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <img src={portfolio} alt="Portfolio" className='rounded hover:brightness-75 hover:scale-95 duration-500' />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero