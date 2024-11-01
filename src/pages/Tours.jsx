import { AiFillStar } from "react-icons/ai";
import React from 'react';
import { useSelector } from 'react-redux';
import Footer from "../components/Footer";

const Tours = () => {
    const tours = useSelector(state => state.tourActionSlice.tours);
    const loading = useSelector(state => state.tourActionSlice.isTourLoad);
    const toursArr = [1, 2, 3]

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <AiFillStar key={i} className={`text-[1.5vw] max-md:text-[2vw] max-sm:text-[3vw] ${i <= rating ? 'text-orange-500' : 'text-gray-300'}`} />
            );
        }
        return stars;
    };
    return (
        <div>
            <div className='h-full max-sm:px-[3vw] p-[1vw] overflow-y-auto flex flex-col max-sm:p-[1vw] max-sm:gap-[1vw] gap-[.5vw]'>
                {loading ?
                    <div>
                        {toursArr.map((item) => (
                            <div key={item.id} className='border-[.1vw] gap-[.1vw] group rounded-[1vw] flex max-sm:flex-col w-full p-[.5vw] py-[1vw]'>
                                <div className="relative overflow-hidden">
                                    <p className='w-[40vw] bg-gray-800 rounded-[1vw] max-sm:w-full max-sm:h-[60vw] duration-300 group-hover:scale-110 h-[20vw] object-cover object-center animate-pulse' src={item.images} alt=""
                                    />
                                </div>
                                <div className='flex flex-col w-full gap-[1vw] max-sm:gap-[1.5vw] px-[1vw] py-[1vw]'>
                                    <h1 className='text-[2vw] max-md:text-[3vw] max-sm:text-[4vw] font-semibold rounded-full w-[10vw] h-[.8vw] bg-gray-700'></h1>
                                    <p className='font-medium text-[1.2vw] max-md:text-[2vw] max-sm:text-[2.5vw] rounded-full  w-[30vw] h-[.8vw] bg-gray-700'></p>
                                    <p className='font-medium text-[1.2vw] max-md:text-[2vw] max-sm:text-[2.5vw] rounded-full  w-[40vw] h-[.8vw] bg-gray-700'></p>
                                    <p className='font-medium text-[1.2vw] max-md:text-[2vw] max-sm:text-[2.5vw] rounded-full  w-[25vw] h-[.8vw] bg-gray-700'></p>
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center gap-[.2vw]'>
                                            {renderStars(item.rating)}
                                            <span className="text-[1.5vw] max-md:text-[2vw] max-sm:text-[3vw] ml-[.5vw]">{item.rating}</span>
                                        </div>
                                        <span className="flex items-center gap-[1vw] text-[1.5vw] max-md:text-[2vw] max-sm:text-[3vw]">
                                            <p>Per person</p>
                                            <p>/</p>
                                            <p className="text-orange-500 font-semibold">{item.price}$</p>
                                        </span>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="border-[.1vw] hover:bg-gray-100 dark:hover:bg-black px-[3vw] max-sm:py-[1vw] border-orange-500 font-bold active:scale-95 rounded-full py-[.5vw]">View Detail</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div>
                        {tours.map((item) => (
                            <div key={item.id} className='border-[.1vw] group rounded-[1vw] flex max-sm:flex-col w-full p-[.5vw] py-[1vw]'>
                                <div className="relative overflow-hidden">
                                    <img
                                        className='w-[40vw] max-sm:w-full max-sm:h-[60vw] duration-300 group-hover:scale-110 h-[20vw] object-cover object-center rounded-[1vw]'
                                        src={item.images}
                                        alt=""
                                    />
                                </div>
                                <div className='flex flex-col w-full gap-[1vw] max-sm:gap-[1.5vw] px-[1vw] py-[1vw]'>
                                    <h1 className='text-[2vw] max-md:text-[3vw] max-sm:text-[4vw] font-semibold'>{item.title}</h1>
                                    <p className='font-medium text-[1.2vw] max-md:text-[2vw] max-sm:text-[2.5vw]'>{item.details}</p>
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center gap-[.2vw]'>
                                            {renderStars(item.rating)}
                                            <span className="text-[1.5vw] max-md:text-[2vw] max-sm:text-[3vw] ml-[.5vw]">{item.rating}</span>
                                        </div>
                                        <span className="flex items-center gap-[1vw] text-[1.5vw] max-md:text-[2vw] max-sm:text-[3vw]">
                                            <p>Per person</p>
                                            <p>/</p>
                                            <p className="text-orange-500 font-semibold">{item.price}$</p>
                                        </span>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="border-[.1vw] hover:bg-gray-100 dark:hover:bg-black px-[3vw] max-sm:py-[1vw] border-orange-500 font-bold active:scale-95 rounded-full py-[.5vw]">View Detail</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}

export default Tours;
