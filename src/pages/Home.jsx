import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Carausel from '../components/Carausel'

const Home = () => {
    const dest = useSelector(state => state.destinationActionSlice.destinations)
    const tourd = useSelector(state => state.tourActionSlice.tours)


    return (
        <div className='overflow-x-hidden'>
            <div>
                <Banner />
            </div>
            <div className='justify-center py-[10vw] px-[6vw] flex flex-col gap-[4vw]'>
                <div>
                    <span className='max-sm:text-[6vw] text-[3vw] border-b-[.2vw] border-orange-500 font-bold flex flex-col'>
                        <span className='text-orange-500 '>Famous Dictation!</span>
                        <span className='flex gap-[1vw]'>Our Popular <p className='text-orange-500'>Dictation's</p></span>
                    </span>
                </div>
                <div>
                    <Carausel />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
