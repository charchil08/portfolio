import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='bg-gradient-to-b to-gray-800 from-black w-full md:h-full' >
            <div className='max-w-screen-lg mx-auto p-4 w-full h-full text-white flex flex-col justify-center' >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 pb-1  hover:border-gray-200 duration-700'>Contact</p>
                    <p className='py-6'>Hey! how can I help you ? 🤝</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/92154852-f93f-4570-9764-4119ff46ccec" method='POST' className='w-full md:w-1/2 flex flex-col' >
                        <input type="text"
                            name="name"
                            placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-[#8300b8]' />
                        <input type="email"
                            name="email"
                            placeholder='Enter your mail' className='p-2 bg-transparent border-2 rounded-md my-4 text-white focus:outline-none border-[#8300b8]' required />
                        <textarea name='message'
                            rows="10"
                            placeholder='Leave a message !'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-[#8300b8]' required ></textarea>
                        <button
                            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
                        >Let's Talk</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact