import React from 'react'
import heroImage from "../assets/heroImage.png"
// import heroImage from "../assets/blue-gradient-designify.png"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { Link } from 'react-scroll'
import { MdNavigateNext } from "react-icons/md"
import "../App.css"

const Home = () => {
    return (
        <div name="home"
            className='w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'
        >
            <div
                className='max-w-screen-lg mx-auto flex flex-1 justify-center items-center flex-col h-full px-4  md:flex-row md:pt-0 pt-44'
            >
                <div className='flex flex-col max-w-screen-lg mx-auto justify-center items-start h-full px-4 ml-4' >
                    <h2 className=' animate-character text-white text-4xl sm:text-6xl font-bold pt-4' >
                        Full Stack Developer
                    </h2>
                    <p className='text-gray-500 pt-4 max-w-md text-2xl font-fira'>
                        Idea to Implementation
                    </p>
                    {/* for an process bar */}
                    <p className='text-white process'></p>
                    <p className='font-fira trxt-xl text-yellow-50 my-4'>
                        <ul className='pl-6'>
                            <li>SSIP & "आज़ादी का अमृत महोत्सव" Hackathon winner</li>
                            <li>DSA explorer </li>
                            <li>concrete learner</li>
                        </ul>
                    </p>

                    <div>
                        <Link className='group text-white w-fit px-6 py-2 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' smooth duration={400} to='portfolio' >
                            Portfolio
                            <span className='group-hover:rotate-90 duration-200 ml-2' >
                                <AiOutlineDoubleRight size={20} />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={heroImage}
                        className="rounded-full mx-auto w-2/5 mt-12 md:w-72 border-4 border-blue-700/[.12] border-double p-2"
                        alt="my profile" />
                </div>
            </div>
        </div>
    )
}

export default Home