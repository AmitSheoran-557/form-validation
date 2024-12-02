import React from 'react'

const MainHeading = ({Heading}) => {
  return (
    <div>
        <h2 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-extrabold text-center max-w-[786px] lg:mb-5 mb-3 '>{Heading}</h2>
    </div>
  )
}

export default MainHeading