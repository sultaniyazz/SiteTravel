import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { navBar } from '../constant/navBars'
import { useDispatch, useSelector } from 'react-redux'
import { modal } from '../destinations/pageActionSlice'

const RootLayout = () => {
    const dispatch = useDispatch();
    const modalData = useSelector(state => state.pageActionSlice.showSideBar);

    return (
        <div className='w-screen  h-screen dark:bg-[#0c0a09] bg-white dark:text-white select-none overflow-hidden overflow-x-hidden font-Montserrat'>
            <div className={`${modalData ? "left-0" : "left-[-50%]"} duration-500 absolute sm:hidden bg-white dark:bg-[#0c0a09] p-[1vw] border-r-[.1vw] top-0 z-20 w-[50vw] h-screen`}>
                <div className='py-[2vw] h-full overflow-y-auto'>
                    <div className='h-[10vw] flex justify-end items-center px-[2vw]'>
                        <button onClick={() => dispatch(modal())} className="active:scale-95">
                            <AiOutlineClose className="text-[4vw]" />
                        </button>
                    </div>
                    <div className='flex flex-col gap-[1vw] px-[1vw]'>
                        {navBar.map((item) => (
                            <NavLink onClick={() => dispatch(modal())} to={item.path} key={item.id} className='py-[2vw] px-[1vw] rounded active:scale-95 text-[3vw] border-b-[.1vw] dark:border-black font-semibold'>{item.title}</NavLink>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Header />
            </div>
            <div className='w-screen h-[calc(100vh-70px)] overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout;
