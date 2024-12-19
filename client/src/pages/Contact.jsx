import React from 'react'
import Layout from '../layout/layout'
import contact from "../assets/contact.jpg"

const Contact = () => {
  return (
    <Layout>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span> </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[400px]' src={contact} alt=""/>

        <div className='flex flex-col justify-center items-start gap-6 mx-10'>
            <p className='font-semibold text-lg text-gray-600 text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>00000 Dhaka, Bangladesh</p>
            <p className='text-gray-500'>01934215678</p>
            <p className='text-gray-500'>Email: docpulse.appointment@gmail.com</p>
            <p className='font-semibold text-lg text-gray-700'>CAREERS AT DocPulse</p>
            
        </div>
      </div>
    </Layout>
  )
}

export default Contact