import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carausel = () => {
    const [slidesToShow, setSlidesToShow] = useState(3)

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.matchMedia('(max-width: 641px)').matches) {
                setSlidesToShow(1);
            } else if (window.matchMedia('(max-width: 768px)').matches) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        updateSlidesToShow();

        window.addEventListener('resize', updateSlidesToShow);

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const dest = useSelector(state => state.destinationActionSlice.destinations)
    const newArr = [1, 2, 3]
    const destLoad = useSelector(state => state.destinationActionSlice.isDestLoad)


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
    };
    return (
        <div>
            {destLoad ?
                <div>
                    <Slider {...settings}>
                        {newArr.map((item, index) => (
                            <div key={index} className='p-[.6vw]'>
                                <div className='rounded-[1vw] bg-white  hover:bg-gray-100 border-[.1vw] flex flex-col'>
                                    <div className='flex justify-center'>
                                        <p className='object-cover rounded-t-[1vw] animate-pulse object-center max-md:h-[50vw] max-sm:h-[70vw] max-md:w-full h-[25vw] w-[28vw] bg-gray-200'></p>
                                    </div>
                                    <div className='w-full bg-gray-200 animate-pulse rounded-b-[1vw] p-[.5vw] text-[1.5vw] text-black px-[1vw] flex flex-col gap-[.5vw] h-[100px]'>
                                        <div className='font-bold text-[20px] max-md:text-[25px] max-sm:text-[40px] w-[10vw] h-[1vw] bg-gray-300'></div>
                                        <div className='text-[1vw] max-md:text-[2vw] max-sm:text-[3vw] w-[15vw] h-[1vw] bg-gray-300'>{item.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                :
                <div>
                    <Slider {...settings}>
                        {dest.map(item => (
                            <div key={item.id} className='p-[1vw]'>
                                <div className='rounded-[1vw] bg-white hover:bg-gray-100 shadow-[0vw_0.3vw_0.7vw_0.1vw_rgba(34,60,80,0.2)] flex flex-col'>
                                    <div>
                                        <img className='object-cover rounded-t-[1vw] object-center max-md:h-[50vw] max-sm:h-[70vw]  h-[25vw] w-full' src={item.image} alt="" />
                                    </div>
                                    <div className='w-full rounded-b-[1vw] p-[.5vw] text-[1.5vw] text-black px-[1vw] flex flex-col gap-[.2vw] h-[100px]'>
                                        <div className='font-bold text-[20px] max-md:text-[25px] max-sm:text-[40px]'>{item.name}</div>
                                        <div className='text-[1vw] max-md:text-[2vw] max-sm:text-[2.4vw] max-sm:px-[1vw]'>{item.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            }
        </div>
    )
}

export default Carausel
