import React from 'react'
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div className='md:mx-10
    mx-6'>
    
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         {/*Left Section */}
        <div>
            <img className='w-40 mb-5' src={logo} alt=""/>
            
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>In our busy lives, filled with work commitments, social obligations, and personal responsibilities, taking the time for a doctor appointment might seem like a minor inconvenience. However, these appointments are not just routine check-ups; they are a vital component of proactive healthcare.</p>
        </div>

           {/*Center Section */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>

            </ul>
        </div>
          
          {/*Right Section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>01934215678</li>
              <li>docpulse.appointment@gmail.com</li>
            </ul>
        </div>
      </div>
       {/*-------------------CopyrightText--------------- */}
      <div>
        <hr className='h-0.5 border-b border-b-gray-400'/>
        <p className='py-5 text-sm text-center text-gray-600 font-medium'>Copyright 2024@ DocPulse - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer