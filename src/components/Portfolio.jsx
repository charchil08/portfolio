import React, { useEffect, useState } from 'react'

import cms from "../assets/portfolio/cms.png"
import dg from "../assets/portfolio/dg.png"
import det from "../assets/portfolio/det.png"
import fso from "../assets/portfolio/fso.png"

const Portfolio = () => {

    const [demoText, setDemoText] = useState(false)
    const [selectedRow, setSelectedRow] = useState(undefined)

    const onSelectedRow = (index) => {
        setSelectedRow(index);
        setDemoText(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setDemoText(false)
        }, 1000)
    }, [demoText])

    const portfolios = [
        {
            id: 1,
            src: cms,
            href: 'https://github.com/charchil08/Collector-vms',
            demotAlt: 'Available soon',
            demo: ''
        },
        {
            id: 2,
            src: dg,
            href: 'https://github.com/charchil08/Digital-gramentwear',
            demotAlt: 'Available soon',
            demo: ''
        },
        {
            id: 3,
            src: det,
            href: 'https://github.com/charchil08/Daily-Expense-tracker',
            demotAlt: '',
            demo: 'https://charchil08.github.io/Daily-Expense-tracker/',
        },
        {
            id: 4,
            src: fso,
            href: 'https://github.com/charchil08/File-System-Organizer',
            demotAlt: 'CLI Tool - for use, fork my git repo',
            demo: ''
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-full'>

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center">

                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500  hover:border-gray-200 duration-700' >Portfolio</p>
                    <p className='text-xl py-6' >Check out some of my work  </p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, href, demotAlt, demo }, index) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
                                <div className="flex justify-center items-center">
                                    {
                                        demo !== '' ? (
                                            <a
                                                href={demo}
                                                target='_blank'
                                                className='w-1/2 px-6 m-3 duration-200 hover:scale-105 py-1 cursor-pointer' >Demo</a>
                                        ) : (
                                            <a
                                                onClick={() => onSelectedRow(index)}
                                                className='w-1/2 px-6 m-3 duration-200 hover:scale-105 py-1 cursor-pointer' >Demo</a>
                                        )
                                    }
                                    <a
                                        href={href}
                                        target='_blank'
                                        className='w-1/2 px-6 m-3 duration-200 hover:scale-105 py-1 cursor-pointer'>Code</a>
                                </div>
                                {
                                    demoText === true && selectedRow === index ? (
                                        <p
                                            className='text-red-600 px-2'
                                            style={{
                                                visibility: demoText ? 'visible' : 'hidden',
                                            }}>{demotAlt}</p>
                                    ) : null
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Portfolio