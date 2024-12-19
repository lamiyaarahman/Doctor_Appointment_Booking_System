import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import verified_icon from '../assets/verified_icon.svg'
import info_icon from '../assets/info_icon.svg'
import Layout from '../layout/layout'



const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState()

  const [docSlots,setDocSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo  = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    //console.log(docInfo)
  }


  const getAvailableSlots = async () => {
        setDocSlots([])

        //getting current date
        let today = new Date()
        for(let i = 0 ; i < 7; i++){
          //getting date index
          let currentDate = new Date(today)
          currentDate.setDate(today.getDate()+ i)

          //setting end time of the date with index
          let endTime = new Date()
          endTime.setDate(today.getDate() + i )
          endTime.setHours(21,0,0,0) 

          //setting hours
          if(today.getDate() === currentDate.getDate()){
            currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
            currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
          }else{
            currentDate.setHours(10)
            currentDate.setMinutes(0)
          }
          let timeSlots = []

          while(currentDate < endTime) {
            let formattedTime = currentDate.toLocaleTimeString([], { hour : '2-digit' , minute : '2-digit'})

            //add slot to array

            timeSlots.push({
              datetime : new Date (currentDate),
              time: formattedTime
            })

            //Increment current time by 30 minutes
            currentDate.setMinutes(currentDate.getMinutes() + 30)


          }

          setDocSlots(prev => ([...prev, timeSlots]))
        }
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])


  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])


  useEffect(()=>{
      console.log(docSlots);
  },[ docSlots])
  



  return docInfo && (
    <Layout>
      {/*------------------Doctor Details--------------- */}
      <div className='flex flex-col sm:flex-row gap-4 md:mx-40 mt-7'>
        <div>
          <img className='bg-primary w-full  sm:max-w-72 rounded-lg' src={docInfo.image} alt=""/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
          {/*--------------Doc Info--------------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} 
          <img className='w-5' src={verified_icon} alt=""/> 
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} -- {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/*--------------------Doc About------------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={info_icon} alt=""/> </p>
            <p className='text-sm text-gray-500 mt-2 max-w-[700px]'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>BDT {docInfo.fees}</span>
          </p>
        </div>
        
      </div>
      {/*-------------Booking Slots------------ */}
      <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700 md:mr-72'>
              <p className='ml-4'>Booking Slots</p>
              <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 ml-4'>
                {docSlots.length && docSlots.map((item,index)=>(
                  <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))}
              </div>
              <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 ml-4'>
                {docSlots.length && docSlots[slotIndex].map((item,index)=>(
                    <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white': 'text-gray-700 border border-gray-400'}`} key={index}>
                        {item.time.toLowerCase()}
                    </p>
                ))}
              </div>
              <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 mt-8 ml-4'>Book An Appointment</button>
        </div>

    </Layout>
  )
}

export default Appointment