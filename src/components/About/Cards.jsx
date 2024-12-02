import React from 'react'
import { LoremCards } from '../common/Healper'
import { PeopleIconTwo } from '../common/Icons'
import HeadingTwo from '../common/HeadingTwo'
const Cards = () => {
  return (
    <div className='flex justify-center items-center py-10'>
    <div className='mx-auto max-w-[1440px] px-3'>
      <HeadingTwo TittleOne={'Lorem ipsum'} />
      <div className='flex flex-wrap justify-center items-center gap-6 lg:mt-10 md:mt-7 mt-5'>
        {LoremCards.map((data, i) => (
          <div
            key={i}
            className="max-w-[365px] py-5 px-[30px] rounded-3xl bg-[#CFEEFF]" >
              <PeopleIconTwo/>
            <h2 className="lg:mt-8 mt-5 font-semibold xl:text-2xl lg:text-xl text-sm lg:mb-4 mb-3">
              {data.heading}
            </h2>
            <h2 className="font-light lg:text-base text-xs">
              {data.para}{" "}
              <span className="text-[#007AFF] font-semibold">
                {data.readBtn}
              </span>
            </h2>
          </div>
        ))}
      </div>
    </div></div>
  )
}

export default Cards