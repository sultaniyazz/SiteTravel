import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer';

const Destinations = () => {
    const dest = useSelector(state => state.destinationActionSlice.destinations)
    const destLoad = useSelector(state => state.destinationActionSlice.isDestLoad)
    const destLoadArr = [1, 2, 3, 4]

    return (
        <div >
            <div className='p-[1vw] flex flex-col gap-[3vw] items-center h-full overflow-y-auto'>
                <div className='border-b-[.1vw] border-orange-500'>
                    <span className='text-[2vw] max-md:text-[3vw] max-sm:text-[4vw] font-bold'>All Destinations</span>
                </div>
                {destLoad ?
                    <div className='w-full gap-[1vw] p-[1vw] grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
                        {destLoadArr.map((item) => (
                            <div key={item} className='group bg-white dark:bg-black dark:border-[.1vw] border-[.1vw] dark:border-gray-600 rounded p-[.1vw]'>
                                <div className='relative overflow-hidden'>
                                    <p className='h-[25vw] group-hover:scale-110 transition-transform duration-300 max-md:h-[35vw] bg-gray-200 animate-pulse max-sm:h-[50vw] w-full object-cover rounded-t object-center' />
                                </div>
                                <div className='flex flex-col gap-[.5vw] p-[1vw]'>
                                    <h1 className='text-[1.5vw] max-md:text-[2vw] max-sm:text-[3vw] w-[15vw] h-[1vw] bg-gray-200 font-semibold'>{item.name}</h1>
                                    <p className='text-[1.2vw] max-md:text-[1.8vw] max-sm:text-[2vw] w-[12vw] h-[1vw] bg-gray-200'>{item.description}</p>
                                    <p className='text-[1.2vw] max-md:text-[1.8vw] max-sm:text-[2vw] w-[13vw] h-[1vw] bg-gray-200'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className='w-full gap-[1vw] p-[1vw] grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
                        {dest.map((item) => (
                            <div key={item.id} className='group bg-white dark:bg-black dark:border-[.1vw] border-[.1vw] dark:border-gray-600 rounded p-[.1vw]'>
                                <div className='relative overflow-hidden'>
                                    <img className='h-[25vw] group-hover:scale-110 transition-transform duration-300 max-md:h-[35vw] max-sm:h-[50vw] w-full object-cover rounded-t object-center' src={item.image} alt="" />
                                </div>
                                <div className='flex flex-col gap-[.5vw] p-[1vw]'>
                                    <h1 className='text-[1.5vw] max-md:text-[2vw] max-sm:text-[3vw] font-semibold'>{item.name}</h1>
                                    <p className='text-[1.2vw] max-md:text-[1.8vw] max-sm:text-[2vw]'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Destinations
