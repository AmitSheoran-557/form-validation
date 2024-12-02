import React from 'react'

const HeadingTwo = (props) => {
  return (
    <div>
      <h1 className='font-semibold xl:text-[40px] lg:text-3xl text-2xl text-center'>{props.TittleOne} <span className='text-[#419FEF]'>{props.TittleTwo}</span></h1>  
    </div>
  )
}

export default HeadingTwo