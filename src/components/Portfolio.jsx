import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: reactParallax
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactWeather
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-full'>

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center">

                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500  hover:border-gray-200 duration-700' >Portfolio</p>
                    <p className='text-xl py-6' >Check out some of my work here</p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
                                <div className="flex justify-center items-center">
                                    <button className='w-1/2 px-6 m-3 duration-200 hover:scale-105 py-1' >Demo</button>
                                    <button className='w-1/2 px-6 m-3 duration-200 hover:scale-105 py-1' >Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Portfolio