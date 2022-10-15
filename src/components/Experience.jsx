import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nodejs from '../assets/node.png'
import expressjs from '../assets/express.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import cpp from '../assets/cpp.png'
import mysql from '../assets/mysql.png'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            title: 'HTML5',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS3',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: reactImage,
            title: 'React.Js',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            src: nodejs,
            title: 'Node.Js',
            style: 'shadow-[#68A063]',
        },
        {
            id: 7,
            src: expressjs,
            title: 'Express Js',
            style: 'shadow-[#3FA037]',
        },
        {
            id: 8,
            src: mongodb,
            title: 'Mongo DB',
            style: 'shadow-[#3F3E42]',
        },
        {
            id: 9,
            src: mysql,
            title: 'MySql',
            style: 'shadow-[#00758f]',
        },
        {
            id: 10,
            src: cpp,
            title: 'C++ 14',
            style: 'shadow-blue-500',
        },
        {
            id: 11,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400',
        }
    ]


    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-full py-12'>

            <div className='max-w-screen-lg mx-auto p-4 w-full h-full text-white flex flex-col justify-center'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 pb-1  hover:border-gray-200 duration-700' >Experience</p>
                    <p className='text-xl py-6' >These are the the tech stack I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        experiences.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Experience