import React from 'react'

const About = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white " name="about">

            <div className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-justify" >
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-b-gray-500 cursor-pointer hover:border-gray-200 duration-700' >About</p>
                </div>
                <p className='text-xl mt-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde minus distinctio fugiat quo? Pariatur neque ut minima dolorem. Consequatur tempora tempore iste possimus fugiat esse doloribus porro delectus libero tenetur. Accusamus quia fuga eligentzdi unde fugiat libero aperiam, deleniti, itaque explicabo nam, architecto voluptatibus excepturi quam aliquam distinctio ab eaque.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident hic ratione repudiandae ullam dolore tempora recusandae quas necessitatibus, at veniam repellat tempore, fugiat architecto aspernatur similique eligendi laudantium vitae aut illo temporibus minima ducimus ab. Dolorem corporis quas facere?
                </p>
            </div >
        </div >
    )
}

export default About