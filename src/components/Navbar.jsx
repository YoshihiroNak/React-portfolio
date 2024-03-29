import React, { useState } from 'react'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <div className="App">
                <div className="container mx-auto px-3 z-5">
                    <header className="relative z-10">
                        {/* humbergerbutton */}
                            <button onClick={handleMenuOpen} type="button" className="z-10 space-y-2 fixed flex-col py-[18px] right-margin hover:brightness-75 hover:scale-95 duration-500">
                                <div className={openMenu ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
                                <div className={openMenu ? 'opacity-0 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
                                <div className={openMenu ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
                            </button>
                        {/* nav */}
                        <nav
                            className={
                                openMenu
                                    ? 'text-center fixed bg-slate-50 left-0 top-0 w-3/12  h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300'
                                    : 'fixed left-[-100%] ease-linear duration-300'
                            }
                        >
                            <ul className="mt-6">
                                <li className="">
                                    <a href="#home" className="py-4 px-3 inline-block hover:text-blue-400 duration-300">
                                        HOME
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#about" className="py-4 px-3 inline-block hover:text-blue-400 duration-300">
                                        ABOUT
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#skills" className="py-4 px-3 inline-block hover:text-blue-400 duration-300">
                                        SKILLS
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Navbar