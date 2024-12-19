import React from 'react'
import banner from "../assets/banner.png"

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary  px-6 md:px-10 lg:px-14 md:mx-10 rounded-lg'>
      {/*-----------------Left Side--------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
          <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight m-auto md:m-0'>
          Book An Appointment Today 
          
          </p>
          <div className='text-white font-medium lg:text-xl'>
          — Our mission is to provide a better patient experience.
          
          </div>
          <a href='#speciality' className='flex items-center gap-2 bg-white  px-8 py-3 rounded-full text-gray-600 text-sm md:m-0 m-auto hover:scale-105 transition-all duration-300'>Book Appointment</a>
      </div>
      {/*--------------Right Side--------------- */}
      <div className='md:w-1/2  '>
          <img className='w-full   bottom-0 h-auto' src={banner} alt=""/>
      </div>
    </div>
  )
}

export default Header