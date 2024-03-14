import React from 'react'
import Summary from './Summary'
import Cards from './Cards'

const AboutMe = () => {
    return (
        <>
            <section className='text-gray-700 border-t border-gray-200' id="about">
                <div className='container px-5 py-5 mx-auto'>
                    <Summary />
                    <Cards />
                </div>
            </section>
        </>
    )
}

export default AboutMe