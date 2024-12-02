import React from 'react';
import { useLocation } from 'react-router-dom';
import SubHeading from './SubHeading';
import MainHeading from './MainHeading';
import Input from '../Home/Input';

const Hero = () => {
    const location = useLocation().pathname;

    return (
        <section className={`${location === "/"
            ? "flex items-center min-h-screen !bg-red-500 overflow-hidden rounded-b-[30px]" : "flex items-center  min-h-[50vh] bg-[#01A4FFBD] !bg-opacity-[74%] overflow-hidden rounded-b-[30px]"
            }`}>
            <div className="container px-3 max-w-[1140px] mx-auto flex flex-col justify-center items-center">
                <MainHeading Heading={'Lorem ipsum dolor sit amet consectetur. Sceleris'} />
                <SubHeading SubHeading={'Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.'} />
                <span className={`${location === "/"
                    ? "" : "hidden"
                    }`}> <Input /></span>
                <div className='flex gap-7'>

                    <span className={`${location === "/"
                        ? "hidden" : ""
                        }`}> <button className='bg-transparent lg:py-[14px] py-2 lg:px-6 px-5 text-white border-white border-[1px] rounded-full duration-300 ease-linear font-semibold lg:text-base text-sm hover:bg-white hover:text-[#43BBFF]'>Sign up</button></span>
                    <span className={`${location === "/"
                        ? "hidden" : ""
                        }`}> <button className='bg-transparent lg:py-[14px] py-2 lg:px-[26px] px-5 text-white border-white border-[1px] rounded-full duration-300 ease-linear font-semibold lg:text-base text-sm hover:bg-white hover:text-[#43BBFF]'>Login</button></span>
                </div>
            </div>
        </section>
    )
}

export default Hero