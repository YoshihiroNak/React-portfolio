import React from 'react'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import email from '../assets/email.svg'

const Links = () => {
    return (
        <>
            <div className='flex flex-row justify-around'>
                <a href="https://www.linkedin.com/in/yoshihiro-nakagawasai" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" className='rounded hover:brightness-75 hover:scale-95 duration-500 flex justify-center' />
                </a>
                <a href="https://github.com/YoshihiroNak" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" className='rounded hover:brightness-75 hover:scale-95 duration-500 flex justify-center' />
                </a>
                <a href="mailto:yoshihiro@yoshihiro.dev">
                    <img src={email} alt="email" className='rounded hover:brightness-75 hover:scale-95 duration-500 flex justify-center' />
                </a>
            </div>
        </>
    )
}

export default Links