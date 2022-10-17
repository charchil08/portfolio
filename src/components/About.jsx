import React from 'react'

const About = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white " name="about">

            <div className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-justify" >
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-b-gray-500 cursor-pointer hover:border-gray-200 duration-700' >About</p>
                </div>
                <p className='text-xl mt-4'>
                    Hey Folks👋! I am
                    <span className="container">
                        <span className='name'> Charchil Kajaliya</span>
                        <span class="stars">
                            <span className="s"></span>
                            <span className="s"></span>
                            <span className="s"></span>
                            <span className="s"></span>
                            <span className="s"></span>
                            <span className="m"></span>
                            <span className="m"></span>
                            <span className="m"></span>
                            <span className="m"></span>
                            <span className="m"></span>
                            <span className="l"></span>
                            <span className="l"></span>
                            <span className="l"></span>
                            <span className="l"></span>
                            <span className="l"></span>
                        </span>
                    </span>. A 20 years old software engineer powered by VS Code & coffe, also a weeb who loves to travel.
                </p>

                <br />

                <p className='text-xl'>
                    I am new to community so I prefer to keep learning, continue challenging myself, and do interesting things. I am passionate about building web apps that imporwise the lives of people around me.
                </p>
            </div >
        </div >
    )
}

export default About