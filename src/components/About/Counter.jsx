import React, { useState } from 'react'
import { CounterIcon } from '../common/Icons';
const Counter = () => {
    const [value, setValue] = useState(0)
    const addValue = () => {
        setValue(value + 1);
    }
    const removeValue = () => {
        setValue(value - 1);
    }
    return (
        <div className='flex justify-between max-w-[1140px] mx-auto py-20 max-md:py-10 max-sm:py-5 flex-wrap max-lg:justify-center max-lg:gap-10 px-4'>
            <div className='items-center flex'>
                <div className='flex gap-[97px] max-sm:gap-10 items-center justify-center bg-[#1EABF8] border-[5px] border-black max-w-[402px] py-9 max-sm:py-5 px-[60px] max-sm:px-10 rounded-[50px]'>
                    <button className='text-6xl' onClick={removeValue}>-</button>
                    <p className='text-6xl'>{value}</p>
                    <button className='text-6xl' onClick={addValue}>+</button>
                </div>
            </div>
            <div className='flex flex-col gap-7'>
                <div className='flex gap-7 flex-wrap justify-center'>
                    <div className='w-[268px] h-[207px] flex flex-col justify-center text-white bg-[#85B6A6] relative'>
                        <div className='absolute right-0 bottom-0'>
                            <CounterIcon />
                        </div>
                        <p className='text-6xl font-semibold text-center'>50%</p>
                        <p className='max-w-[140px] text-xl text-center opacity-80 mx-auto'>Reduction in Pain</p>
                    </div>
                    <div className='w-[268px] h-[207px] flex flex-col justify-center text-white bg-[#82B2C2] relative'>
                        <div className='absolute right-0 bottom-0'>
                            <CounterIcon />
                        </div>
                        <p className='text-6xl font-semibold text-center'>90%</p>
                        <p className='max-w-[190px] text-xl text-center opacity-80 mx-auto'>Increase In-Patient Satisfaction</p>
                    </div>
                </div>
                <div className='w-[268px] h-[207px] flex flex-col justify-center text-white bg-[#076787] mx-auto relative'>
                    <div className='absolute right-0 bottom-0'>
                        <CounterIcon />
                    </div>
                    <p className='text-6xl font-semibold text-center'>60%</p>
                    <p className='max-w-[150px] text-xl text-center opacity-80 mx-auto'>Faster Recovery</p>
                </div>
            </div>
        </div>

    )
};



export default Counter