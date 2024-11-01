import React from 'react'
import img from '../images/bannersm.png'
import img2 from '../images/banner.jpg'
import { useSelector } from 'react-redux'

const Banner = () => {
    const dest = useSelector(state => state.destinationActionSlice.destinations)
    const tourd = useSelector(state => state.tourActionSlice.tours)

    return (
        <div className='relative dark:bg-[#0a0a0a] shadow-[0px_22px_91px_7px_rgba(34,60,80,0.2)'>
            <div className='w-screen  flex max-sm:gap-[2vw] max-sm:flex-col justify-center max-sm:py-[10vw] items-center'>
                <img className='w-screen h-[45vw] max-sm:order-2 object-cover max-sm:hidden object-center' src={img2} alt="" />
                <img className='w-screen max-sm:w-[80vw] h-full max-sm:order-2 object-cover sm:hidden max-sm:static object-center' src={img} alt="" />
                <div className='absolute max-sm:order-1 max-sm:static flex flex-col  items-center justify-center gap-[5vw]'>
                    <div className='flex justify-center flex-col items-center'>
                        <span className='text-[80px] sm:text-white max-md:text-[70px] max-sm:text-[8vw] font-medium dark:text-white'>ADVENTURE</span>
                        <p className='text-gray-300 max-sm:text-gray-500 max-md:text-[14px] max-sm:text-[2vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, molestias.</p>
                    </div>
                    <div className='rounded max-sm:rounded-[2vw] dark:text-white max-sm:shadow-lg flex items-center justify-center gap-[5vw] backdrop-blur-sm border-[.1vw] max-sm:p-[2vw] p-[1vw]'>
                        <div className='bg-white dark:bg-[#09090b]  rounded-[1vw] w-[50vw] max-sm:w-[80vw] h-[8vw] max-sm:h-[10vw] flex max-sm:py-[1vw] justify-center gap-[5vw]'>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='font-bold text-[2vw] max-sm:text-[3vw]'>+{dest.length}</span>
                                <span className='text-[2vw] max-sm:text-[3vw]'>Destinations</span>
                            </div>
                            <div className='flex flex-col justify-center border-x-[.1vw] px-[5vw] max-sm:px-[8vw] items-center'>
                                <span className='font-bold text-[2vw] max-sm:text-[3vw]'>+{tourd.length}</span>
                                <span className='text-[2vw] max-sm:text-[3vw]'>Tours</span>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='font-bold text-[2vw] max-sm:text-[3vw]'>71</span>
                                <span className='text-[2vw] max-sm:text-[3vw]'>Users</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
