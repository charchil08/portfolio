import React from 'react'

const SocialLinks = ({ links }) => {

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed' >
            <ul>
                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-110px]
                        hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}>
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
    )
}

export default SocialLinks