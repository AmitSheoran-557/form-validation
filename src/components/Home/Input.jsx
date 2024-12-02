import React from 'react'
import { SearchIcon } from '../common/Icons'

const Input = () => {
    return (
        <div className='bg-white rounded-[15px] border max-w-[435px] w-full justify-between ps-[14px] py-[3px] items-center  pe-[3px] overflow-hidden flex'>
            <div className='flex'>
                <SearchIcon />
                <input type="text" className='text-base placeholder:text-base w-full max-w-[400px] placeholder:text-black opacity-[52%] pl-5 outline-none' placeholder='Search' />
            </div>
            <button className='py-[11.5px] px-[27px] hover:bg-orange-700 duration-200 ease-linear font-semibold lg:text-base text-sm text-white rounded-[13px] bg-[#FF5501]'>Start</button>
        </div>
    )
}

export default Input