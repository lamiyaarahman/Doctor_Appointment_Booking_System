import React, { useContext } from 'react'
// import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext)


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-100 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='ml-10 w-26 h-36 ' src={item.image} alt=""/>
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-green-500'>
                  <p className='w-2 h-2 rounded-full bg-green-500 it'></p><p className='items-center'>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-md'>{item.speciality}</p>
              </div>
            </div>
            
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-primary text-white px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors