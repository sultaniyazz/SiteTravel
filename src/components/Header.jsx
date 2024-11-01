import { AiOutlineMenu } from "react-icons/ai";
import { CiDark, CiSun } from "react-icons/ci";
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { SiAircanada } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, modal } from "../destinations/pageActionSlice";

const Header = () => {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.pageActionSlice.mode)

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            dispatch(darkMode());
        }
    }, [dispatch]);

    useEffect(() => {
        if (mode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
        }
    }, [mode]);


    const handleMode = () => {
        dispatch(darkMode())
    }

    return (
        <div className='bg-white dark:bg-[#0c0a09] sticky text-[#09090b]  top-0 border-b-[.1vw] px-[5vw] h-[70px] flex items-center justify-between'>
            <div className="flex items-center gap-[2vw]">
                <div className="flex items-center sm:hidden">
                    <button onClick={() => dispatch(modal())} className="active:scale-95 dark:text-white p-[1vw] rounded"><AiOutlineMenu className="text-[4vw]" /></button>
                </div>
                <div className="flex items-center gap-[.5vw]">
                    <span><SiAircanada className="text-[40px] max-md:text-[30px] max-sm:text-[25px] text-orange-600" /></span>
                    <h1 className='font-bold text-[40px] max-md:text-[30px] max-sm:text-[25px] dark:text-white font-PermanentMarker'>Tourvisto</h1>
                </div>
            </div>
            <div className='flex items-center gap-[2vw]'>
                <div className="max-sm:hidden">
                    <Navbar />
                </div>
                <div className='flex max-md:text-[13px] outline-none items-center gap-[1vw]'>
                    <button onClick={() => handleMode()} className="bg-gray-100 dark:bg-[#171717] border-[.1vw] rounded-full active:scale-95">
                        {mode ? <div><CiSun className="text-[30px] dark:text-white max-md:text-[25px]" /></div> : <div><CiDark className="text-[30px] max-md:text-[25px]" /></div>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
