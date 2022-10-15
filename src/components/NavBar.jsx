import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'
import "../App.css"

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
        {
            id: 6,
            link: 'social',
            style: 'lg:hidden'
        }
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4' >
            <div className="">
                <h1 className=""> <span className='font-signature text-5xl ml-2 text-blue-400 cursor-pointer' style={{

                }} >Charchil</span> <span className="ml-1 wave">👋🏻</span> </h1>
            </div>

            <ul className="hidden md:flex">
                {
                    links.map(({ id, link, style }) =>
                        <li key={id} className={`px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 ${style}`} >
                            <Link to={link} smooth duration={500} >
                                {link}
                            </Link>
                        </li>
                    )}
            </ul>

            <div
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {
                nav &&
                <ul className='flex flex-col justify-center items-center absolute w-full top-0 left-0 h-screen text-gray-500 bg-gradient-to-b from-black to-gray-700 '>
                    {
                        links.map(({ id, link }) =>
                            <li key={id} className="px-4 py-6 cursor-pointer capitalize text-4xl" >
                                <Link to={link} smooth duration={500} onClick={() => setNav(prevNav => !prevNav)} >
                                    {link}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            }
        </div >
    )
}

export default NavBar