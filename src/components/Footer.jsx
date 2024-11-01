import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import React from 'react'

const Footer = () => {
    return (
        <div className='h-[20vw]  max-sm:h-[30vw] justify-center w-full text-[1.3vw] max-md:text-[1.8vw] max-sm:text-[2vw] dark:bg-black bg-orange-600 text-white flex flex-col '>
            <div className='flex justify-center'>
                <div className='flex gap-[2.5vw] justify-between w-[80vw] max-md:w-[85vw] max-sm:w-[95vw]'>
                    <div className='flex flex-col gap-[.2vw]'>
                        <div className='font-semibold'>Info</div>
                        <div>
                            <h1>Formats</h1>
                            <h1>Compression</h1>
                            <h1>Pricing</h1>
                            <h1>FAQ</h1>
                            <h1>Status</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[.2vw]'>
                        <div className='font-semibold'>Resources</div>
                        <div>
                            <h1>Formats</h1>
                            <h1>Compression</h1>
                            <h1>Pricing</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[.2vw]'>
                        <div className='font-semibold'>Company</div>
                        <div>
                            <h1>Formats</h1>
                            <h1>Compression</h1>
                            <h1>Pricing</h1>
                            <h1>FAQ</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[.2vw]'>
                        <div className='font-semibold'>Info</div>
                        <div>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laudantium reiciendis tempora repellat, libero voluptate. Velit amet harum doloribus quam!</h1>
                        </div>
                        <div>
                            <ul className="flex gap-[1vw]">
                                <li className=""><FaTelegramPlane className="text-[2.5vw] max-md:text-[4vw] p-[.3vw] rounded text-white bg-blue-600" /></li>
                                <li className=""><BsInstagram className="text-[2.5vw] max-md:text-[4vw] p-[.3vw] rounded text-white bg-red-600" /></li>
                                <li className=""><CgFacebook className="text-[2.5vw] max-md:text-[4vw] p-[.3vw] rounded text-white bg-blue-800" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
