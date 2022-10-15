import React from 'react'

// for social links
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinksForSmallDevice = () => {

    const smallIcons = [
        {
            id: 1,
            child: (
                <>
                    < FaLinkedin size={30} />
                </>
            ),
            abbr: 'LinkedIn',
            href: "https://www.linkedin.com/in/charchil-kajaliya/",
            style: 'bg-[#0A66C2]'
        },
        {
            id: 2,
            child: (
                <>
                    < FaGithub size={30} />
                </>
            ),
            abbr: 'Github',
            href: "https://github.com/charchil08",
            style: 'bg-[#171515]'
        },
        {
            id: 3,
            child: (
                <>
                    < HiOutlineMail size={30} />
                </>
            ),
            abbr: 'Mail',
            href: "mailto:er.charchilkajaliya@gmail.com",
            style: 'bg-[#EA4335]'
        },
        {
            id: 4,
            child: (
                <>
                    < BsFillPersonLinesFill size={30} />
                </>
            ),
            abbr: 'Resume/CV',
            href: "/Resume-Charchil-Full_Stack_Developer.pdf",
            style: "bg-[#696969]",
            download: true
        }
    ]

    return (
        <div name="social" >
            <div className='lg:hidden flex flex-row justify-center w-full bg-gradient-to-b  from-gray-800 to-black pb-12'>

                <div className="max-w-screen-lg px-4 w-full h-full text-white flex justify-center items-center flex-col border-2 py-4 mx-3 rounded-lg border-[#8300b8] mt-12">

                    <p className="text-xl text-center mb-6 animate-character text-blue-500 border-blue-500 border-b-2 pb-2 font-bold w-fit">Let's connect</p>

                    <ul className='flex justify-center gap-4' >
                        {
                            smallIcons.map(({ id, child, href, style, download, abbr }) => (
                                <li
                                    key={id}
                                    className={`flex justify-between items-center p-2 border-3 rounded-lg ${style} hover:scale-110 duration-300`}
                                >
                                    <a href={href} className='flex justify-between items-center w-full text-white'
                                        target='_blank'
                                        download={download}
                                    >
                                        {child}
                                    </a>

                                </li>
                            ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SocialLinksForSmallDevice